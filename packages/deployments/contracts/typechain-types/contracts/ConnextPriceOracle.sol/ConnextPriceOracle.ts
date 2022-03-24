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
} from "../../common";

export interface ConnextPriceOracleInterface extends utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "aggregators(address)": FunctionFragment;
    "assetPrices(address)": FunctionFragment;
    "getPriceFromChainlink(address)": FunctionFragment;
    "getPriceFromDex(address)": FunctionFragment;
    "getPriceFromOracle(address)": FunctionFragment;
    "getTokenPrice(address)": FunctionFragment;
    "isPriceOracle()": FunctionFragment;
    "priceRecords(address)": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setAggregators(address[],address[])": FunctionFragment;
    "setDexPriceInfo(address,address,address,bool)": FunctionFragment;
    "setDirectPrice(address,uint256)": FunctionFragment;
    "setV1PriceOracle(address)": FunctionFragment;
    "v1PriceOracle()": FunctionFragment;
    "wrapped()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "admin"
      | "aggregators"
      | "assetPrices"
      | "getPriceFromChainlink"
      | "getPriceFromDex"
      | "getPriceFromOracle"
      | "getTokenPrice"
      | "isPriceOracle"
      | "priceRecords"
      | "setAdmin"
      | "setAggregators"
      | "setDexPriceInfo"
      | "setDirectPrice"
      | "setV1PriceOracle"
      | "v1PriceOracle"
      | "wrapped"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "aggregators", values: [string]): string;
  encodeFunctionData(functionFragment: "assetPrices", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPriceFromChainlink",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceFromDex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceFromOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceRecords",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAggregators",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDexPriceInfo",
    values: [string, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDirectPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setV1PriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "v1PriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wrapped", values?: undefined): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "aggregators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFromChainlink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFromDex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFromOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAggregators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDexPriceInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDirectPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setV1PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "v1PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapped", data: BytesLike): Result;

  events: {
    "AggregatorUpdated(address,address)": EventFragment;
    "DirectPriceUpdated(address,uint256,uint256)": EventFragment;
    "NewAdmin(address,address)": EventFragment;
    "PriceRecordUpdated(address,address,address,bool)": EventFragment;
    "V1PriceOracleUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AggregatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DirectPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceRecordUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "V1PriceOracleUpdated"): EventFragment;
}

export interface AggregatorUpdatedEventObject {
  tokenAddress: string;
  source: string;
}
export type AggregatorUpdatedEvent = TypedEvent<
  [string, string],
  AggregatorUpdatedEventObject
>;

export type AggregatorUpdatedEventFilter =
  TypedEventFilter<AggregatorUpdatedEvent>;

export interface DirectPriceUpdatedEventObject {
  token: string;
  oldPrice: BigNumber;
  newPrice: BigNumber;
}
export type DirectPriceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DirectPriceUpdatedEventObject
>;

export type DirectPriceUpdatedEventFilter =
  TypedEventFilter<DirectPriceUpdatedEvent>;

export interface NewAdminEventObject {
  oldAdmin: string;
  newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;

export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;

export interface PriceRecordUpdatedEventObject {
  token: string;
  baseToken: string;
  lpToken: string;
  _active: boolean;
}
export type PriceRecordUpdatedEvent = TypedEvent<
  [string, string, string, boolean],
  PriceRecordUpdatedEventObject
>;

export type PriceRecordUpdatedEventFilter =
  TypedEventFilter<PriceRecordUpdatedEvent>;

export interface V1PriceOracleUpdatedEventObject {
  oldAddress: string;
  newAddress: string;
}
export type V1PriceOracleUpdatedEvent = TypedEvent<
  [string, string],
  V1PriceOracleUpdatedEventObject
>;

export type V1PriceOracleUpdatedEventFilter =
  TypedEventFilter<V1PriceOracleUpdatedEvent>;

export interface ConnextPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnextPriceOracleInterface;

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
    admin(overrides?: CallOverrides): Promise<[string]>;

    aggregators(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    assetPrices(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriceFromChainlink(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceFromDex(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceFromOracle(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenPrice(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;

    priceRecords(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        token: string;
        baseToken: string;
        lpToken: string;
        active: boolean;
      }
    >;

    setAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAggregators(
      tokenAddresses: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDexPriceInfo(
      _token: string,
      _baseToken: string,
      _lpToken: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDirectPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setV1PriceOracle(
      _v1PriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    v1PriceOracle(overrides?: CallOverrides): Promise<[string]>;

    wrapped(overrides?: CallOverrides): Promise<[string]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  aggregators(arg0: string, overrides?: CallOverrides): Promise<string>;

  assetPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPriceFromChainlink(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceFromDex(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceFromOracle(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenPrice(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

  priceRecords(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, boolean] & {
      token: string;
      baseToken: string;
      lpToken: string;
      active: boolean;
    }
  >;

  setAdmin(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAggregators(
    tokenAddresses: string[],
    sources: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDexPriceInfo(
    _token: string,
    _baseToken: string,
    _lpToken: string,
    _active: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDirectPrice(
    _token: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setV1PriceOracle(
    _v1PriceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  v1PriceOracle(overrides?: CallOverrides): Promise<string>;

  wrapped(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    aggregators(arg0: string, overrides?: CallOverrides): Promise<string>;

    assetPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceFromChainlink(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromDex(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromOracle(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

    priceRecords(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        token: string;
        baseToken: string;
        lpToken: string;
        active: boolean;
      }
    >;

    setAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    setAggregators(
      tokenAddresses: string[],
      sources: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setDexPriceInfo(
      _token: string,
      _baseToken: string,
      _lpToken: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setDirectPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setV1PriceOracle(
      _v1PriceOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    v1PriceOracle(overrides?: CallOverrides): Promise<string>;

    wrapped(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AggregatorUpdated(address,address)"(
      tokenAddress?: null,
      source?: null
    ): AggregatorUpdatedEventFilter;
    AggregatorUpdated(
      tokenAddress?: null,
      source?: null
    ): AggregatorUpdatedEventFilter;

    "DirectPriceUpdated(address,uint256,uint256)"(
      token?: null,
      oldPrice?: null,
      newPrice?: null
    ): DirectPriceUpdatedEventFilter;
    DirectPriceUpdated(
      token?: null,
      oldPrice?: null,
      newPrice?: null
    ): DirectPriceUpdatedEventFilter;

    "NewAdmin(address,address)"(
      oldAdmin?: null,
      newAdmin?: null
    ): NewAdminEventFilter;
    NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;

    "PriceRecordUpdated(address,address,address,bool)"(
      token?: null,
      baseToken?: null,
      lpToken?: null,
      _active?: null
    ): PriceRecordUpdatedEventFilter;
    PriceRecordUpdated(
      token?: null,
      baseToken?: null,
      lpToken?: null,
      _active?: null
    ): PriceRecordUpdatedEventFilter;

    "V1PriceOracleUpdated(address,address)"(
      oldAddress?: null,
      newAddress?: null
    ): V1PriceOracleUpdatedEventFilter;
    V1PriceOracleUpdated(
      oldAddress?: null,
      newAddress?: null
    ): V1PriceOracleUpdatedEventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    aggregators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    assetPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceFromChainlink(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromDex(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromOracle(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    priceRecords(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAggregators(
      tokenAddresses: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDexPriceInfo(
      _token: string,
      _baseToken: string,
      _lpToken: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDirectPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setV1PriceOracle(
      _v1PriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    v1PriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    wrapped(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aggregators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetPrices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceFromChainlink(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceFromDex(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceFromOracle(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenPrice(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceRecords(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAggregators(
      tokenAddresses: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDexPriceInfo(
      _token: string,
      _baseToken: string,
      _lpToken: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDirectPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setV1PriceOracle(
      _v1PriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    v1PriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
