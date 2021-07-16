/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "count",
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
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "incrementAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setShouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shouldRevert",
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
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506000805460ff191690556104bf8061002f6000396000f3fe60806040526004361061004a5760003560e01c806306661abd1461004f5780636813d78714610078578063d09de08a146100a8578063d2eee78a146100bd578063d3072d82146100d0575b600080fd5b34801561005b57600080fd5b5061006560015481565b6040519081526020015b60405180910390f35b34801561008457600080fd5b506100a6610093366004610415565b6000805460ff1916911515919091179055565b005b3480156100b457600080fd5b506100a66100fa565b6100a66100cb3660046103da565b61016b565b3480156100dc57600080fd5b506000546100ea9060ff1681565b604051901515815260200161006f565b60005460ff16156101525760405162461bcd60e51b815260206004820152601f60248201527f696e6372656d656e743a2073686f756c6452657665727420697320747275650060448201526064015b60405180910390fd5b60018060008282546101649190610454565b9091555050565b6001600160a01b0383166101d9578034146101d45760405162461bcd60e51b8152602060048201526024808201527f696e6372656d656e74416e6453656e643a20494e56414c49445f4554485f414d60448201526313d5539560e21b6064820152608401610149565b610233565b34156102275760405162461bcd60e51b815260206004820152601e60248201527f696e6372656d656e74416e6453656e643a204554485f574954485f45524300006044820152606401610149565b6102338333308461024b565b61023b6100fa565b6102468383836102dc565b505050565b6040516323b872dd60e01b81526001600160a01b0384811660048301528381166024830152604482018390528516906323b872dd90606401602060405180830381600087803b15801561029d57600080fd5b505af11580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190610438565b5050505050565b6001600160a01b038316156102f657610246838383610300565b6102468282610388565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb90604401602060405180830381600087803b15801561034a57600080fd5b505af115801561035e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103829190610438565b50505050565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610246573d6000803e3d6000fd5b80356001600160a01b03811681146103d557600080fd5b919050565b6000806000606084860312156103ee578283fd5b6103f7846103be565b9250610405602085016103be565b9150604084013590509250925092565b600060208284031215610426578081fd5b813561043181610478565b9392505050565b600060208284031215610449578081fd5b815161043181610478565b6000821982111561047357634e487b7160e01b81526011600452602481fd5b500190565b801515811461048657600080fd5b5056fea26469706673582212203058f9381c395176f6ba42d3405dc0785bde6090967295e678e742a92150d7fb64736f6c63430008040033";

export class Counter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}