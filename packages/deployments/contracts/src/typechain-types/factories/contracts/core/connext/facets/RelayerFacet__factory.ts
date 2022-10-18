/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RelayerFacet,
  RelayerFacetInterface,
} from "../../../../../contracts/core/connext/facets/RelayerFacet";

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
    inputs: [],
    name: "RelayerFacet__addRelayer_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__removeRelayer_notApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__setRelayerFeeVault_invalidRelayerFeeVault",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerFeeVaultUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "addRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "approvedRelayers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerFeeVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "removeRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayerFeeVault",
        type: "address",
      },
    ],
    name: "setRelayerFeeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610482806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806360f0a5ac1461005c57806365bc8582146100715780638cba8b6a14610091578063dd39f00d146100cd578063f01b3e01146100e0575b600080fd5b61006f61006a366004610406565b6100f3565b005b6002546040516001600160a01b0390911681526020015b60405180910390f35b6100bd61009f366004610406565b6001600160a01b03166000908152600f602052604090205460ff1690565b6040519015158152602001610088565b61006f6100db366004610406565b6101eb565b61006f6100ee366004610406565b6102e0565b336100fc6103d8565b6001600160a01b031614158015610137575060033360009081526019602052604090205460ff16600381111561013457610134610436565b14155b1561015557604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600f602052604090205460ff1661018e5760405163050d2e7760e21b815260040160405180910390fd5b6001600160a01b0381166000818152600f6020908152604091829020805460ff19169055815192835233908301527f0bdcf1d6f29aa87af8131cc81dcbb295fcf98d71cfcdc79cc5d965317bae1d0a91015b60405180910390a150565b336101f46103d8565b6001600160a01b03161415801561022f575060033360009081526019602052604090205460ff16600381111561022c5761022c610436565b14155b1561024d57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600f602052604090205460ff1615610287576040516317a65d9f60e31b815260040160405180910390fd5b6001600160a01b0381166000818152600f6020908152604091829020805460ff19166001179055815192835233908301527fd756b9aee10d6f2c80dc42c5031beb0e0847f6e1d6ba50199bdfc3f0de5cc0cc91016101e0565b336102e96103d8565b6001600160a01b031614158015610324575060033360009081526019602052604090205460ff16600381111561032157610321610436565b14155b1561034257604051637b32c26b60e01b815260040160405180910390fd5b6002546001600160a01b0390811690821681036103725760405163cbb50e4160e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915233908201527f81ccf12657606de24814d9c94f72fc587a18c112856a546a1669fff3cb6cac2b9060600160405180910390a15050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b60006020828403121561041857600080fd5b81356001600160a01b038116811461042f57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220f3a36afbcb94c689f1fdfd1be1c4335179fc120f45618a81edadc8d3981577ff64736f6c634300080f0033";

type RelayerFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerFacet__factory extends ContractFactory {
  constructor(...args: RelayerFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerFacet> {
    return super.deploy(overrides || {}) as Promise<RelayerFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayerFacet {
    return super.attach(address) as RelayerFacet;
  }
  override connect(signer: Signer): RelayerFacet__factory {
    return super.connect(signer) as RelayerFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerFacetInterface {
    return new utils.Interface(_abi) as RelayerFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerFacet {
    return new Contract(address, _abi, signerOrProvider) as RelayerFacet;
  }
}
