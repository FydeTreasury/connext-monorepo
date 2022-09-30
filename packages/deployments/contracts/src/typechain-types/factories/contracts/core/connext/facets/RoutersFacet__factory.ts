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
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__mustGetLocalAsset_noLocalAssetFound",
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
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
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
  "0x608060405234801561001057600080fd5b50611ea8806100206000396000f3fe6080604052600436106101405760003560e01c806354064594116100b65780639bf6d8751161006f5780639bf6d875146103f5578063c6bf691d1461040a578063da3a892f14610443578063e9160f3e14610463578063eb492f4414610483578063ffaf3f1a146104a357600080fd5b80635406459414610329578063582c78d21461033c5780636ae0b1541461035c578063829047161461037c5780638770e6821461039c578063899962a1146103d557600080fd5b8063197c139d11610108578063197c139d1461022a57806322a3c0071461024a5780632d3f9ef61461026a5780633b688da61461027d57806341258b5c146102ce5780634b72c5da1461031457600080fd5b806304376ff4146101455780630951d6d81461016757806309935b8f1461018b57806312d57170146101ab5780631407093b146101e1575b600080fd5b34801561015157600080fd5b50610165610160366004611b90565b6104c3565b005b34801561017357600080fd5b506001545b6040519081526020015b60405180910390f35b34801561019757600080fd5b506101656101a6366004611b90565b610589565b3480156101b757600080fd5b506101786101c6366004611b90565b6001600160a01b03166000908152601f602052604090205490565b3480156101ed57600080fd5b5061021a6101fc366004611b90565b6001600160a01b03166000908152601a602052604090205460ff1690565b6040519015158152602001610182565b34801561023657600080fd5b50610165610245366004611bad565b610747565b34801561025657600080fd5b50610165610265366004611c00565b6107e5565b610165610278366004611c39565b61092d565b34801561028957600080fd5b506102b6610298366004611b90565b6001600160a01b039081166000908152601e60205260409020541690565b6040516001600160a01b039091168152602001610182565b3480156102da57600080fd5b506101786102e9366004611c00565b6001600160a01b039182166000908152600b6020908152604080832093909416825291909152205490565b34801561032057600080fd5b50612710610178565b610165610337366004611c7b565b61098f565b34801561034857600080fd5b50610165610357366004611ca0565b6109f0565b34801561036857600080fd5b50610165610377366004611b90565b610abc565b34801561038857600080fd5b50610165610397366004611ca0565b610d1d565b3480156103a857600080fd5b5061021a6103b7366004611b90565b6001600160a01b03166000908152601b602052604090205460ff1690565b3480156103e157600080fd5b506101656103f0366004611c39565b610db6565b34801561040157600080fd5b50600f54610178565b34801561041657600080fd5b506102b6610425366004611b90565b6001600160a01b039081166000908152601c60205260409020541690565b34801561044f57600080fd5b5061016561045e366004611b90565b610e0f565b34801561046f57600080fd5b506102b661047e366004611b90565b610f1e565b34801561048f57600080fd5b5061016561049e366004611cb9565b610f50565b3480156104af57600080fd5b506101656104be366004611c00565b61113d565b336104cc61123f565b6001600160a01b0316146104f3576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090205460ff1661052c57604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff19169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad91015b60405180910390a150565b6001600160a01b038082166000908152601e602052604090205482911680610612576001600160a01b038083166000908152601d602052604090205416801580156105dc5750336001600160a01b038416145b806105ef57506001600160a01b03811633145b61060c5760405163f72e7a4760e01b815260040160405180910390fd5b5061063b565b336001600160a01b0382161461063b57604051630c2baa6160e41b815260040160405180910390fd5b600061064684610f1e565b6001600160a01b0385166000908152601f602052604090205490915062093a80906106719042611cff565b1161068f576040516376b2ad0760e01b815260040160405180910390fd5b6001600160a01b038085166000908152601e6020908152604080832054601d90925290912080546001600160a01b0319169190921690811790915580156106f7576001600160a01b0385166000908152601e6020526040902080546001600160a01b03191690555b6001600160a01b038086166000818152601f60205260408082208290555184841693861692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a45050505050565b6020546001190161076b57604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff161561079457604051633ee5b89360e01b815260040160405180910390fd5b61079d81610f1e565b6001600160a01b0316336001600160a01b0316146107ce5760405163f3dc2d1960e01b815260040160405180910390fd5b6107da8484848461126d565b505060016020555050565b6001600160a01b038083166000908152601d6020526040902054839116801580156108185750336001600160a01b038316145b8061082b57506001600160a01b03811633145b6108485760405163407c584960e01b815260040160405180910390fd5b826001600160a01b031661085b85610f1e565b6001600160a01b03160361088257604051630e49614b60e31b815260040160405180910390fd5b6001600160a01b038085166000908152601e6020526040902054811690841681036108c057604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b038581166000818152601e6020908152604080832080546001600160a01b0319168a8716908117909155601f909252808320429055519093851692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a45050505050565b6020546001190161095157604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff161561097a57604051633ee5b89360e01b815260040160405180910390fd5b610985838383611452565b5050600160205550565b602054600119016109b357604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff16156109dc57604051633ee5b89360e01b815260040160405180910390fd5b6109e7828233611452565b50506001602055565b336109f961123f565b6001600160a01b031614610a20576040516314e74a2560e21b815260040160405180910390fd5b6127106064610a3082605f611d16565b610a3a9190611d35565b821015610a5a5760405163b74bfc8360e01b815260040160405180910390fd5b80821115610a7b57604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae910160405180910390a15050565b33610ac561123f565b6001600160a01b031614158015610b00575060033360009081526019602052604090205460ff166003811115610afd57610afd611d57565b14155b15610b1e57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b038116610b455760405163128df0bf60e21b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff16610b7e57604051633fb36f5d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601a6020908152604091829020805460ff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a26001600160a01b038082166000908152601d6020526040902054168015610c55576040516000906001600160a01b0383811691908516907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908490a46001600160a01b0382166000908152601d6020526040902080546001600160a01b03191690555b6001600160a01b038083166000908152601c6020526040902054168015610cd8576040516000906001600160a01b0383811691908616907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908490a46001600160a01b0383166000908152601c6020526040902080546001600160a01b03191690555b50506001600160a01b03166000908152601e6020908152604080832080546001600160a01b0319169055601f8252808320839055601b9091529020805460ff19169055565b33610d2661123f565b6001600160a01b031614610d4d576040516314e74a2560e21b815260040160405180910390fd5b801580610d5b5750600f5481145b15610d7957604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1600f55565b60205460011901610dda57604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff1615610e0357604051633ee5b89360e01b815260040160405180910390fd5b6109858383833361126d565b33610e1861123f565b6001600160a01b031614610e3f576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff16158015610e6d5750610e6b611658565b155b15610e8b576040516375befccb60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090205460ff1615610ec55760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff19166001179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c910161057e565b6001600160a01b038082166000908152601d60205260408120549091168015610f475780610f49565b825b9392505050565b33610f5961123f565b6001600160a01b031614158015610f94575060013360009081526019602052604090205460ff166003811115610f9157610f91611d57565b14155b15610fb2576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038316610fd95760405163e0239aa960e01b815260040160405180910390fd5b6001600160a01b0383166000908152601a602052604090205460ff16156110135760405163201b2fd160e11b815260040160405180910390fd5b6001600160a01b0383166000818152601a6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a26001600160a01b038216156110d1576001600160a01b038381166000818152601d602052604080822080546001600160a01b0319169487169485179055519091907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908390a45b6001600160a01b03811615611138576001600160a01b038381166000818152601c602052604080822080546001600160a01b0319169486169485179055519091907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908390a45b505050565b6001600160a01b038083166000908152601d6020526040902054839116801580156111705750336001600160a01b038316145b8061118357506001600160a01b03811633145b6111a05760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038085166000908152601c6020526040902054811690841681036111de57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038581166000818152601c602052604080822080546001600160a01b03191689861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a45050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b038181166000908152601c60205260409020541680156112945780611296565b825b90506001600160a01b0381166112bf5760405163516101e760e11b815260040160405180910390fd5b846000036112e05760405163606ab7a160e11b815260040160405180910390fd5b600480546040516378a9bb4360e11b81526001600160a01b038781169382019390935260009283926401000000009004169063f1537686906024016040805180830381865afa158015611337573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135b9190611d6d565b91509150600061136b828461167f565b6001600160a01b038087166000908152600b60209081526040808320938c1683529290522054909150888110156113b557604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038087166000908152600b60209081526040808320938c1683529290522089820390556113ea88868b6116c1565b604080516001600160a01b0387811682528a81166020830152918101849052606081018b9052336080820152908716907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a2505050505050505050565b6001600160a01b038116611479576040516339773cbf60e21b815260040160405180910390fd5b8260000361149a57604051632a24141960e01b815260040160405180910390fd5b600480546040516378a9bb4360e11b81526001600160a01b038581169382019390935260009283926401000000009004169063f1537686906024016040805180830381865afa1580156114f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115159190611d6d565b915091506000611525828461167f565b905061152f611658565b15801561155557506001600160a01b0384166000908152601a602052604090205460ff16155b1561157357604051631464c65f60e31b815260040160405180910390fd5b61157b611700565b158015611597575060008181526006602052604090205460ff16155b156115b557604051633b6cdacf60e21b815260040160405180910390fd5b6115bf8587611725565b6001600160a01b038085166000908152600b60209081526040808320938916835292905290812080548892906115f6908490611da4565b9091555050604080516001600160a01b03878116825260208201849052918101889052336060820152908516907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a2505050505050565b60008061166361123f565b6001600160a01b0316148061167a575060155460ff165b905090565b600082826040516020016116a392919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b806000036116ce57505050565b6001600160a01b0383166116f557604051633a48ca7b60e11b815260040160405180910390fd5b611138838383611766565b60008061170b61123f565b6001600160a01b0316148061167a57505060175460ff1690565b80600003611731575050565b6001600160a01b03821661175857604051632a38b13360e01b815260040160405180910390fd5b61176282826117c9565b5050565b6040516001600160a01b03831660248201526044810182905261113890849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526118e2565b806000036117d5575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa15801561181c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118409190611dbc565b905061184e833330856119b9565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015611896573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ba9190611dbc565b6118c49190611cff565b1461113857604051631a39afd960e11b815260040160405180910390fd5b6000611937826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119f79092919063ffffffff16565b80519091501561113857808060200190518101906119559190611dd5565b6111385760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6040516001600160a01b03808516602483015283166044820152606481018290526119f19085906323b872dd60e01b90608401611792565b50505050565b6060611a068484600085611a0e565b949350505050565b606082471015611a6f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016119b0565b6001600160a01b0385163b611ac65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016119b0565b600080866001600160a01b03168587604051611ae29190611e23565b60006040518083038185875af1925050503d8060008114611b1f576040519150601f19603f3d011682016040523d82523d6000602084013e611b24565b606091505b5091509150611b34828286611b3f565b979650505050505050565b60608315611b4e575081610f49565b825115611b5e5782518084602001fd5b8160405162461bcd60e51b81526004016119b09190611e3f565b6001600160a01b0381168114611b8d57600080fd5b50565b600060208284031215611ba257600080fd5b8135610f4981611b78565b60008060008060808587031215611bc357600080fd5b843593506020850135611bd581611b78565b92506040850135611be581611b78565b91506060850135611bf581611b78565b939692955090935050565b60008060408385031215611c1357600080fd5b8235611c1e81611b78565b91506020830135611c2e81611b78565b809150509250929050565b600080600060608486031215611c4e57600080fd5b833592506020840135611c6081611b78565b91506040840135611c7081611b78565b809150509250925092565b60008060408385031215611c8e57600080fd5b823591506020830135611c2e81611b78565b600060208284031215611cb257600080fd5b5035919050565b600080600060608486031215611cce57600080fd5b8335611cd981611b78565b92506020840135611c6081611b78565b634e487b7160e01b600052601160045260246000fd5b600082821015611d1157611d11611ce9565b500390565b6000816000190483118215151615611d3057611d30611ce9565b500290565b600082611d5257634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008060408385031215611d8057600080fd5b825163ffffffff81168114611d9457600080fd5b6020939093015192949293505050565b60008219821115611db757611db7611ce9565b500190565b600060208284031215611dce57600080fd5b5051919050565b600060208284031215611de757600080fd5b81518015158114610f4957600080fd5b60005b83811015611e12578181015183820152602001611dfa565b838111156119f15750506000910152565b60008251611e35818460208701611df7565b9190910192915050565b6020815260008251806020840152611e5e816040850160208701611df7565b601f01601f1916919091016040019291505056fea26469706673582212204ab19f3810ceb9edd4e53026d35ee9c626864cdeb29ae93479f550b27f94f1f264736f6c634300080f0033";

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
