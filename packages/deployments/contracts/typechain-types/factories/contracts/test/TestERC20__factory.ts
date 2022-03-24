/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [],
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
    stateMutability: "payable",
    type: "fallback",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152692a32b9ba102a37b5b2b760b11b602080830191825283518085019094526004845263151154d560e21b908401528151919291620000609160039162000183565b5080516200007690600490602084019062000183565b505050620000953369d3c21bcecceda10000006200009b60201b60201c565b6200028d565b6001600160a01b038216620000f65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200010a919062000229565b90915550506001600160a01b038216600090815260208190526040812080548392906200013990849062000229565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001919062000250565b90600052602060002090601f016020900481019282620001b5576000855562000200565b82601f10620001d057805160ff191683800117855562000200565b8280016001018555821562000200579182015b8281111562000200578251825591602001919060010190620001e3565b506200020e92915062000212565b5090565b5b808211156200020e576000815560010162000213565b600082198211156200024b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b610c0a806200029d6000396000f3fe6080604052600436106100bc5760003560e01c806340c10f19116100795780639dc29fac116100565780639dc29fac146101ff578063a457c2d71461021f578063a9059cbb1461023f578063dd62ed3e1461025f57005b806340c10f191461019457806370a08231146101b457806395d89b41146101ea57005b806306fdde03146100be578063095ea7b3146100e957806318160ddd1461011957806323b872dd14610138578063313ce567146101585780633950935114610174575b005b3480156100ca57600080fd5b506100d36102a5565b6040516100e09190610a28565b60405180910390f35b3480156100f557600080fd5b50610109610104366004610a99565b610337565b60405190151581526020016100e0565b34801561012557600080fd5b506002545b6040519081526020016100e0565b34801561014457600080fd5b50610109610153366004610ac3565b61034f565b34801561016457600080fd5b50604051601281526020016100e0565b34801561018057600080fd5b5061010961018f366004610a99565b610373565b3480156101a057600080fd5b506100bc6101af366004610a99565b6103b2565b3480156101c057600080fd5b5061012a6101cf366004610aff565b6001600160a01b031660009081526020819052604090205490565b3480156101f657600080fd5b506100d36103c0565b34801561020b57600080fd5b506100bc61021a366004610a99565b6103cf565b34801561022b57600080fd5b5061010961023a366004610a99565b6103d9565b34801561024b57600080fd5b5061010961025a366004610a99565b610470565b34801561026b57600080fd5b5061012a61027a366004610b21565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102b490610b54565b80601f01602080910402602001604051908101604052809291908181526020018280546102e090610b54565b801561032d5780601f106103025761010080835404028352916020019161032d565b820191906000526020600020905b81548152906001019060200180831161031057829003601f168201915b5050505050905090565b60003361034581858561047e565b5060019392505050565b60003361035d8582856105a3565b610368858585610635565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061034590829086906103ad908790610ba5565b61047e565b6103bc8282610803565b5050565b6060600480546102b490610b54565b6103bc82826108e2565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104635760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610368828686840361047e565b600033610345818585610635565b6001600160a01b0383166104e05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161045a565b6001600160a01b0382166105415760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161045a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461062f57818110156106225760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161045a565b61062f848484840361047e565b50505050565b6001600160a01b0383166106995760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161045a565b6001600160a01b0382166106fb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161045a565b6001600160a01b038316600090815260208190526040902054818110156107735760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161045a565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107aa908490610ba5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107f691815260200190565b60405180910390a361062f565b6001600160a01b0382166108595760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161045a565b806002600082825461086b9190610ba5565b90915550506001600160a01b03821660009081526020819052604081208054839290610898908490610ba5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166109425760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161045a565b6001600160a01b038216600090815260208190526040902054818110156109b65760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161045a565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109e5908490610bbd565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610596565b600060208083528351808285015260005b81811015610a5557858101830151858201604001528201610a39565b81811115610a67576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a9457600080fd5b919050565b60008060408385031215610aac57600080fd5b610ab583610a7d565b946020939093013593505050565b600080600060608486031215610ad857600080fd5b610ae184610a7d565b9250610aef60208501610a7d565b9150604084013590509250925092565b600060208284031215610b1157600080fd5b610b1a82610a7d565b9392505050565b60008060408385031215610b3457600080fd5b610b3d83610a7d565b9150610b4b60208401610a7d565b90509250929050565b600181811c90821680610b6857607f821691505b60208210811415610b8957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb857610bb8610b8f565b500190565b600082821015610bcf57610bcf610b8f565b50039056fea2646970667358221220aec33af1f09f66ae5b0873d3ac928325ff6271df300ea72d44b99be472b142cd64736f6c634300080b0033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
