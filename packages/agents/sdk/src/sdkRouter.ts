import { constants, providers, BigNumber } from "ethers";
import { getChainData, Logger, createLoggingContext, RequestContext, ChainData, XCallArgs } from "@connext/nxtp-utils";
import {
  getContractInterfaces,
  ConnextContractInterfaces,
  contractDeployments,
  ChainReader,
} from "@connext/nxtp-txservice";

import { NxtpSdkConfig, getConfig } from "./config";
import { NxtpSdkUtils } from "./sdkUtils";

export const MIN_SLIPPAGE_TOLERANCE = "00.01"; // 0.01%;
export const MAX_SLIPPAGE_TOLERANCE = "15.00"; // 15.0%
export const DEFAULT_SLIPPAGE_TOLERANCE = "0.10"; // 0.10%
export const DEFAULT_AUCTION_TIMEOUT = 6_000;
export const FULFILL_TIMEOUT = 300_000;
export const DELAY_BETWEEN_RETRIES = 5_000;

/**
 * @classdesc Lightweight class to facilitate interaction with the Connext contract on configured chains.
 *
 */
export class NxtpSdkRouter {
  public readonly config: NxtpSdkConfig;
  private readonly logger: Logger;
  private readonly contracts: ConnextContractInterfaces; // Used to read and write to smart contracts.
  private chainReader: ChainReader;
  public readonly utils: NxtpSdkUtils;
  public readonly chainData: Map<string, ChainData>;

  constructor(config: NxtpSdkConfig, nxtpSdkUtils: NxtpSdkUtils, logger: Logger, chainData: Map<string, ChainData>) {
    this.config = config;
    this.utils = nxtpSdkUtils;
    this.logger = logger;
    this.chainData = chainData;
    this.contracts = getContractInterfaces();
    this.chainReader = new ChainReader(
      this.logger.child({ module: "ChainReader" }, this.config.logLevel),
      this.config.chains,
    );
  }

  static async create(_config: NxtpSdkConfig, _logger?: Logger): Promise<NxtpSdkRouter> {
    const chainData = await getChainData();
    if (!chainData) {
      throw new Error("Could not get chain data");
    }

    const nxtpConfig = await getConfig(_config, chainData, contractDeployments);
    const logger = _logger
      ? _logger.child({ name: "NxtpSdkRouter" })
      : new Logger({ name: "NxtpSdkRouter", level: nxtpConfig.logLevel });
    const nxtpSdkUtils = new NxtpSdkUtils(nxtpConfig, logger, chainData);

    return new NxtpSdkRouter(nxtpConfig, nxtpSdkUtils, logger, chainData);
  }

  async addLiquidityForRouter(params: {
    domain: string;
    amount: string;
    assetId: string;
    _router?: string;
  }): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.addLiquidityForRouter.name);
    this.logger.info("Method start", requestContext, methodContext, { params });

    const { domain, amount, assetId, _router } = params;

    const router = _router || this.config.signerAddress;

    const ConnextContractAddress = this.config.chains[domain].deployments!.connext;

    const value = assetId === constants.AddressZero ? BigNumber.from(amount) : constants.Zero;
    const data = this.contracts.connext.encodeFunctionData("addLiquidityFor", [amount, assetId, router]);

    this.logger.info(`${this.addLiquidityForRouter.name} transaction created`, requestContext, methodContext);

    return {
      to: ConnextContractAddress,
      value,
      data,
      from: this.config.signerAddress,
      chainId: Number(domain),
    };
  }
}
