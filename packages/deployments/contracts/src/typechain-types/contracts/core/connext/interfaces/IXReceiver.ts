/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IXReceiverInterface extends utils.Interface {
  functions: {
    "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "xReceive"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "xReceive",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;

  events: {};
}

export interface IXReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IXReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    xReceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  xReceive(
    _transferId: PromiseOrValue<BytesLike>,
    _amount: PromiseOrValue<BigNumberish>,
    _asset: PromiseOrValue<string>,
    _originSender: PromiseOrValue<string>,
    _origin: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    xReceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    xReceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    xReceive(
      _transferId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _asset: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
