/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RelayerFeeRouter,
  RelayerFeeRouterInterface,
} from "../../../../contracts/core/relayer-fee/RelayerFeeRouter";

const _abi = [
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
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
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
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
    inputs: [],
    name: "RelayerFeeRouter__onlyConnext_notConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFeeRouter__send_claimEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFeeRouter__send_recipientEmpty",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "origin",
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
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "remote",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Send",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connext",
        type: "address",
      },
    ],
    name: "SetConnext",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnextHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "remotes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract IConnectorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b47806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b1f8100d116100a2578063d1851c9211610071578063d1851c9214610221578063d232c22014610232578063d7d680a31461025b578063de4b05481461026e578063ffa1ad741461028157600080fd5b8063b1f8100d146101e0578063b49c53a7146101f3578063c4d66de814610206578063c5b350df1461021957600080fd5b80636a42b8f8116100e95780636a42b8f814610185578063715018a61461018e57806383bbb806146101965780638da5cb5b146101b6578063ab2dc3f5146101cd57600080fd5b80633339df961461011b5780633cf52ffb1461014b57806341bdc8b51461015d5780634d6f201314610172575b600080fd5b60345461012e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6002545b604051908152602001610142565b61017061016b366004611563565b61029b565b005b610170610180366004611563565b6102ee565b62093a8061014f565b610170610369565b61014f6101a4366004611594565b60666020526000908152604090205481565b6000546201000090046001600160a01b031661012e565b6101706101db3660046115c5565b61042e565b6101706101ee366004611563565b6105dd565b6101706102013660046116a1565b610691565b610170610214366004611563565b6106db565b6101706107a7565b6001546001600160a01b031661012e565b61024b6000546201000090046001600160a01b03161590565b6040519015158152602001610142565b6101706102693660046116cb565b610802565b60985461012e906001600160a01b031681565b610289600081565b60405160ff9091168152602001610142565b6000546201000090046001600160a01b031633146102cc576040516311a8a1bb60e31b815260040160405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546201000090046001600160a01b0316331461031f576040516311a8a1bb60e31b815260040160405180910390fd5b609880546001600160a01b0319166001600160a01b0383169081179091556040517f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f390600090a250565b6000546201000090046001600160a01b0316331461039a576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036103bd57604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426103cf9190611774565b116103ed576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610417576040516323295ef960e01b815260040160405180910390fd5b60015461042c906001600160a01b03166109c5565b565b61043733610a35565b6104735760405162461bcd60e51b8152602060048201526008602482015267217265706c69636160c01b60448201526064015b60405180910390fd5b838261047f8282610aaa565b6104bc5760405162461bcd60e51b815260206004820152600e60248201526d10b932b6b7ba32903937baba32b960911b604482015260640161046a565b60006104d66104cb8583610ad4565b62ffffff1916610af8565b905060006104e962ffffff198316610b11565b905060006104fc62ffffff198416610b42565b60985460405163d7aada8160e01b81529192506001600160a01b03169063d7aada819061052f90859085906004016117c6565b600060405180830381600087803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b50505050816001600160a01b03168963ffffffff166105918b8b63ffffffff1660209190911b67ffffffff00000000161790565b67ffffffffffffffff167fb29810b17f96b207e4d6c91fd73ec7ab882db28c3a239f2eb6c7c801c43d003b846040516105ca91906117ea565b60405180910390a4505050505050505050565b6000546201000090046001600160a01b0316331461060e576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561063357506001600160a01b03811615155b15610651576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831662010000909204160361068557604051634a2fb73f60e11b815260040160405180910390fd5b61068e81610c11565b50565b6000546201000090046001600160a01b031633146106c2576040516311a8a1bb60e31b815260040160405180910390fd5b63ffffffff909116600090815260666020526040902055565b600054610100900460ff16158080156106fb5750600054600160ff909116105b806107155750303b158015610715575060005460ff166001145b6107315760405162461bcd60e51b815260040161046a906117fd565b6000805460ff191660011790558015610754576000805461ff0019166101001790555b61075d82610c5f565b80156107a3576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6001546001600160a01b031633146107d2576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107e49190611774565b116104175760405163d39c12bb60e01b815260040160405180910390fd5b6098546001600160a01b0316331461082d5760405163014e189b60e41b815260040160405180910390fd5b600081900361084f57604051635aef8ded60e01b815260040160405180910390fd5b6001600160a01b0383166108765760405163f7afa16f60e01b815260040160405180910390fd5b600061088185610cfb565b90506000610890858585610d4d565b9050603460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610909919061184b565b6001600160a01b031663fa31de018784846040518463ffffffff1660e01b8152600401610938939291906118b5565b6020604051808303816000875af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906118da565b507f90d6f02f078dba10aa43c39bf7a3d3bc9629a280b078d473da5486c6531ec6418686868686866040516109b5969594939291906118f3565b60405180910390a1505050505050565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b603454604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa49190611970565b92915050565b63ffffffff821660009081526066602052604081205482148015610acd57508115155b9392505050565b815160009060208401610aef64ffffffffff85168284610d81565b95945050505050565b6000610aa4610b0683610dc8565b62ffffff1916610dfa565b6000816001610b28815b62ffffff19841690610e55565b50610b3a62ffffff1985166001610f2e565b949350505050565b6060816001610b5081610b1b565b506000610b6662ffffff19861660156020610f38565b905060008167ffffffffffffffff811115610b8357610b836115af565b604051908082528060200260200182016040528015610bac578160200160208202803683370190505b50905060005b82811015610c0757610be2610bc8602083611992565b610bd39060356119b1565b62ffffff198916906020610f68565b828281518110610bf457610bf46119c9565b6020908102919091010152600101610bb2565b5095945050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff1615808015610c7f5750600054600160ff909116105b80610c995750303b158015610c99575060005460ff166001145b610cb55760405162461bcd60e51b815260040161046a906117fd565b6000805460ff191660011790558015610cd8576000805461ff0019166101001790555b603480546001600160a01b0319166001600160a01b03841617905561075d6110c4565b63ffffffff811660009081526066602052604090205480610d485760405162461bcd60e51b81526020600482015260076024820152662172656d6f746560c81b604482015260640161046a565b919050565b60606001604051610d69919086908590879082906020016119df565b60405160208183030381529060405290509392505050565b600080610d8e83856119b1565b9050604051811115610d9e575060005b80600003610db35762ffffff19915050610acd565b5050606092831b9190911790911b1760181b90565b6000610dd3826110f3565b15610df0576301000000600160d81b038216600160d81b17610aa4565b62ffffff19610aa4565b6000610e058261112e565b610e515760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015260640161046a565b5090565b6000610e61838361116b565b610f27576000610e80610e748560d81c90565b64ffffffffff1661118e565b9150506000610e958464ffffffffff1661118e565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161046a9190611a45565b5090919050565b6000610acd838360145b6000610f45826020611a58565b610f50906008611a7b565b60ff16610f5e858585610f68565b901c949350505050565b60008160ff16600003610f7d57506000610acd565b610f908460181c6001600160601b031690565b6001600160601b0316610fa660ff8416856119b1565b111561100a57610ff1610fc28560781c6001600160601b031690565b6001600160601b0316610fde8660181c6001600160601b031690565b6001600160601b0316858560ff1661123c565b60405162461bcd60e51b815260040161046a9190611a45565b60208260ff1611156110845760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161046a565b60088202600061109d8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600054610100900460ff166110eb5760405162461bcd60e51b815260040161046a90611aa4565b61042c611366565b6000601882901c6001600160601b031660558110801590610acd5750602061111c603583611774565b6111269190611aef565b159392505050565b600061113a8260d81c90565b64ffffffffff1664ffffffffff0361115457506000919050565b600061115f83611396565b60405110199392505050565b60008164ffffffffff1661117f8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff1611156111e35760006111ad826008611a7b565b60ff1685901c90506111be816113cf565b61ffff16841793508160ff166010146111d957601084901b93505b5060001901611194565b50600f5b60ff8160ff161015611236576000611200826008611a7b565b60ff1685901c9050611211816113cf565b61ffff16831792508160ff1660001461122c57601083901b92505b50600019016111e7565b50915091565b606060006112498661118e565b91505060006112578661118e565b91505060006112658661118e565b91505060006112738661118e565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600054610100900460ff1661138d5760405162461bcd60e51b815260040161046a90611aa4565b61042c336109c5565b60006113ab8260181c6001600160601b031690565b6113be8360781c6001600160601b031690565b016001600160601b03169050919050565b60006113e160048360ff16901c611401565b60ff1661ffff919091161760081b6113f882611401565b60ff1617919050565b600060f08083179060ff8216900361141c5750603092915050565b8060ff1660f1036114305750603192915050565b8060ff1660f2036114445750603292915050565b8060ff1660f3036114585750603392915050565b8060ff1660f40361146c5750603492915050565b8060ff1660f5036114805750603592915050565b8060ff1660f6036114945750603692915050565b8060ff1660f7036114a85750603792915050565b8060ff1660f8036114bc5750603892915050565b8060ff1660f9036114d05750603992915050565b8060ff1660fa036114e45750606192915050565b8060ff1660fb036114f85750606292915050565b8060ff1660fc0361150c5750606392915050565b8060ff1660fd036115205750606492915050565b8060ff1660fe036115345750606592915050565b8060ff1660ff036115485750606692915050565b50919050565b6001600160a01b038116811461068e57600080fd5b60006020828403121561157557600080fd5b8135610acd8161154e565b803563ffffffff81168114610d4857600080fd5b6000602082840312156115a657600080fd5b610acd82611580565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156115db57600080fd5b6115e485611580565b93506115f260208601611580565b925060408501359150606085013567ffffffffffffffff8082111561161657600080fd5b818701915087601f83011261162a57600080fd5b81358181111561163c5761163c6115af565b604051601f8201601f19908116603f01168101908382118183101715611664576116646115af565b816040528281528a602084870101111561167d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156116b457600080fd5b6116bd83611580565b946020939093013593505050565b600080600080606085870312156116e157600080fd5b6116ea85611580565b935060208501356116fa8161154e565b9250604085013567ffffffffffffffff8082111561171757600080fd5b818701915087601f83011261172b57600080fd5b81358181111561173a57600080fd5b8860208260051b850101111561174f57600080fd5b95989497505060200194505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156117865761178661175e565b500390565b600081518084526020808501945080840160005b838110156117bb5781518752958201959082019060010161179f565b509495945050505050565b6001600160a01b0383168152604060208201819052600090610b3a9083018461178b565b602081526000610acd602083018461178b565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60006020828403121561185d57600080fd5b8151610acd8161154e565b6000815180845260005b8181101561188e57602081850181015186830182015201611872565b818111156118a0576000602083870101525b50601f01601f19169290920160200192915050565b63ffffffff84168152826020820152606060408201526000610aef6060830184611868565b6000602082840312156118ec57600080fd5b5051919050565b63ffffffff871681526001600160a01b038616602082015260a060408201819052810184905260006001600160fb1b0385111561192f57600080fd5b8460051b808760c0850137808301905060c081016000815285606085015260c08483030160808501526119628186611868565b9a9950505050505050505050565b60006020828403121561198257600080fd5b81518015158114610acd57600080fd5b60008160001904831182151516156119ac576119ac61175e565b500290565b600082198211156119c4576119c461175e565b500190565b634e487b7160e01b600052603260045260246000fd5b60f886901b6001600160f81b0319168152606085901b6bffffffffffffffffffffffff191660018201526015810184905260006001600160fb1b03831115611a2657600080fd5b8260051b80856035850137600092016035019182525095945050505050565b602081526000610acd6020830184611868565b600060ff821660ff841680821015611a7257611a7261175e565b90039392505050565b600060ff821660ff84168160ff0481118215151615611a9c57611a9c61175e565b029392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082611b0c57634e487b7160e01b600052601260045260246000fd5b50069056fea26469706673582212200fb10c92e6279b955fa8dd04b766f8b9766069f00757545ad60483b132095f4764736f6c634300080f0033";

type RelayerFeeRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerFeeRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerFeeRouter__factory extends ContractFactory {
  constructor(...args: RelayerFeeRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerFeeRouter> {
    return super.deploy(overrides || {}) as Promise<RelayerFeeRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayerFeeRouter {
    return super.attach(address) as RelayerFeeRouter;
  }
  override connect(signer: Signer): RelayerFeeRouter__factory {
    return super.connect(signer) as RelayerFeeRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerFeeRouterInterface {
    return new utils.Interface(_abi) as RelayerFeeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerFeeRouter {
    return new Contract(address, _abi, signerOrProvider) as RelayerFeeRouter;
  }
}
