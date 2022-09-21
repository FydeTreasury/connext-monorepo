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

export interface GnosisHubConnectorInterface extends utils.Interface {
  functions: {
    "AMB()": FunctionFragment;
    "DOMAIN()": FunctionFragment;
    "MIRROR_DOMAIN()": FunctionFragment;
    "ROOT_MANAGER()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "delay()": FunctionFragment;
    "mirrorConnector()": FunctionFragment;
    "mirrorGas()": FunctionFragment;
    "owner()": FunctionFragment;
    "processMessage(bytes)": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "sendMessage(bytes)": FunctionFragment;
    "setMirrorConnector(address)": FunctionFragment;
    "setMirrorGas(uint256)": FunctionFragment;
    "verifySender(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AMB"
      | "DOMAIN"
      | "MIRROR_DOMAIN"
      | "ROOT_MANAGER"
      | "acceptProposedOwner"
      | "delay"
      | "mirrorConnector"
      | "mirrorGas"
      | "owner"
      | "processMessage"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "renounceOwnership"
      | "renounced"
      | "sendMessage"
      | "setMirrorConnector"
      | "setMirrorGas"
      | "verifySender"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "AMB", values?: undefined): string;
  encodeFunctionData(functionFragment: "DOMAIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIRROR_DOMAIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mirrorConnector",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mirrorGas", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
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
    functionFragment: "sendMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMirrorConnector",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMirrorGas",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySender",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "AMB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DOMAIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIRROR_DOMAIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mirrorConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mirrorGas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processMessage",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMirrorConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMirrorGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySender",
    data: BytesLike
  ): Result;

  events: {
    "MessageProcessed(bytes,address)": EventFragment;
    "MessageSent(bytes,address)": EventFragment;
    "MirrorConnectorUpdated(address,address)": EventFragment;
    "MirrorGasUpdated(uint256,uint256)": EventFragment;
    "NewConnector(uint32,uint32,address,address,address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageProcessed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MirrorConnectorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MirrorGasUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewConnector"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface MessageProcessedEventObject {
  data: string;
  caller: string;
}
export type MessageProcessedEvent = TypedEvent<
  [string, string],
  MessageProcessedEventObject
>;

export type MessageProcessedEventFilter =
  TypedEventFilter<MessageProcessedEvent>;

export interface MessageSentEventObject {
  data: string;
  caller: string;
}
export type MessageSentEvent = TypedEvent<
  [string, string],
  MessageSentEventObject
>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface MirrorConnectorUpdatedEventObject {
  previous: string;
  current: string;
}
export type MirrorConnectorUpdatedEvent = TypedEvent<
  [string, string],
  MirrorConnectorUpdatedEventObject
>;

export type MirrorConnectorUpdatedEventFilter =
  TypedEventFilter<MirrorConnectorUpdatedEvent>;

export interface MirrorGasUpdatedEventObject {
  previous: BigNumber;
  current: BigNumber;
}
export type MirrorGasUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  MirrorGasUpdatedEventObject
>;

export type MirrorGasUpdatedEventFilter =
  TypedEventFilter<MirrorGasUpdatedEvent>;

export interface NewConnectorEventObject {
  domain: number;
  mirrorDomain: number;
  amb: string;
  rootManager: string;
  mirrorConnector: string;
}
export type NewConnectorEvent = TypedEvent<
  [number, number, string, string, string],
  NewConnectorEventObject
>;

export type NewConnectorEventFilter = TypedEventFilter<NewConnectorEvent>;

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

export interface GnosisHubConnector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GnosisHubConnectorInterface;

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
    AMB(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN(overrides?: CallOverrides): Promise<[number]>;

    MIRROR_DOMAIN(overrides?: CallOverrides): Promise<[number]>;

    ROOT_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    mirrorConnector(overrides?: CallOverrides): Promise<[string]>;

    mirrorGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    sendMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMirrorConnector(
      _mirrorConnector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMirrorGas(
      _mirrorGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AMB(overrides?: CallOverrides): Promise<string>;

  DOMAIN(overrides?: CallOverrides): Promise<number>;

  MIRROR_DOMAIN(overrides?: CallOverrides): Promise<number>;

  ROOT_MANAGER(overrides?: CallOverrides): Promise<string>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  mirrorConnector(overrides?: CallOverrides): Promise<string>;

  mirrorGas(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  processMessage(
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  sendMessage(
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMirrorConnector(
    _mirrorConnector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMirrorGas(
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifySender(
    _expected: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AMB(overrides?: CallOverrides): Promise<string>;

    DOMAIN(overrides?: CallOverrides): Promise<number>;

    MIRROR_DOMAIN(overrides?: CallOverrides): Promise<number>;

    ROOT_MANAGER(overrides?: CallOverrides): Promise<string>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    mirrorConnector(overrides?: CallOverrides): Promise<string>;

    mirrorGas(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    sendMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMirrorConnector(
      _mirrorConnector: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMirrorGas(
      _mirrorGas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "MessageProcessed(bytes,address)"(
      data?: null,
      caller?: null
    ): MessageProcessedEventFilter;
    MessageProcessed(data?: null, caller?: null): MessageProcessedEventFilter;

    "MessageSent(bytes,address)"(
      data?: null,
      caller?: null
    ): MessageSentEventFilter;
    MessageSent(data?: null, caller?: null): MessageSentEventFilter;

    "MirrorConnectorUpdated(address,address)"(
      previous?: null,
      current?: null
    ): MirrorConnectorUpdatedEventFilter;
    MirrorConnectorUpdated(
      previous?: null,
      current?: null
    ): MirrorConnectorUpdatedEventFilter;

    "MirrorGasUpdated(uint256,uint256)"(
      previous?: null,
      current?: null
    ): MirrorGasUpdatedEventFilter;
    MirrorGasUpdated(
      previous?: null,
      current?: null
    ): MirrorGasUpdatedEventFilter;

    "NewConnector(uint32,uint32,address,address,address)"(
      domain?: PromiseOrValue<BigNumberish> | null,
      mirrorDomain?: PromiseOrValue<BigNumberish> | null,
      amb?: null,
      rootManager?: null,
      mirrorConnector?: null
    ): NewConnectorEventFilter;
    NewConnector(
      domain?: PromiseOrValue<BigNumberish> | null,
      mirrorDomain?: PromiseOrValue<BigNumberish> | null,
      amb?: null,
      rootManager?: null,
      mirrorConnector?: null
    ): NewConnectorEventFilter;

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
    AMB(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN(overrides?: CallOverrides): Promise<BigNumber>;

    MIRROR_DOMAIN(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    mirrorConnector(overrides?: CallOverrides): Promise<BigNumber>;

    mirrorGas(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    sendMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMirrorConnector(
      _mirrorConnector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMirrorGas(
      _mirrorGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AMB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIRROR_DOMAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mirrorConnector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mirrorGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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

    sendMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMirrorConnector(
      _mirrorConnector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMirrorGas(
      _mirrorGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
