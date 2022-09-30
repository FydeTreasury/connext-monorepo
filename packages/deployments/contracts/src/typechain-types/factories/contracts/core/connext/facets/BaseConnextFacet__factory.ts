/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BaseConnextFacet,
  BaseConnextFacetInterface,
} from "../../../../../contracts/core/connext/facets/BaseConnextFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__mustGetLocalAsset_noLocalAssetFound",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122084de30b5b853267508b311e718ea68a02d6c1fec7506626092644056305803ad64736f6c634300080f0033";

type BaseConnextFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BaseConnextFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class BaseConnextFacet__factory extends ContractFactory {
  constructor(...args: BaseConnextFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BaseConnextFacet> {
    return super.deploy(overrides || {}) as Promise<BaseConnextFacet>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseConnextFacet {
    return super.attach(address) as BaseConnextFacet;
  }
  override connect(signer: Signer): BaseConnextFacet__factory {
    return super.connect(signer) as BaseConnextFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseConnextFacetInterface {
    return new utils.Interface(_abi) as BaseConnextFacetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BaseConnextFacet {
    return new Contract(address, _abi, signerOrProvider) as BaseConnextFacet;
  }
}
