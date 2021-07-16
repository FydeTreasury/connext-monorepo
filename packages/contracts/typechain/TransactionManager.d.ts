/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TransactionManagerInterface extends ethers.utils.Interface {
  functions: {
    "MAX_TIMEOUT()": FunctionFragment;
    "MIN_TIMEOUT()": FunctionFragment;
    "addAssetId(address)": FunctionFragment;
    "addLiquidity(uint256,address,address)": FunctionFragment;
    "addRouter(address)": FunctionFragment;
    "approvedAssets(address)": FunctionFragment;
    "approvedRouters(address)": FunctionFragment;
    "cancel(tuple,uint256,bytes)": FunctionFragment;
    "chainId()": FunctionFragment;
    "fulfill(tuple,uint256,bytes,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "prepare(tuple,uint256,uint256,bytes,bytes,bytes)": FunctionFragment;
    "removeAssetId(address)": FunctionFragment;
    "removeLiquidity(uint256,address,address)": FunctionFragment;
    "removeRouter(address)": FunctionFragment;
    "renounce()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "routerBalances(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "variantTransactionData(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addAssetId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "addRouter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approvedAssets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedRouters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAssetId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRouter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "renounce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "routerBalances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "variantTransactionData",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addAssetId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedRouters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variantTransactionData",
    data: BytesLike
  ): Result;

  events: {
    "LiquidityAdded(address,address,uint256,address)": EventFragment;
    "LiquidityRemoved(address,address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransactionCancelled(address,address,bytes32,tuple,uint256,address)": EventFragment;
    "TransactionFulfilled(address,address,bytes32,tuple,uint256,bytes,bytes,address)": EventFragment;
    "TransactionPrepared(address,address,bytes32,tuple,address,bytes,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionPrepared"): EventFragment;
}

export class TransactionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TransactionManagerInterface;

  functions: {
    MAX_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedAssets(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    approvedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  MAX_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

  addAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidity(
    amount: BigNumberish,
    assetId: string,
    router: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedAssets(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  approvedRouters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  cancel(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  fulfill(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    callData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  prepare(
    invariantData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      callDataHash: BytesLike;
      transactionId: BytesLike;
    },
    amount: BigNumberish,
    expiry: BigNumberish,
    encryptedCallData: BytesLike,
    encodedBid: BytesLike,
    bidSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    assetId: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounce(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  routerBalances(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  variantTransactionData(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    MAX_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    addAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addRouter(router: string, overrides?: CallOverrides): Promise<void>;

    approvedAssets(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    approvedRouters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    removeAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeRouter(router: string, overrides?: CallOverrides): Promise<void>;

    renounce(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    LiquidityAdded(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      caller?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { router: string; assetId: string; amount: BigNumber; caller: string }
    >;

    LiquidityRemoved(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      recipient?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { router: string; assetId: string; amount: BigNumber; recipient: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TransactionCancelled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      relayerFee?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        caller: string;
      }
    >;

    TransactionFulfilled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      relayerFee?: null,
      signature?: null,
      callData?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        signature: string;
        callData: string;
        caller: string;
      }
    >;

    TransactionPrepared(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      caller?: null,
      encryptedCallData?: null,
      encodedBid?: null,
      bidSignature?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        string,
        string,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        caller: string;
        encryptedCallData: string;
        encodedBid: string;
        bidSignature: string;
      }
    >;
  };

  estimateGas: {
    MAX_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedAssets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    approvedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approvedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
