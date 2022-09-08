/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { RoutersFacet, RoutersFacetInterface } from "../../../../../contracts/core/connext/facets/RoutersFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__transferAssetToContract_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__acceptProposedRouterOwner_notElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_badAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyProposedRouterOwner_notProposedRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyProposedRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_notNewOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidityFor_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_recipientEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setMaxRoutersPerTransfer_invalidMaxRoutersPerTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityFeeNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LiquidityFeeNumeratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRoutersPerTransfer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MaxRoutersPerTransferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterApprovedForPortal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "RouterOwnerAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevProposed",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newProposed",
        type: "address",
      },
    ],
    name: "RouterOwnerProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevRecipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RouterRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterUnapprovedForPortal",
    type: "event",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_NUMERATOR",
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
        name: "router",
        type: "address",
      },
    ],
    name: "acceptProposedRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    name: "addRouterLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "addRouterLiquidityFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwnerTimestamp",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApproval",
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
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApprovalForPortal",
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
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterRecipient",
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
    name: "maxRoutersPerTransfer",
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
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "proposed",
        type: "address",
      },
    ],
    name: "proposeRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "removeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "removeRouterLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "removeRouterLiquidityFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "routerBalances",
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
        internalType: "uint256",
        name: "_numerator",
        type: "uint256",
      },
    ],
    name: "setLiquidityFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxRouters",
        type: "uint256",
      },
    ],
    name: "setMaxRoutersPerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setRouterRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setupRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d78806100206000396000f3fe6080604052600436106101405760003560e01c806354064594116100b65780639bf6d8751161006f5780639bf6d875146103f4578063c6bf691d14610409578063da3a892f14610442578063e9160f3e14610462578063eb492f4414610482578063ffaf3f1a146104a257600080fd5b80635406459414610328578063582c78d21461033b5780636ae0b1541461035b578063829047161461037b5780638770e6821461039b578063899962a1146103d457600080fd5b8063197c139d11610108578063197c139d1461022a57806322a3c0071461024a5780632d3f9ef61461026a5780633b688da61461027d57806341258b5c146102cd5780634b72c5da1461031357600080fd5b806304376ff4146101455780630951d6d81461016757806309935b8f1461018b57806312d57170146101ab5780631407093b146101e1575b600080fd5b34801561015157600080fd5b50610165610160366004611a76565b6104c2565b005b34801561017357600080fd5b506001545b6040519081526020015b60405180910390f35b34801561019757600080fd5b506101656101a6366004611a76565b610588565b3480156101b757600080fd5b506101786101c6366004611a76565b6001600160a01b031660009081526021602052604090205490565b3480156101ed57600080fd5b5061021a6101fc366004611a76565b6001600160a01b03166000908152601c602052604090205460ff1690565b6040519015158152602001610182565b34801561023657600080fd5b50610165610245366004611a93565b610742565b34801561025657600080fd5b50610165610265366004611ae6565b6107e0565b610165610278366004611b1f565b610925565b34801561028957600080fd5b506102b5610298366004611a76565b6001600160a01b0390811660009081526020805260409020541690565b6040516001600160a01b039091168152602001610182565b3480156102d957600080fd5b506101786102e8366004611ae6565b6001600160a01b039182166000908152600d6020908152604080832093909416825291909152205490565b34801561031f57600080fd5b50612710610178565b610165610336366004611b61565b610987565b34801561034757600080fd5b50610165610356366004611b86565b6109e8565b34801561036757600080fd5b50610165610376366004611a76565b610ab4565b34801561038757600080fd5b50610165610396366004611b86565b610ce1565b3480156103a757600080fd5b5061021a6103b6366004611a76565b6001600160a01b03166000908152601d602052604090205460ff1690565b3480156103e057600080fd5b506101656103ef366004611b1f565b610d7a565b34801561040057600080fd5b50601154610178565b34801561041557600080fd5b506102b5610424366004611a76565b6001600160a01b039081166000908152601e60205260409020541690565b34801561044e57600080fd5b5061016561045d366004611a76565b610dd3565b34801561046e57600080fd5b506102b561047d366004611a76565b610ee2565b34801561048e57600080fd5b5061016561049d366004611b9f565b610f14565b3480156104ae57600080fd5b506101656104bd366004611ae6565b6110cf565b336104cb6111d1565b6001600160a01b0316146104f2576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601d602052604090205460ff1661052b57604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601d6020908152604091829020805460ff19169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad91015b60405180910390a150565b6001600160a01b03808216600090815260208052604090205482911680610610576001600160a01b038083166000908152601f602052604090205416801580156105da5750336001600160a01b038416145b806105ed57506001600160a01b03811633145b61060a5760405163f72e7a4760e01b815260040160405180910390fd5b50610639565b336001600160a01b0382161461063957604051630c2baa6160e41b815260040160405180910390fd5b600061064484610ee2565b6001600160a01b03851660009081526021602052604090205490915062093a809061066f9042611be5565b1161068d576040516376b2ad0760e01b815260040160405180910390fd5b6001600160a01b0380851660009081526020808052604080832054601f90925290912080546001600160a01b0319169190921690811790915580156106f2576001600160a01b0385166000908152602080526040902080546001600160a01b03191690555b6001600160a01b038086166000818152602160205260408082208290555184841693861692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a45050505050565b6022546001190161076657604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff161561078f57604051633ee5b89360e01b815260040160405180910390fd5b61079881610ee2565b6001600160a01b0316336001600160a01b0316146107c95760405163f3dc2d1960e01b815260040160405180910390fd5b6107d5848484846111ff565b505060016022555050565b6001600160a01b038083166000908152601f6020526040902054839116801580156108135750336001600160a01b038316145b8061082657506001600160a01b03811633145b6108435760405163407c584960e01b815260040160405180910390fd5b826001600160a01b031661085685610ee2565b6001600160a01b03160361087d57604051630e49614b60e31b815260040160405180910390fd5b6001600160a01b038085166000908152602080526040902054811690841681036108ba57604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b0385811660008181526020808052604080832080546001600160a01b0319168a87169081179091556021909252808320429055519093851692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a45050505050565b6022546001190161094957604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff161561097257604051633ee5b89360e01b815260040160405180910390fd5b61097d83838361134d565b5050600160225550565b602254600119016109ab57604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff16156109d457604051633ee5b89360e01b815260040160405180910390fd5b6109df82823361134d565b50506001602255565b336109f16111d1565b6001600160a01b031614610a18576040516314e74a2560e21b815260040160405180910390fd5b6127106064610a2882605f611bfc565b610a329190611c1b565b821015610a525760405163b74bfc8360e01b815260040160405180910390fd5b80821115610a7357604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae910160405180910390a15050565b33610abd6111d1565b6001600160a01b031614610ae4576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b038116610b0b5760405163128df0bf60e21b815260040160405180910390fd5b6001600160a01b0381166000908152601c602052604090205460ff16610b4457604051633fb36f5d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601c6020908152604091829020805460ff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a26001600160a01b038082166000908152601f6020526040902054168015610c1b576040516000906001600160a01b0383811691908516907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908490a46001600160a01b0382166000908152601f6020526040902080546001600160a01b03191690555b6001600160a01b038083166000908152601e6020526040902054168015610c9e576040516000906001600160a01b0383811691908616907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908490a46001600160a01b0383166000908152601e6020526040902080546001600160a01b03191690555b50506001600160a01b031660009081526020808052604080832080546001600160a01b031916905560218252808320839055601d9091529020805460ff19169055565b33610cea6111d1565b6001600160a01b031614610d11576040516314e74a2560e21b815260040160405180910390fd5b801580610d1f575060115481145b15610d3d57604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1601155565b60225460011901610d9e57604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff1615610dc757604051633ee5b89360e01b815260040160405180910390fd5b61097d838383336111ff565b33610ddc6111d1565b6001600160a01b031614610e03576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601c602052604090205460ff16158015610e315750610e2f61153e565b155b15610e4f576040516375befccb60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601d602052604090205460ff1615610e895760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0381166000818152601d6020908152604091829020805460ff19166001179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c910161057d565b6001600160a01b038082166000908152601f60205260408120549091168015610f0b5780610f0d565b825b9392505050565b33610f1d6111d1565b6001600160a01b031614610f44576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b038316610f6b5760405163e0239aa960e01b815260040160405180910390fd5b6001600160a01b0383166000908152601c602052604090205460ff1615610fa55760405163201b2fd160e11b815260040160405180910390fd5b6001600160a01b0383166000818152601c6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a26001600160a01b03821615611063576001600160a01b038381166000818152601f602052604080822080546001600160a01b0319169487169485179055519091907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908390a45b6001600160a01b038116156110ca576001600160a01b038381166000818152601e602052604080822080546001600160a01b0319169486169485179055519091907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908390a45b505050565b6001600160a01b038083166000908152601f6020526040902054839116801580156111025750336001600160a01b038316145b8061111557506001600160a01b03811633145b6111325760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038085166000908152601e60205260409020548116908416810361117057604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038581166000818152601e602052604080822080546001600160a01b03191689861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a45050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b038181166000908152601e60205260409020541680156112265780611228565b825b90506001600160a01b0381166112515760405163516101e760e11b815260040160405180910390fd5b846000036112725760405163606ab7a160e11b815260040160405180910390fd5b6001600160a01b038083166000908152600d6020908152604080832093881683529290522054858110156112b957604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038084166000908152600d6020908152604080832093891683529290522086820390556112ee858388611565565b604080516001600160a01b0384811682528781166020830152918101889052336060820152908416907f63cea637caf2479bad0e90a93268f6d8a1ad69961b1ee8112586091e09ae0ec3906080015b60405180910390a2505050505050565b6001600160a01b038116611374576040516339773cbf60e21b815260040160405180910390fd5b8260000361139557604051632a24141960e01b815260040160405180910390fd5b6006546040516378a9bb4360e11b81526001600160a01b038481166004830152600092839291169063f1537686906024016040805180830381865afa1580156113e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114069190611c3d565b91509150600061141682846115a4565b905061142061153e565b15801561144657506001600160a01b0384166000908152601c602052604090205460ff16155b1561146457604051631464c65f60e31b815260040160405180910390fd5b61146c6115e6565b158015611488575060008181526008602052604090205460ff16155b156114a657604051633b6cdacf60e21b815260040160405180910390fd5b6114b0858761160b565b6001600160a01b038085166000908152600d60209081526040808320938916835292905290812080548892906114e7908490611c74565b9091555050604080516001600160a01b03878116825260208201849052918101889052336060820152908516907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800161133d565b6000806115496111d1565b6001600160a01b03161480611560575060185460ff165b905090565b8060000361157257505050565b6001600160a01b03831661159957604051633a48ca7b60e11b815260040160405180910390fd5b6110ca83838361164c565b600082826040516020016115c892919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6000806115f16111d1565b6001600160a01b03161480611560575050601a5460ff1690565b80600003611617575050565b6001600160a01b03821661163e57604051632a38b13360e01b815260040160405180910390fd5b61164882826116af565b5050565b6040516001600160a01b0383166024820152604481018290526110ca90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526117c8565b806000036116bb575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015611702573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117269190611c8c565b90506117348333308561189f565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa15801561177c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a09190611c8c565b6117aa9190611be5565b146110ca57604051631a39afd960e11b815260040160405180910390fd5b600061181d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118dd9092919063ffffffff16565b8051909150156110ca578080602001905181019061183b9190611ca5565b6110ca5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6040516001600160a01b03808516602483015283166044820152606481018290526118d79085906323b872dd60e01b90608401611678565b50505050565b60606118ec84846000856118f4565b949350505050565b6060824710156119555760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611896565b6001600160a01b0385163b6119ac5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611896565b600080866001600160a01b031685876040516119c89190611cf3565b60006040518083038185875af1925050503d8060008114611a05576040519150601f19603f3d011682016040523d82523d6000602084013e611a0a565b606091505b5091509150611a1a828286611a25565b979650505050505050565b60608315611a34575081610f0d565b825115611a445782518084602001fd5b8160405162461bcd60e51b81526004016118969190611d0f565b6001600160a01b0381168114611a7357600080fd5b50565b600060208284031215611a8857600080fd5b8135610f0d81611a5e565b60008060008060808587031215611aa957600080fd5b843593506020850135611abb81611a5e565b92506040850135611acb81611a5e565b91506060850135611adb81611a5e565b939692955090935050565b60008060408385031215611af957600080fd5b8235611b0481611a5e565b91506020830135611b1481611a5e565b809150509250929050565b600080600060608486031215611b3457600080fd5b833592506020840135611b4681611a5e565b91506040840135611b5681611a5e565b809150509250925092565b60008060408385031215611b7457600080fd5b823591506020830135611b1481611a5e565b600060208284031215611b9857600080fd5b5035919050565b600080600060608486031215611bb457600080fd5b8335611bbf81611a5e565b92506020840135611b4681611a5e565b634e487b7160e01b600052601160045260246000fd5b600082821015611bf757611bf7611bcf565b500390565b6000816000190483118215151615611c1657611c16611bcf565b500290565b600082611c3857634e487b7160e01b600052601260045260246000fd5b500490565b60008060408385031215611c5057600080fd5b825163ffffffff81168114611c6457600080fd5b6020939093015192949293505050565b60008219821115611c8757611c87611bcf565b500190565b600060208284031215611c9e57600080fd5b5051919050565b600060208284031215611cb757600080fd5b81518015158114610f0d57600080fd5b60005b83811015611ce2578181015183820152602001611cca565b838111156118d75750506000910152565b60008251611d05818460208701611cc7565b9190910192915050565b6020815260008251806020840152611d2e816040850160208701611cc7565b601f01601f1916919091016040019291505056fea26469706673582212201159dd64984442231d199b4e51921e7a75ee6814aa3b4361f4700583a12134ff64736f6c634300080f0033";

type RoutersFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: RoutersFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class RoutersFacet__factory extends ContractFactory {
  constructor(...args: RoutersFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<RoutersFacet> {
    return super.deploy(overrides || {}) as Promise<RoutersFacet>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoutersFacet {
    return super.attach(address) as RoutersFacet;
  }
  override connect(signer: Signer): RoutersFacet__factory {
    return super.connect(signer) as RoutersFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoutersFacetInterface {
    return new utils.Interface(_abi) as RoutersFacetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RoutersFacet {
    return new Contract(address, _abi, signerOrProvider) as RoutersFacet;
  }
}
