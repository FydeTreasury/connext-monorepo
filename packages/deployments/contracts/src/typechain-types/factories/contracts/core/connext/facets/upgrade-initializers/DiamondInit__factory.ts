/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondInit,
  DiamondInitInterface,
} from "../../../../../../contracts/core/connext/facets/upgrade-initializers/DiamondInit";

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
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_tokenBeacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerFeeVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptanceDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ownershipDelay",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061034b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806339afa31014610030575b600080fd5b61004361003e3660046102a4565b610045565b005b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f699d9daa71b280d05a152715774afa0a81a312594b2d731d6b0b2552b7d6f69f8054600160ff1991821681179092557fa90a0781ecf976bd3956b611ce5c1010e0b72a277b086ef69c464670c05e8f1780548216831790557f65d510a5d8f7ef134ec444f7f34ee808c8eeb5177cdfd16be0c40fe1ab433695805482168317905563286b971b60e01b60009081527f0776c8a3c3f40ad82516fe93595c25e54d866a6f9df80e22659bf8367382d004805490921690921790557fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1322839055547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9060ff166101fd57610179610206565b60008054600160ff1990911681179091556020819055600480546001600160c01b0319166401000000006001600160a01b038a81169190910263ffffffff19169190911763ffffffff8b1617909155600280546001600160a01b03199081168984161790915561270b90925560056010556028805490921690861617905560298290555b50505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146102865760405162461bcd60e51b815260206004820152601b60248201527f4c69624469616d6f6e643a2021636f6e7472616374206f776e65720000000000604482015260640160405180910390fd5b565b80356001600160a01b038116811461029f57600080fd5b919050565b60008060008060008060c087890312156102bd57600080fd5b863563ffffffff811681146102d157600080fd5b95506102df60208801610288565b94506102ed60408801610288565b93506102fb60608801610288565b92506080870135915060a08701359050929550929550929556fea26469706673582212202452d63bd39b24d307b22449cb8efd908e19a80cbeb47a6f1fdd304ec0ca6a8464736f6c634300080f0033";

type DiamondInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondInit__factory extends ContractFactory {
  constructor(...args: DiamondInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondInit> {
    return super.deploy(overrides || {}) as Promise<DiamondInit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondInit {
    return super.attach(address) as DiamondInit;
  }
  override connect(signer: Signer): DiamondInit__factory {
    return super.connect(signer) as DiamondInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInitInterface {
    return new utils.Interface(_abi) as DiamondInitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondInit {
    return new Contract(address, _abi, signerOrProvider) as DiamondInit;
  }
}
