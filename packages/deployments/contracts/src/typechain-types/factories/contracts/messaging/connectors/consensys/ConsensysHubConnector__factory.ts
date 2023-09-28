/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConsensysHubConnector,
  ConsensysHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/consensys/ConsensysHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
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
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
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
    inputs: [],
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
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
    inputs: [],
    name: "owner",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620013b6380380620013b6833981016040819052620000359162000286565b848484848484848484846200004a3362000186565b8463ffffffff16600003620000955760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e15760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008c565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e05281161562000119576200011981620001eb565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a3505050505050505050505050505050620002f6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200026957600080fd5b919050565b80516001600160a01b03811681146200026957600080fd5b600080600080600060a086880312156200029f57600080fd5b620002aa8662000254565b9450620002ba6020870162000254565b9350620002ca604087016200026e565b9250620002da606087016200026e565b9150620002ea608087016200026e565b90509295509295909350565b60805160a05160c05160e05161105c6200035a6000396000818161012b01526109aa015260008181610221015281816103c1015261098301526000818161037401528181610476015281816108130152610c72015260006101cd015261105c6000f3fe60806040526004361061010d5760003560e01c8063715018a611610095578063cc39428311610064578063cc394283146102f9578063d1851c9214610319578063d232c22014610337578063d69f9d6114610362578063db1b76591461039657600080fd5b8063715018a6146102915780638da5cb5b146102a6578063b1f8100d146102c4578063c5b350df146102e457600080fd5b806352a9674b116100dc57806352a9674b146101bb5780635bd11efc146101ef5780635f61e3ec1461020f57806368742da61461025b5780636a42b8f81461027b57600080fd5b806314168416146101195780633cf52ffb1461016757806348e6fa23146101865780634ff746f61461019b57600080fd5b3661011457005b600080fd5b34801561012557600080fd5b5061014d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561017357600080fd5b506002545b60405190815260200161015e565b610199610194366004610df6565b6103b6565b005b3480156101a757600080fd5b506101996101b6366004610e5a565b61046b565b3480156101c757600080fd5b5061014d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101fb57600080fd5b5061019961020a366004610eac565b610511565b34801561021b57600080fd5b506102437f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161015e565b34801561026757600080fd5b50610199610276366004610eac565b610548565b34801561028757600080fd5b5062093a80610178565b34801561029d57600080fd5b506101996105c5565b3480156102b257600080fd5b506000546001600160a01b0316610243565b3480156102d057600080fd5b506101996102df366004610eac565b610679565b3480156102f057600080fd5b50610199610717565b34801561030557600080fd5b50600354610243906001600160a01b031681565b34801561032557600080fd5b506001546001600160a01b0316610243565b34801561034357600080fd5b506000546001600160a01b0316155b604051901515815260200161015e565b34801561036e57600080fd5b506102437f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a257600080fd5b506103526103b1366004610eac565b610787565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104225760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b61042c8282610798565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161045f93929190610f16565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104cc5760405162461bcd60e51b81526004016104199060208082526004908201526310a0a6a160e11b604082015260600190565b6104d5816108ee565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610506929190610f54565b60405180910390a150565b6000546001600160a01b0316331461053c576040516311a8a1bb60e31b815260040160405180910390fd5b61054581610a31565b50565b6000546001600160a01b03163314610573576040516311a8a1bb60e31b815260040160405180910390fd5b4761057e8282610a9a565b816001600160a01b03167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d826040516105b991815260200190565b60405180910390a25050565b6000546001600160a01b031633146105f0576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426106029190610f7e565b11610620576040516324e0285f60e21b815260040160405180910390fd5b60025460000361064357604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b03161561066d576040516323295ef960e01b815260040160405180910390fd5b6106776000610bb8565b565b6000546001600160a01b031633146106a4576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156106c2575060025415155b156106e0576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361070e57604051634a2fb73f60e11b815260040160405180910390fd5b61054581610c1d565b6001546001600160a01b03163314610742576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107549190610f7e565b11610772576040516324e0285f60e21b815260040160405180910390fd5b600154610677906001600160a01b0316610bb8565b600061079282610c6b565b92915050565b81516020146107d35760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610419565b8051156108115760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610419565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639f3ce55a34600360009054906101000a90046001600160a01b031634634ff746f660e01b876040516024016108719190610f9f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199485161790525160e087901b90921682526108b8939291600401610fb2565b6000604051808303818588803b1580156108d157600080fd5b505af11580156108e5573d6000803e3d6000fd5b50505050505050565b600354610903906001600160a01b0316610c6b565b61093e5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610419565b80516020146109795760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610419565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f00000000000000000000000000000000000000000000000000000000000000006109d284610fe2565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b158015610a1657600080fd5b505af1158015610a2a573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b80471015610aea5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610419565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610b37576040519150601f19603f3d011682016040523d82523d6000602084013e610b3c565b606091505b5050905080610bb35760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610419565b505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006107927f0000000000000000000000000000000000000000000000000000000000000000836000336001600160a01b03841614610cd65760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610419565b816001600160a01b0316836001600160a01b03166367e404ce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d429190611009565b6001600160a01b0316149392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610d7a57600080fd5b813567ffffffffffffffff80821115610d9557610d95610d53565b604051601f8301601f19908116603f01168101908282118183101715610dbd57610dbd610d53565b81604052838152866020858801011115610dd657600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610e0957600080fd5b823567ffffffffffffffff80821115610e2157600080fd5b610e2d86838701610d69565b93506020850135915080821115610e4357600080fd5b50610e5085828601610d69565b9150509250929050565b600060208284031215610e6c57600080fd5b813567ffffffffffffffff811115610e8357600080fd5b610e8f84828501610d69565b949350505050565b6001600160a01b038116811461054557600080fd5b600060208284031215610ebe57600080fd5b8135610ec981610e97565b9392505050565b6000815180845260005b81811015610ef657602081850181015186830182015201610eda565b506000602082860101526020601f19601f83011685010191505092915050565b606081526000610f296060830186610ed0565b8281036020840152610f3b8186610ed0565b91505060018060a01b0383166040830152949350505050565b604081526000610f676040830185610ed0565b905060018060a01b03831660208301529392505050565b8181038181111561079257634e487b7160e01b600052601160045260246000fd5b602081526000610ec96020830184610ed0565b60018060a01b0384168152826020820152606060408201526000610fd96060830184610ed0565b95945050505050565b80516020808301519190811015611003576000198160200360031b1b821691505b50919050565b60006020828403121561101b57600080fd5b8151610ec981610e9756fea26469706673582212209ce1abbae119936b8047745f998314c111fa0220880749ebbc3881748ea833b264736f6c63430008110033";

type ConsensysHubConnectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ConsensysHubConnectorConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ConsensysHubConnector__factory extends ContractFactory {
  constructor(...args: ConsensysHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ConsensysHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      overrides || {},
    ) as Promise<ConsensysHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_domain, _mirrorDomain, _amb, _rootManager, _mirrorConnector, overrides || {});
  }
  override attach(address: string): ConsensysHubConnector {
    return super.attach(address) as ConsensysHubConnector;
  }
  override connect(signer: Signer): ConsensysHubConnector__factory {
    return super.connect(signer) as ConsensysHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConsensysHubConnectorInterface {
    return new utils.Interface(_abi) as ConsensysHubConnectorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ConsensysHubConnector {
    return new Contract(address, _abi, signerOrProvider) as ConsensysHubConnector;
  }
}
