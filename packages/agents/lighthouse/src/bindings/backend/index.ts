import {
  createLoggingContext,
  ExecuteArgs,
  jsonifyError,
  NxtpError,
  formatUrl,
  convertFromDbTransfer,
} from "@connext/nxtp-utils";
import { constants } from "ethers";
import axios from "axios";
import interval from "interval-promise";

import { getOperations } from "../../lib/operations";
import { getContext } from "../../lighthouse";

// Ought to be configured properly for each network; we consult the chain config below.
export const DEFAULT_SAFE_CONFIRMATIONS = 5;

export const bindBackend = async (_pollInterval: number) => {
  const { config, logger } = getContext();
  const { requestContext, methodContext } = createLoggingContext(bindBackend.name);
  interval(async (_, stop) => {
    if (config.mode.cleanup) {
      stop();
    } else {
      try {
        await pollBackend();
      } catch (e: unknown) {
        logger.error("Error in pollBackend", requestContext, methodContext, jsonifyError(e as Error));
      }
    }
  }, _pollInterval);
};

export const pollBackend = async () => {
  const { requestContext, methodContext } = createLoggingContext(pollBackend.name);
  const { logger } = getContext();
  const { execute } = getOperations();

  const reconciledTransactions = await getReconciledTransactions();

  await Promise.all(
    reconciledTransactions.map(async (transaction: any) => {
      const xTransfer = convertFromDbTransfer(transaction);

      const executeParams: ExecuteArgs = {
        params: {
          originDomain: xTransfer.originDomain,
          destinationDomain: xTransfer.destinationDomain!,
          to: xTransfer.xparams!.to,
          callData: xTransfer.xparams!.callData,
          callback: xTransfer.xparams?.callback || constants.AddressZero,
          callbackFee: xTransfer.xparams?.callbackFee || "0",
          receiveLocal: xTransfer.xparams?.receiveLocal || false,
          forceSlow: xTransfer.xparams?.forceSlow || false,
          recovery: xTransfer.xparams?.recovery || xTransfer.xparams!.to,
        },
        local: xTransfer.destination!.assets.local.asset,
        routers: [],
        routerSignatures: [],
        amount: xTransfer.destination!.assets.local.amount.toString(),
        nonce: xTransfer.nonce!,
        originSender: xTransfer.origin!.xcall.caller,
        relayerFee: xTransfer.origin?.xcall.relayerFee || "0",
      };

      const transferId = xTransfer.transferId;
      try {
        await execute(executeParams, transferId, requestContext);
      } catch (error: any) {
        logger.error("Error Backend Binding", requestContext, methodContext, jsonifyError(error as NxtpError), {
          executeParams,
          transferId,
        });
      }
    }),
  );
};

export const getReconciledTransactions = async (): Promise<any> => {
  const { requestContext, methodContext } = createLoggingContext(getReconciledTransactions.name);
  const {
    // adapters: {},
    logger,
    config,
  } = getContext();

  const statusIdentifier = `status=eq.Reconciled&`;
  const uri = formatUrl(config.backendUrl, "transfers?", statusIdentifier);
  try {
    const response = await axios.get(uri);
    return response.data;
  } catch (error: any) {
    logger.error(
      "Backend api request failed, waiting for next loop",
      requestContext,
      methodContext,
      jsonifyError(error as NxtpError),
      { uri },
    );
  }
};
