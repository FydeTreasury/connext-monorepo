/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PropertyQuery,
  PropertyQueryInterface,
} from "../../../../../contracts/test/forge/Executor.t.sol/PropertyQuery";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
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
    name: "NATIVE_ASSET",
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
    name: "failed",
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
    name: "getOrigin",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOriginSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stdstore",
    outputs: [
      {
        internalType: "bytes4",
        name: "_sig",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_set",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506102ce8061002d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063ba414fa61161005b578063ba414fa61461011d578063bf53253b1461013f578063df1f29ee14610147578063fa7626d41461016457600080fd5b806330991384146100825780633a768463146100e257806346c50a4414610115575b600080fd5b6004546005546006546007546100a49360e01b92916001600160a01b03169084565b604080516001600160e01b0319909516855260208501939093526001600160a01b039091169183019190915260608201526080015b60405180910390f35b6100fd737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020016100d9565b6100fd610171565b60005461012f90610100900460ff1681565b60405190151581526020016100d9565b6100fd600081565b61014f6101dc565b60405163ffffffff90911681526020016100d9565b60005461012f9060ff1681565b6000336001600160a01b0316632b59241f6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d79190610242565b905090565b6000336001600160a01b031663938b5f326040518163ffffffff1660e01b81526004016020604051808303816000875af115801561021e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d79190610272565b60006020828403121561025457600080fd5b81516001600160a01b038116811461026b57600080fd5b9392505050565b60006020828403121561028457600080fd5b815163ffffffff8116811461026b57600080fdfea26469706673582212205f620e9b47a7f587f6ce9f7faa8e20cbd32f3abc230e6dec8771acff811a54af64736f6c634300080b0033";

type PropertyQueryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PropertyQueryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PropertyQuery__factory extends ContractFactory {
  constructor(...args: PropertyQueryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PropertyQuery> {
    return super.deploy(overrides || {}) as Promise<PropertyQuery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PropertyQuery {
    return super.attach(address) as PropertyQuery;
  }
  override connect(signer: Signer): PropertyQuery__factory {
    return super.connect(signer) as PropertyQuery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PropertyQueryInterface {
    return new utils.Interface(_abi) as PropertyQueryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PropertyQuery {
    return new Contract(address, _abi, signerOrProvider) as PropertyQuery;
  }
}
