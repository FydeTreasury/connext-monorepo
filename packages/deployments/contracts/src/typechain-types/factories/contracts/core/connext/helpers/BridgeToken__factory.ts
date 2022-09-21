/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BridgeToken,
  BridgeTokenInterface,
} from "../../../../../contracts/core/connext/helpers/BridgeToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "UpdateDetails",
    type: "event",
  },
  {
    inputs: [],
    name: "_PERMIT_TYPEHASH",
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "detailsHash",
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
    name: "domainSeparator",
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
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "initialize",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_newDecimals",
        type: "uint8",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_detailsHash",
        type: "bytes32",
      },
    ],
    name: "setDetailsHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9608052610120604052600160e052603160f81b610100527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a05261190160c05234801561006d57600080fd5b5060805160a05160c0516118096100a4600039600061092b01526000610aee01526000818161029d01526108c701526118096000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638129fc1c116100c3578063a9059cbb1161007c578063a9059cbb146102e5578063cc2ab7c7146102f8578063d505accf1461030b578063dd62ed3e1461031e578063f2fde38b14610357578063f698da251461036a57600080fd5b80638129fc1c1461026d5780638da5cb5b1461027557806395d89b4114610290578063982aaf6b146102985780639dc29fac146102bf578063a457c2d7146102d257600080fd5b806340c10f191161011557806340c10f19146101eb5780634815fcb114610200578063654935f41461020957806370a082311461021c578063715018a6146102455780637ecebe001461024d57600080fd5b806306fdde031461015d578063095ea7b31461017b57806318160ddd1461019e57806323b872dd146101b0578063313ce567146101c357806339509351146101d8575b600080fd5b610165610372565b6040516101729190611210565b60405180910390f35b61018e61018936600461125f565b610407565b6040519015158152602001610172565b6067545b604051908152602001610172565b61018e6101be366004611289565b61041d565b606a5460405160ff9091168152602001610172565b61018e6101e636600461125f565b610486565b6101fe6101f936600461125f565b6104bc565b005b6101a2606c5481565b6101fe61021736600461131f565b6104d2565b6101a261022a3660046113a0565b6001600160a01b031660009081526065602052604090205490565b6101fe610645565b6101a261025b3660046113a0565b606b6020526000908152604090205481565b6101fe610659565b6033546040516001600160a01b039091168152602001610172565b61016561076a565b6101a27f000000000000000000000000000000000000000000000000000000000000000081565b6101fe6102cd36600461125f565b61077c565b61018e6102e036600461125f565b61078e565b61018e6102f336600461125f565b6107dd565b6101fe6103063660046113bb565b6107ea565b6101fe6103193660046113d4565b610800565b6101a261032c36600461143e565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b6101fe6103653660046113a0565b610a8d565b6101a2610a9e565b60606068600001805461038490611471565b80601f01602080910402602001604051908101604052809291908181526020018280546103b090611471565b80156103fd5780601f106103d2576101008083540402835291602001916103fd565b820191906000526020600020905b8154815290600101906020018083116103e057829003601f168201915b5050505050905090565b6000610414338484610b3e565b50600192915050565b600061042a848484610c63565b61047c843361047785604051806060016040528060288152602001611787602891396001600160a01b038a1660009081526066602090815260408083203384529091529020549190610de9565b610b3e565b5060019392505050565b3360008181526066602090815260408083206001600160a01b038716845290915281205490916104149185906104779086610e15565b6104c4610e28565b6104ce8282610e82565b5050565b6000606860000180546104e490611471565b1591508190508061056a5750606c5461056887878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250610f68915050565b145b6105b05760405162461bcd60e51b815260206004820152601260248201527121636f6d6d69747465642064657461696c7360701b60448201526064015b60405180910390fd5b60686105bd868883611507565b5060696105cb848683611507565b50606a805460ff191660ff84161790558061063d578160ff1684846040516105f49291906115c8565b6040518091039020878760405161060c9291906115c8565b604051908190038120907f96848da8c41ae282b5ec5c04f45fc469a8186bb78de70419275c2c402fcc27b190600090a45b505050505050565b61064d610e28565b6106576000610fa4565b565b600054610100900460ff16158080156106795750600054600160ff909116105b806106935750303b158015610693575060005460ff166001145b6106f65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105a7565b6000805460ff191660011790558015610719576000805461ff0019166101001790555b610721610ff6565b8015610767576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b60606068600101805461038490611471565b610784610e28565b6104ce8282611025565b60006104143384610477856040518060600160405280602581526020016117af602591393360009081526066602090815260408083206001600160a01b038d1684529091529020549190610de9565b6000610414338484610c63565b6107f2610e28565b80606c541461076757606c55565b834211156108505760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105a7565b6001600160a01b0387166108a65760405162461bcd60e51b815260206004820152601f60248201527f45524332305065726d69743a206f776e6572207a65726f20616464726573730060448201526064016105a7565b6001600160a01b038781166000818152606b602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e090940190528251920191909120907f0000000000000000000000000000000000000000000000000000000000000000610952610a9e565b60405160f09290921b6001600160f01b031916602083015260228201526042810183905260620160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa1580156109e4573d6000803e3d6000fd5b5050506020604051035190508a6001600160a01b0316816001600160a01b031614610a515760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105a7565b610a5c8460016115ee565b6001600160a01b038c166000908152606b6020526040902055610a808b8b8b610b3e565b5050505050505050505050565b610a95610e28565b61076781611129565b60405160009046907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90610ad490606890611606565b6040805191829003822060208301939093528101919091527f00000000000000000000000000000000000000000000000000000000000000006060820152608081018290523060a082015260c0016040516020818303038152906040528051906020012091505090565b6001600160a01b038316610ba05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105a7565b6001600160a01b038216610c015760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105a7565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610cc75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105a7565b6001600160a01b038216610d295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105a7565b610d6681604051806060016040528060268152602001611761602691396001600160a01b0386166000908152606560205260409020549190610de9565b6001600160a01b038085166000908152606560205260408082209390935590841681522054610d959082610e15565b6001600160a01b0380841660008181526065602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c569085815260200190565b60008184841115610e0d5760405162461bcd60e51b81526004016105a79190611210565b505050900390565b6000610e2182846115ee565b9392505050565b6033546001600160a01b031633146106575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105a7565b6001600160a01b038216610ed85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105a7565b606754610ee59082610e15565b6067556001600160a01b038216600090815260656020526040902054610f0b9082610e15565b6001600160a01b0383166000818152606560205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610f5c9085815260200190565b60405180910390a35050565b600083518484518585604051602001610f8595949392919061167c565b6040516020818303038152906040528051906020012090509392505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661101d5760405162461bcd60e51b81526004016105a7906116dc565b6106576111a4565b6001600160a01b0382166110855760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105a7565b6110c28160405180606001604052806022815260200161173f602291396001600160a01b0385166000908152606560205260409020549190610de9565b6001600160a01b0383166000908152606560205260409020556067546110e890826111d4565b6067556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610f5c565b611131610e28565b6001600160a01b0381166111965760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105a7565b61076781610fa4565b505050565b600054610100900460ff166111cb5760405162461bcd60e51b81526004016105a7906116dc565b61065733610fa4565b6000610e218284611727565b60005b838110156111fb5781810151838201526020016111e3565b8381111561120a576000848401525b50505050565b602081526000825180602084015261122f8160408501602087016111e0565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461125a57600080fd5b919050565b6000806040838503121561127257600080fd5b61127b83611243565b946020939093013593505050565b60008060006060848603121561129e57600080fd5b6112a784611243565b92506112b560208501611243565b9150604084013590509250925092565b60008083601f8401126112d757600080fd5b50813567ffffffffffffffff8111156112ef57600080fd5b60208301915083602082850101111561130757600080fd5b9250929050565b803560ff8116811461125a57600080fd5b60008060008060006060868803121561133757600080fd5b853567ffffffffffffffff8082111561134f57600080fd5b61135b89838a016112c5565b9097509550602088013591508082111561137457600080fd5b50611381888289016112c5565b909450925061139490506040870161130e565b90509295509295909350565b6000602082840312156113b257600080fd5b610e2182611243565b6000602082840312156113cd57600080fd5b5035919050565b600080600080600080600060e0888a0312156113ef57600080fd5b6113f888611243565b965061140660208901611243565b955060408801359450606088013593506114226080890161130e565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561145157600080fd5b61145a83611243565b915061146860208401611243565b90509250929050565b600181811c9082168061148557607f821691505b6020821081036114a557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b601f82111561119f57600081815260208120601f850160051c810160208610156114e85750805b601f850160051c820191505b8181101561063d578281556001016114f4565b67ffffffffffffffff83111561151f5761151f6114ab565b6115338361152d8354611471565b836114c1565b6000601f841160018114611567576000851561154f5750838201355b600019600387901b1c1916600186901b1783556115c1565b600083815260209020601f19861690835b828110156115985786850135825560209485019460019092019101611578565b50868210156115b55760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611601576116016115d8565b500190565b600080835461161481611471565b6001828116801561162c576001811461164157611670565b60ff1984168752821515830287019450611670565b8760005260208060002060005b858110156116675781548a82015290840190820161164e565b50505082870194505b50929695505050505050565b85815260008551611694816020850160208a016111e0565b808301905085602082015284516116b28160408401602089016111e0565b60f89490941b6001600160f81b031916604091909401908101939093525050604101949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082821015611739576117396115d8565b50039056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122016857957634f01d5ae78f8125615e98a708f2d8ca77eaa2acb4f008503a8e53064736f6c634300080f0033";

type BridgeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeToken__factory extends ContractFactory {
  constructor(...args: BridgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BridgeToken> {
    return super.deploy(overrides || {}) as Promise<BridgeToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeToken {
    return super.attach(address) as BridgeToken;
  }
  override connect(signer: Signer): BridgeToken__factory {
    return super.connect(signer) as BridgeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeTokenInterface {
    return new utils.Interface(_abi) as BridgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeToken {
    return new Contract(address, _abi, signerOrProvider) as BridgeToken;
  }
}
