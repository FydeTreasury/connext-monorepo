/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../../../../../common";

export interface FxBaseRootTunnelInterface extends utils.Interface {
  functions: {
    "SEND_MESSAGE_EVENT_SIG()": FunctionFragment;
    "checkpointManager()": FunctionFragment;
    "fxChildTunnel()": FunctionFragment;
    "fxRoot()": FunctionFragment;
    "processedExits(bytes32)": FunctionFragment;
    "receiveMessage(bytes)": FunctionFragment;
    "setFxChildTunnel(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "SEND_MESSAGE_EVENT_SIG"
      | "checkpointManager"
      | "fxChildTunnel"
      | "fxRoot"
      | "processedExits"
      | "receiveMessage"
      | "setFxChildTunnel"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpointManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fxChildTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processedExits",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxChildTunnel",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpointManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxChildTunnel",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FxBaseRootTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxBaseRootTunnelInterface;

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
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;

    checkpointManager(overrides?: CallOverrides): Promise<[string]>;

    fxChildTunnel(overrides?: CallOverrides): Promise<[string]>;

    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  checkpointManager(overrides?: CallOverrides): Promise<string>;

  fxChildTunnel(overrides?: CallOverrides): Promise<string>;

  fxRoot(overrides?: CallOverrides): Promise<string>;

  processedExits(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiveMessage(
    inputData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxChildTunnel(
    _fxChildTunnel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

    checkpointManager(overrides?: CallOverrides): Promise<string>;

    fxChildTunnel(overrides?: CallOverrides): Promise<string>;

    fxRoot(overrides?: CallOverrides): Promise<string>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    checkpointManager(overrides?: CallOverrides): Promise<BigNumber>;

    fxChildTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SEND_MESSAGE_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpointManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxChildTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
