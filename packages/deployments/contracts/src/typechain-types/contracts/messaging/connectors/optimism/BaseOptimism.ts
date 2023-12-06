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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface BaseOptimismInterface extends utils.Interface {
  functions: {
    "acceptProposedOwner()": FunctionFragment;
    "delay()": FunctionFragment;
    "gasCap()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "setGasCap(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposedOwner"
      | "delay"
      | "gasCap"
      | "owner"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "renounceOwnership"
      | "renounced"
      | "setGasCap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(functionFragment: "gasCap", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setGasCap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasCap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGasCap", data: BytesLike): Result;

  events: {
    "GasCapUpdated(uint256,uint256)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GasCapUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface GasCapUpdatedEventObject {
  _previous: BigNumber;
  _updated: BigNumber;
}
export type GasCapUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  GasCapUpdatedEventObject
>;

export type GasCapUpdatedEventFilter = TypedEventFilter<GasCapUpdatedEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface BaseOptimism extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseOptimismInterface;

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
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    setGasCap(
      _gasCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  gasCap(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  setGasCap(
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    gasCap(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    setGasCap(
      _gasCap: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GasCapUpdated(uint256,uint256)"(
      _previous?: null,
      _updated?: null
    ): GasCapUpdatedEventFilter;
    GasCapUpdated(_previous?: null, _updated?: null): GasCapUpdatedEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    gasCap(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    setGasCap(
      _gasCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGasCap(
      _gasCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
