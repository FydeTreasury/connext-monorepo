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
    name: "RelayerFacet__initiateClaim_emptyClaim",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "RelayerFacet__initiateClaim_notRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__onlyRelayerFeeRouter_notRelayerFeeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__removeRelayer_notApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__setRelayerFeeRouter_invalidRelayerFeeRouter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "InitiatedClaim",
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
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerFeeRouterUpdated",
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
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "_transferIds",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "_transferIds",
        type: "bytes32[]",
      },
    ],
    name: "initiateClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerFeeRouter",
    outputs: [
      {
        internalType: "contract RelayerFeeRouter",
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
        name: "_relayerFeeRouter",
        type: "address",
      },
    ],
    name: "setRelayerFeeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "transferRelayer",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610aaa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063cf9737691161005b578063cf97376914610109578063d7aada811461012e578063dd39f00d14610141578063f40fec521461015457600080fd5b806324fc7a311461008d578063468f6668146100a257806360f0a5ac146100b55780638cba8b6a146100c8575b600080fd5b6100a061009b366004610839565b61017d565b005b6100a06100b03660046108a7565b610257565b6100a06100c3366004610839565b610418565b6100f46100d6366004610839565b6001600160a01b03166000908152600c602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6002546001600160a01b03165b6040516001600160a01b039091168152602001610100565b6100a061013c366004610913565b6104de565b6100a061014f366004610839565b61060e565b610116610162366004610966565b6000908152600e60205260409020546001600160a01b031690565b336101866106d1565b6001600160a01b0316146101ad576040516314e74a2560e21b815260040160405180910390fd5b6002546001600160a01b039081169082168114806101d357506001600160a01b0382163b155b156101f15760405163158449a960e31b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915233908201527fc4790440370ddadab246fe4bd425061ed47a1dd48d071a025d0523ee4a4d9f009060600160405180910390a15050565b60215460ff161561027b57604051633ee5b89360e01b815260040160405180910390fd5b601e546001190161029f57604051637ce54e2d60e11b815260040160405180910390fd5b6002601e558060008190036102c75760405163a8977ec160e01b815260040160405180910390fd5b60005b818110156103575733600e60008686858181106102e9576102e961097f565b60209081029290920135835250810191909152604001600020546001600160a01b03161461034f578383828181106103235761032361097f565b90506020020135604051633eb73d9960e11b815260040161034691815260200190565b60405180910390fd5b6001016102ca565b5060025460405163d7d680a360e01b81526001600160a01b039091169063d7d680a39061038e9088908890889088906004016109cb565b600060405180830381600087803b1580156103a857600080fd5b505af11580156103bc573d6000803e3d6000fd5b50505050836001600160a01b03168563ffffffff167f68a0b54b1aeae4bd0cc4fabefe2e6c06c6197fbbcf2122402e017620bdf0b41c33868660405161040493929190610a06565b60405180910390a350506001601e55505050565b336104216106d1565b6001600160a01b031614610448576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152600c602052604090205460ff166104815760405163050d2e7760e21b815260040160405180910390fd5b6001600160a01b0381166000818152600c6020908152604091829020805460ff19169055815192835233908301527f0bdcf1d6f29aa87af8131cc81dcbb295fcf98d71cfcdc79cc5d965317bae1d0a91015b60405180910390a150565b6002546001600160a01b0316331461050957604051630600057d60e41b815260040160405180910390fd5b601e546001190161052d57604051637ce54e2d60e11b815260040160405180910390fd5b6002601e55806000805b828110156105b257600d60008686848181106105555761055561097f565b90506020020135815260200190815260200160002054826105769190610a34565b9150600d600086868481811061058e5761058e61097f565b90506020020135815260200190815260200160002060009055806001019050610537565b506105bd85826106ff565b846001600160a01b03167f2bfaaa152bcd96bf9b286ad5528d510fe2a107a182c7e42aefb7f0e1130bb3718286866040516105fa93929190610a5a565b60405180910390a250506001601e55505050565b336106176106d1565b6001600160a01b03161461063e576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152600c602052604090205460ff1615610678576040516317a65d9f60e31b815260040160405180910390fd5b6001600160a01b0381166000818152600c6020908152604091829020805460ff19166001179055815192835233908301527fd756b9aee10d6f2c80dc42c5031beb0e0847f6e1d6ba50199bdfc3f0de5cc0cc91016104d3565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b8047101561074f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610346565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461079c576040519150601f19603f3d011682016040523d82523d6000602084013e6107a1565b606091505b50509050806108185760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610346565b505050565b80356001600160a01b038116811461083457600080fd5b919050565b60006020828403121561084b57600080fd5b6108548261081d565b9392505050565b60008083601f84011261086d57600080fd5b50813567ffffffffffffffff81111561088557600080fd5b6020830191508360208260051b85010111156108a057600080fd5b9250929050565b600080600080606085870312156108bd57600080fd5b843563ffffffff811681146108d157600080fd5b93506108df6020860161081d565b9250604085013567ffffffffffffffff8111156108fb57600080fd5b6109078782880161085b565b95989497509550505050565b60008060006040848603121561092857600080fd5b6109318461081d565b9250602084013567ffffffffffffffff81111561094d57600080fd5b6109598682870161085b565b9497909650939450505050565b60006020828403121561097857600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b81835260006001600160fb1b038311156109ae57600080fd5b8260051b8083602087013760009401602001938452509192915050565b63ffffffff851681526001600160a01b03841660208201526060604082018190526000906109fc9083018486610995565b9695505050505050565b6001600160a01b0384168152604060208201819052600090610a2b9083018486610995565b95945050505050565b60008219821115610a5557634e487b7160e01b600052601160045260246000fd5b500190565b838152604060208201526000610a2b60408301848661099556fea2646970667358221220e6c52e1c5e96dc71d8c90de29e220438a816f257d46a0370813702867c33c0ef64736f6c634300080f0033";

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
