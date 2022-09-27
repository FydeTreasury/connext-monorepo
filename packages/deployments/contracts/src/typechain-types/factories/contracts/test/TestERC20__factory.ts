/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "account",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  "0x60806040523480156200001157600080fd5b50604051620014ad380380620014ad833981016040819052620000349162000234565b818160036200004483826200032c565b5060046200005382826200032c565b505050620000723369d3c21bcecceda10000006200007a60201b60201c565b50506200041f565b6001600160a01b038216620000d55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000e99190620003f8565b90915550506001600160a01b0382166000908152602081905260408120805483929062000118908490620003f8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018f57600080fd5b81516001600160401b0380821115620001ac57620001ac62000167565b604051601f8301601f19908116603f01168101908282118183101715620001d757620001d762000167565b81604052838152602092508683858801011115620001f457600080fd5b600091505b83821015620002185785820183015181830184015290820190620001f9565b838211156200022a5760008385830101525b9695505050505050565b600080604083850312156200024857600080fd5b82516001600160401b03808211156200026057600080fd5b6200026e868387016200017d565b935060208501519150808211156200028557600080fd5b5062000294858286016200017d565b9150509250929050565b600181811c90821680620002b357607f821691505b602082108103620002d457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200016257600081815260208120601f850160051c81016020861015620003035750805b601f850160051c820191505b8181101562000324578281556001016200030f565b505050505050565b81516001600160401b0381111562000348576200034862000167565b62000360816200035984546200029e565b84620002da565b602080601f8311600181146200039857600084156200037f5750858301515b600019600386901b1c1916600185901b17855562000324565b600085815260208120601f198616915b82811015620003c957888601518255948401946001909101908401620003a8565b5085821015620003e85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200041a57634e487b7160e01b600052601160045260246000fd5b500190565b61107e806200042f6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a9059cbb11610071578063a9059cbb1461022a578063b7b090ee1461023d578063cc2ab7c714610251578063dd62ed3e14610262578063f2fde38b1461027557600080fd5b806370a08231146101d357806395d89b41146101fc5780639dc29fac14610204578063a457c2d71461021757600080fd5b80633118724e116100e95780633118724e14610181578063313ce5671461019657806339509351146101a557806340c10f19146101b85780634815fcb1146101cb57600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b610123610283565b6040516101309190610bf5565b60405180910390f35b61014c610147366004610c44565b610292565b6040519015158152602001610130565b6002545b604051908152602001610130565b61014c61017c366004610c6e565b6102aa565b61019461018f366004610d6f565b505050565b005b60405160128152602001610130565b61014c6101b3366004610c44565b6102ce565b6101946101c6366004610c44565b6102f0565b6101606102fe565b6101606101e1366004610deb565b6001600160a01b031660009081526020819052604090205490565b6101236104c8565b610194610212366004610c44565b6104d2565b61014c610225366004610c44565b6104dc565b61014c610238366004610c44565b61055c565b61019461024b366004610e56565b50505050565b61019461025f366004610ec2565b50565b610160610270366004610edb565b61056a565b61019461025f366004610deb565b606061028d610595565b905090565b6000336102a0818585610627565b5060019392505050565b6000336102b885828561074b565b6102c38585856107bf565b506001949350505050565b6000336102a08185856102e1838361056a565b6102eb9190610f24565b610627565b6102fa828261098d565b5050565b6000306001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801561033e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103669190810190610f3c565b51306001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103a5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103cd9190810190610f3c565b306001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561040b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104339190810190610f3c565b51306001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610472573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261049a9190810190610f3c565b6040516020016104ad9493929190610fb3565b60405160208183030381529060405280519060200120905090565b606061028d610a6c565b6102fa8282610a7b565b600033816104ea828661056a565b90508381101561054f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102c38286868403610627565b6000336102a08185856107bf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546105a490610ff7565b80601f01602080910402602001604051908101604052809291908181526020018280546105d090610ff7565b801561061d5780601f106105f25761010080835404028352916020019161061d565b820191906000526020600020905b81548152906001019060200180831161060057829003601f168201915b5050505050905090565b6001600160a01b0383166106895760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610546565b6001600160a01b0382166106ea5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610546565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610757848461056a565b9050600019811461024b57818110156107b25760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610546565b61024b8484848403610627565b6001600160a01b0383166108235760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610546565b6001600160a01b0382166108855760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610546565b6001600160a01b038316600090815260208190526040902054818110156108fd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610546565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610934908490610f24565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161098091815260200190565b60405180910390a361024b565b6001600160a01b0382166109e35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610546565b80600260008282546109f59190610f24565b90915550506001600160a01b03821660009081526020819052604081208054839290610a22908490610f24565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6060600480546105a490610ff7565b6001600160a01b038216610adb5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610546565b6001600160a01b03821660009081526020819052604090205481811015610b4f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610546565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b7e908490611031565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60005b83811015610be4578181015183820152602001610bcc565b8381111561024b5750506000910152565b6020815260008251806020840152610c14816040850160208701610bc9565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610c3f57600080fd5b919050565b60008060408385031215610c5757600080fd5b610c6083610c28565b946020939093013593505050565b600080600060608486031215610c8357600080fd5b610c8c84610c28565b9250610c9a60208501610c28565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610ce957610ce9610caa565b604052919050565b600067ffffffffffffffff821115610d0b57610d0b610caa565b50601f01601f191660200190565b600082601f830112610d2a57600080fd5b8135610d3d610d3882610cf1565b610cc0565b818152846020838601011115610d5257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610d8457600080fd5b833560ff81168114610d9557600080fd5b9250602084013567ffffffffffffffff80821115610db257600080fd5b610dbe87838801610d19565b93506040860135915080821115610dd457600080fd5b50610de186828701610d19565b9150509250925092565b600060208284031215610dfd57600080fd5b610e0682610c28565b9392505050565b60008083601f840112610e1f57600080fd5b50813567ffffffffffffffff811115610e3757600080fd5b602083019150836020828501011115610e4f57600080fd5b9250929050565b60008060008060408587031215610e6c57600080fd5b843567ffffffffffffffff80821115610e8457600080fd5b610e9088838901610e0d565b90965094506020870135915080821115610ea957600080fd5b50610eb687828801610e0d565b95989497509550505050565b600060208284031215610ed457600080fd5b5035919050565b60008060408385031215610eee57600080fd5b610ef783610c28565b9150610f0560208401610c28565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f3757610f37610f0e565b500190565b600060208284031215610f4e57600080fd5b815167ffffffffffffffff811115610f6557600080fd5b8201601f81018413610f7657600080fd5b8051610f84610d3882610cf1565b818152856020838501011115610f9957600080fd5b610faa826020830160208601610bc9565b95945050505050565b84815260008451610fcb816020850160208901610bc9565b80830190508460208201528351610fe9816040840160208801610bc9565b016040019695505050505050565b600181811c9082168061100b57607f821691505b60208210810361102b57634e487b7160e01b600052602260045260246000fd5b50919050565b60008282101561104357611043610f0e565b50039056fea264697066735822122067571c93f19e5c5b7727a465505dea309fa5015be4410c09323a737e7e009bd164736f6c634300080f0033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
