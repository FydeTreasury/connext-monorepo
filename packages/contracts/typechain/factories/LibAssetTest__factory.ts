/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibAssetTest, LibAssetTestInterface } from "../LibAssetTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
    ],
    name: "getOwnBalance",
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
        name: "assetId",
        type: "address",
      },
    ],
    name: "isEther",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAsset",
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
    name: "transferERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806305b1137b1461005c578063439e2e45146100715780634b93c875146100845780639db5dbe4146100ac578063a7d2fdf6146100bf575b600080fd5b61006f61006a3660046102c1565b6100e0565b005b61006f61007f3660046102ec565b6100ee565b61009761009236600461029e565b6100fe565b60405190151581526020015b60405180910390f35b61006f6100ba36600461032c565b610112565b6100d26100cd36600461029e565b61011d565b6040519081526020016100a3565b6100ea8282610128565b5050565b6100f983838361015e565b505050565b60006001600160a01b038216155b92915050565b6100f9838383610182565b600061010c8261020a565b6040516001600160a01b0383169082156108fc029083906000818181858888f193505050501580156100f9573d6000803e3d6000fd5b6001600160a01b03831615610178576100f9838383610182565b6100f98282610128565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb90604401602060405180830381600087803b1580156101cc57600080fd5b505af11580156101e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102049190610340565b50505050565b60006001600160a01b03821615610297576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561025a57600080fd5b505afa15801561026e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102929190610360565b61010c565b4792915050565b6000602082840312156102af578081fd5b81356102ba81610378565b9392505050565b600080604083850312156102d3578081fd5b82356102de81610378565b946020939093013593505050565b600080600060608486031215610300578081fd5b833561030b81610378565b9250602084013561031b81610378565b929592945050506040919091013590565b600080600060608486031215610300578283fd5b600060208284031215610351578081fd5b815180151581146102ba578182fd5b600060208284031215610371578081fd5b5051919050565b6001600160a01b038116811461038d57600080fd5b5056fea2646970667358221220b3e6f80fc88ea65e4bbd0c301d07cdd6a17e14f311f944e82521e51c8f542ce664736f6c63430008040033";

export class LibAssetTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibAssetTest> {
    return super.deploy(overrides || {}) as Promise<LibAssetTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibAssetTest {
    return super.attach(address) as LibAssetTest;
  }
  connect(signer: Signer): LibAssetTest__factory {
    return super.connect(signer) as LibAssetTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibAssetTestInterface {
    return new utils.Interface(_abi) as LibAssetTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibAssetTest {
    return new Contract(address, _abi, signerOrProvider) as LibAssetTest;
  }
}
