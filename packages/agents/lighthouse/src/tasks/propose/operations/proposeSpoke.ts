import {
  createLoggingContext,
  NxtpError,
  RequestContext,
  jsonifyError,
  domainToChainId,
  sign,
} from "@connext/nxtp-utils";
import { BigNumber } from "ethers";
import { defaultAbiCoder, solidityKeccak256 } from "ethers/lib/utils";

import { sendWithRelayerWithBackup } from "../../../mockable";
import { NoChainIdForDomain, LatestFinalizedSnapshot, NoSpokeConnector, NoRootTimestamp } from "../errors";
import { getContext } from "../propose";

export type ExtraPropagateParam = {
  _connector: string;
  _fee: string;
  _encodedData: string;
};

const FINALIZED_HASH = "0x0000000000000000000000000000000000000000000000000000000000000001";

export const proposeSpoke = async (spokeDomain: string) => {
  const {
    logger,
    config,
    chainData,
    adapters: { database, contracts, chainreader },
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(proposeSpoke.name);
  const latestFinalizedSnapshot = await database.getCurrentFinalizedSnapshot();
  if (!latestFinalizedSnapshot) {
    throw new LatestFinalizedSnapshot(requestContext, methodContext);
  }
  if (!latestFinalizedSnapshot.finalizedTimestamp) {
    throw new NoRootTimestamp(latestFinalizedSnapshot.aggregateRoot, requestContext, methodContext);
  }

  const spokeRoot = await database.getSpokeOptimisticRoot(latestFinalizedSnapshot.aggregateRoot, spokeDomain);
  if (spokeRoot && spokeRoot.status === "Finalized") {
    logger.info("Aggregate root already finalized on spoke.", requestContext, methodContext, {
      aggregateRoot: latestFinalizedSnapshot.aggregateRoot,
      spokeDomain,
    });
    // End propose. Aggregate root already finalized
    return;
  }

  const isProven = await aggregateRootCheck(latestFinalizedSnapshot.aggregateRoot, spokeDomain, requestContext);
  if (isProven) {
    logger.info("Aggregate root already finalized on spoke onchain", requestContext, methodContext, {
      aggregateRoot: latestFinalizedSnapshot.aggregateRoot,
      spokeDomain,
    });
    return;
  }

  if (spokeDomain === config.hubDomain) {
    logger.info("Starting propose operation for hub", requestContext, methodContext, spokeDomain);
    await sendRootToHubSpoke(requestContext);
    return;
  }
  logger.info("Starting propose operation for spoke", requestContext, methodContext, spokeDomain);

  const spokeChainId = chainData.get(spokeDomain)?.chainId;
  if (!spokeChainId) {
    throw new NoChainIdForDomain(spokeDomain, requestContext, methodContext);
  }

  // Find the latest proposedAggregateRootHash.
  const spokeConnector = config.chains[spokeDomain]?.deployments.spokeConnector;
  if (!spokeConnector) {
    throw new NoSpokeConnector(spokeDomain, requestContext, methodContext);
  }

  // TODO: V1.1 right way to find out the latest aggregate root
  let proposedAggregateRootHash: string = FINALIZED_HASH;
  const idEncodedData = contracts.spokeConnector.encodeFunctionData("proposedAggregateRootHash");
  try {
    const idResultData = await chainreader.readTx({
      domain: +spokeDomain,
      to: spokeConnector,
      data: idEncodedData,
    });

    [proposedAggregateRootHash] = contracts.spokeConnector.decodeFunctionResult(
      "proposedAggregateRootHash",
      idResultData,
    );
  } catch (err: unknown) {
    logger.error(
      "Failed to read the latest proposedAggregateRootHash from onchain",
      requestContext,
      methodContext,
      jsonifyError(err as NxtpError),
    );
    // Cannot proceed without the proposedAggregateRootHash.
    return;
  }
  logger.info("Got the latest proposedAggregateRootHash from onchain", requestContext, methodContext, {
    proposedAggregateRootHash,
  });

  if (proposedAggregateRootHash !== FINALIZED_HASH) {
    logger.info(
      "Latest proposed aggregate root hash is not FINALIZED_HASH. In progress now.",
      requestContext,
      methodContext,
      {
        proposedAggregateRootHash,
      },
    );
    return;
  }

  const latestSpokeOptimisticRoot = await database.getLatestSpokeOptimisticRoot(spokeDomain);

  try {
    await proposeOptimisticRoot(
      latestFinalizedSnapshot.aggregateRoot,
      latestFinalizedSnapshot.finalizedTimestamp,
      latestSpokeOptimisticRoot ? latestSpokeOptimisticRoot.proposeTimestamp! : 0,
      spokeDomain,
      spokeChainId,
      requestContext,
    );
  } catch (err: unknown) {
    logger.error("Error proposing snapshot", requestContext, methodContext, jsonifyError(err as NxtpError));
  }
};

export const proposeOptimisticRoot = async (
  aggregateRoot: string,
  rootTimestamp: number,
  lastProposedAt: number,
  spokeDomain: string,
  spokeChainId: number,
  _requestContext: RequestContext,
) => {
  const {
    logger,
    adapters: { contracts, relayers, chainreader, wallet },
    config,
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(proposeOptimisticRoot.name, _requestContext);

  const relayerProxyAddress = config.chains[spokeDomain].deployments.relayerProxy;

  const proposal = { aggregateRoot, rootTimestamp };

  //  V1.1 Sign the proposal -- get signature from whitelisted proposer agent
  const payload = defaultAbiCoder.encode(
    ["bytes32", "uint256", "uint256", "uint32"],
    [aggregateRoot, rootTimestamp, lastProposedAt, +spokeDomain],
  );
  const hash = solidityKeccak256(["bytes"], [payload]);
  const signature = await sign(hash, wallet);

  // encode data for relayer proxy hub
  const fee = BigNumber.from(0);
  logger.info("Got params for sending", requestContext, methodContext, {
    fee,
    proposal,
    lastProposedAt,
    payload,
    hash,
    signature,
  });

  const encodedDataForRelayer = contracts.relayerProxy.encodeFunctionData("proposeAggregateRoot", [
    proposal.aggregateRoot,
    proposal.rootTimestamp,
    signature,
    fee,
  ]);

  try {
    const { taskId } = await sendWithRelayerWithBackup(
      spokeChainId,
      spokeDomain,
      relayerProxyAddress,
      encodedDataForRelayer,
      relayers,
      chainreader,
      logger,
      requestContext,
    );
    logger.info("Propose tx sent for spoke", requestContext, methodContext, { taskId, spokeDomain });
    // TODO: Update DB state to processed for all snapshot roots with ID <= this snapshotId
  } catch (e: unknown) {
    logger.error("Error at sendWithRelayerWithBackup", requestContext, methodContext, e as NxtpError, {
      spokeChainId,
      spokeDomain,
      relayerProxyAddress,
      encodedDataForRelayer,
    });
  }
};

export const sendRootToHubSpoke = async (_requestContext: RequestContext) => {
  const {
    logger,
    adapters: { contracts, relayers, chainreader },
    config,
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(sendRootToHubSpoke.name, _requestContext);
  logger.info("Starting sendRootToHubSpoke operation for hub domain", requestContext, methodContext);

  const relayerProxyAddress = config.chains[config.hubDomain].deployments.relayerProxy;
  const hubChainId = domainToChainId(+config.hubDomain);

  const encodedDataForRelayer = contracts.relayerProxyHub.encodeFunctionData("sendRootToHubSpoke");

  try {
    const { taskId } = await sendWithRelayerWithBackup(
      hubChainId,
      config.hubDomain,
      relayerProxyAddress,
      encodedDataForRelayer,
      relayers,
      chainreader,
      logger,
      requestContext,
    );
    logger.info("sendRootToHubSpoke tx sent", requestContext, methodContext, { taskId });
    // TODO: Update DB state to processed for all snapshot roots with ID <= this snapshotId
  } catch (e: unknown) {
    logger.error("Error at sendWithRelayerWithBackup", requestContext, methodContext, e as NxtpError, {
      hubChainId,
      hubDomain: config.hubDomain,
      relayerProxyAddress,
      encodedDataForRelayer,
    });
  }
};

export const aggregateRootCheck = async (
  aggregateRoot: string,
  domain: string,
  _requestContext: RequestContext,
): Promise<boolean> => {
  const {
    logger,
    adapters: { contracts, chainreader },
    config,
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext("proposeSnapshot", _requestContext);

  const spokeConnectorAddress = config.chains[domain].deployments.spokeConnector;
  //
  const encodedRootData = contracts.spokeConnector.encodeFunctionData("provenAggregateRoots", [aggregateRoot]);
  let isProven: any;
  try {
    const idResultData = await chainreader.readTx({
      domain: +domain,
      to: spokeConnectorAddress,
      data: encodedRootData,
    });

    [isProven] = contracts.spokeConnector.decodeFunctionResult("provenAggregateRoots", idResultData);
  } catch (err: unknown) {
    logger.error(
      "Failed to read the provenAggregateRoots",
      requestContext,
      methodContext,
      jsonifyError(err as NxtpError),
      { aggregateRoot },
    );
    // Cannot proceed without the latest provenAggregateRoots check.
    return false;
  }

  logger.info("Checked if aggregate root is already proven onchain", requestContext, methodContext, {
    aggregateRoot,
    proven: isProven as boolean,
  });

  // All checks passed, can propose the aggregate root.
  return isProven as boolean;
};
