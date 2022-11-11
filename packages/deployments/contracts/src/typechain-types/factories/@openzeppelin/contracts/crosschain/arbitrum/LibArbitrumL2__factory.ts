/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LibArbitrumL2,
  LibArbitrumL2Interface,
} from "../../../../../@openzeppelin/contracts/crosschain/arbitrum/LibArbitrumL2";

const _abi = [
  {
    inputs: [],
    name: "ARBSYS",
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
  "0x6091610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063bf0a12cf146038575b600080fd5b603f606481565b6040516001600160a01b03909116815260200160405180910390f3fea26469706673582212208165ef378e2ad87a3532cb38a95e2a1d2e84d432a790fa66a6d0a7742d7bb13a64736f6c63430008110033";

type LibArbitrumL2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibArbitrumL2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibArbitrumL2__factory extends ContractFactory {
  constructor(...args: LibArbitrumL2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibArbitrumL2> {
    return super.deploy(overrides || {}) as Promise<LibArbitrumL2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibArbitrumL2 {
    return super.attach(address) as LibArbitrumL2;
  }
  override connect(signer: Signer): LibArbitrumL2__factory {
    return super.connect(signer) as LibArbitrumL2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibArbitrumL2Interface {
    return new utils.Interface(_abi) as LibArbitrumL2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibArbitrumL2 {
    return new Contract(address, _abi, signerOrProvider) as LibArbitrumL2;
  }
}
