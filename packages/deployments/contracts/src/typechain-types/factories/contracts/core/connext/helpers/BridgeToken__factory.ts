/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { BridgeToken, BridgeTokenInterface } from "../../../../../contracts/core/connext/helpers/BridgeToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    ],
    name: "UpdateDetails",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        name: "_owner",
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
    ],
    name: "setDetails",
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
        name: "newOwner",
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
  "0x6101406040523480156200001257600080fd5b5060405162001bd838038062001bd883398101604081905262000035916200025b565b828282604051806040016040528060018152602001603160f81b81525082816200006e620000686200014260201b60201c565b62000146565b815160209283012081519183019190912060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801819052818301969096526060810194909452608080850193909352308483018190528151808603909301835260c0948501909152815191909501209052919091526101205260066200010b84826200036e565b506008805460ff191660ff861617905560076200012983826200036e565b508051602090910120600555506200043a945050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001be57600080fd5b81516001600160401b0380821115620001db57620001db62000196565b604051601f8301601f19908116603f0116810190828211818310171562000206576200020662000196565b816040528381526020925086838588010111156200022357600080fd5b600091505b8382101562000247578582018301518183018401529082019062000228565b600093810190920192909252949350505050565b6000806000606084860312156200027157600080fd5b835160ff811681146200028357600080fd5b60208501519093506001600160401b0380821115620002a157600080fd5b620002af87838801620001ac565b93506040860151915080821115620002c657600080fd5b50620002d586828701620001ac565b9150509250925092565b600181811c90821680620002f457607f821691505b6020821081036200031557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200036957600081815260208120601f850160051c81016020861015620003445750805b601f850160051c820191505b81811015620003655782815560010162000350565b5050505b505050565b81516001600160401b038111156200038a576200038a62000196565b620003a2816200039b8454620002df565b846200031b565b602080601f831160018114620003da5760008415620003c15750858301515b600019600386901b1c1916600185901b17855562000365565b600085815260208120601f198616915b828110156200040b57888601518255948401946001909101908401620003ea565b50858210156200042a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e051610100516101205161174e6200048a6000396000610eb701526000610f0601526000610ee101526000610e3a01526000610e6401526000610e8e015261174e6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80637ecebe00116100ad578063a9059cbb11610071578063a9059cbb14610253578063b7b090ee14610266578063d505accf14610279578063dd62ed3e1461028c578063f2fde38b146102c557600080fd5b80637ecebe00146101f75780638da5cb5b1461020a57806395d89b41146102255780639dc29fac1461022d578063a457c2d71461024057600080fd5b80633644e515116100f45780633644e515146101ac57806339509351146101b457806340c10f19146101c757806370a08231146101dc578063715018a6146101ef57600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b6101396102d8565b60405161014691906111f7565b60405180910390f35b61016261015d366004611261565b61036d565b6040519015158152602001610146565b6003545b604051908152602001610146565b61016261019236600461128b565b610384565b60085460405160ff9091168152602001610146565b6101766103ed565b6101626101c2366004611261565b610480565b6101da6101d5366004611261565b6104b6565b005b6101766101ea3660046112c7565b6104cc565b6101da6104ea565b6101766102053660046112c7565b6104fe565b6000546040516001600160a01b039091168152602001610146565b61013961051c565b6101da61023b366004611261565b61052e565b61016261024e366004611261565b610540565b610162610261366004611261565b61058f565b6101da61027436600461132b565b61059c565b6101da610287366004611397565b61061e565b61017661029a36600461140a565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101da6102d33660046112c7565b610787565b6060600660000180546102ea9061143d565b80601f01602080910402602001604051908101604052809291908181526020018280546103169061143d565b80156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b5050505050905090565b600061037a338484610800565b5060015b92915050565b6000610391848484610925565b6103e384336103de856040518060600160405280602881526020016116cc602891396001600160a01b038a1660009081526002602090815260408083203384529091529020549190610aab565b610800565b5060019392505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60066000016040516020016104259190611471565b60408051601f198184030181528282528051602091820120600554918401949094529082019290925260608101919091524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161037a9185906103de9086610ad7565b6104be610aea565b6104c88282610b44565b5050565b6001600160a01b03811660009081526001602052604081205461037e565b6104f2610aea565b6104fc6000610c2a565b565b6001600160a01b03811660009081526004602052604081205461037e565b6060600660010180546102ea9061143d565b610536610aea565b6104c88282610c7a565b600061037a33846103de856040518060600160405280602581526020016116f4602591393360009081526002602090815260408083206001600160a01b038d1684529091529020549190610aab565b600061037a338484610925565b6105a4610aea565b60066105b1848683611560565b5060076105bf828483611560565b5081816040516105d0929190611621565b604051809103902084846040516105e8929190611621565b604051908190038120907f1ec4c73af923253fb2c28a509dd78d342709289a09929d78c64c0b8e047efbcd90600090a350505050565b834211156106735760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886106a28c610d7e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006106fd82610da6565b9050600061070d82878787610df4565b9050896001600160a01b0316816001600160a01b0316146107705760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161066a565b61077b8a8a8a610800565b50505050505050505050565b61078f610aea565b6001600160a01b0381166107f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161066a565b6107fd81610c2a565b50565b6001600160a01b0383166108625760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161066a565b6001600160a01b0382166108c35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161066a565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166109895760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161066a565b6001600160a01b0382166109eb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161066a565b610a28816040518060600160405280602681526020016116a6602691396001600160a01b0386166000908152600160205260409020549190610aab565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610a579082610ad7565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109189085815260200190565b60008184841115610acf5760405162461bcd60e51b815260040161066a91906111f7565b505050900390565b6000610ae38284611647565b9392505050565b6000546001600160a01b031633146104fc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161066a565b6001600160a01b038216610b9a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161066a565b600354610ba79082610ad7565b6003556001600160a01b038216600090815260016020526040902054610bcd9082610ad7565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c1e9085815260200190565b60405180910390a35050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216610cda5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161066a565b610d1781604051806060016040528060228152602001611684602291396001600160a01b0385166000908152600160205260409020549190610aab565b6001600160a01b038316600090815260016020526040902055600354610d3d9082610e21565b6003556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610c1e565b6001600160a01b03811660009081526004602052604090208054600181018255905b50919050565b600061037e610db3610e2d565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610e0587878787610f54565b91509150610e1281611041565b5095945050505050565b505050565b6000610ae3828461165a565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610e8657507f000000000000000000000000000000000000000000000000000000000000000046145b15610eb057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610f8b5750600090506003611038565b8460ff16601b14158015610fa357508460ff16601c14155b15610fb45750600090506004611038565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611008573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661103157600060019250925050611038565b9150600090505b94509492505050565b60008160048111156110555761105561166d565b0361105d5750565b60018160048111156110715761107161166d565b036110be5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161066a565b60028160048111156110d2576110d261166d565b0361111f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161066a565b60038160048111156111335761113361166d565b0361118b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161066a565b600481600481111561119f5761119f61166d565b036107fd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161066a565b600060208083528351808285015260005b8181101561122457858101830151858201604001528201611208565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461125c57600080fd5b919050565b6000806040838503121561127457600080fd5b61127d83611245565b946020939093013593505050565b6000806000606084860312156112a057600080fd5b6112a984611245565b92506112b760208501611245565b9150604084013590509250925092565b6000602082840312156112d957600080fd5b610ae382611245565b60008083601f8401126112f457600080fd5b50813567ffffffffffffffff81111561130c57600080fd5b60208301915083602082850101111561132457600080fd5b9250929050565b6000806000806040858703121561134157600080fd5b843567ffffffffffffffff8082111561135957600080fd5b611365888389016112e2565b9096509450602087013591508082111561137e57600080fd5b5061138b878288016112e2565b95989497509550505050565b600080600080600080600060e0888a0312156113b257600080fd5b6113bb88611245565b96506113c960208901611245565b95506040880135945060608801359350608088013560ff811681146113ed57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561141d57600080fd5b61142683611245565b915061143460208401611245565b90509250929050565b600181811c9082168061145157607f821691505b602082108103610da057634e487b7160e01b600052602260045260246000fd5b60006020808352600084546114858161143d565b808487015260406001808416600081146114a657600181146114c0576114ee565b60ff1985168984015283151560051b8901830195506114ee565b896000528660002060005b858110156114e65781548b82018601529083019088016114cb565b8a0184019650505b509398975050505050505050565b634e487b7160e01b600052604160045260246000fd5b601f821115610e1c57600081815260208120601f850160051c810160208610156115395750805b601f850160051c820191505b8181101561155857828155600101611545565b505050505050565b67ffffffffffffffff831115611578576115786114fc565b61158c83611586835461143d565b83611512565b6000601f8411600181146115c057600085156115a85750838201355b600019600387901b1c1916600186901b17835561161a565b600083815260209020601f19861690835b828110156115f157868501358255602094850194600190920191016115d1565b508682101561160e5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561037e5761037e611631565b8181038181111561037e5761037e611631565b634e487b7160e01b600052602160045260246000fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220cbe74612c765bbf8ed49ae54836c4487c81ff889bae04b3d7444ade64162a49064736f6c63430008110033";

type BridgeTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BridgeTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class BridgeToken__factory extends ContractFactory {
  constructor(...args: BridgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<BridgeToken> {
    return super.deploy(_decimals, _name, _symbol, overrides || {}) as Promise<BridgeToken>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_decimals, _name, _symbol, overrides || {});
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
  static connect(address: string, signerOrProvider: Signer | Provider): BridgeToken {
    return new Contract(address, _abi, signerOrProvider) as BridgeToken;
  }
}
