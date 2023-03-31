/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RoutersFacet,
  RoutersFacetInterface,
} from "../../../../../contracts/core/connext/facets/RoutersFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_feeOnTransferNotSupported",
    type: "error",
  },
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
    name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
    name: "RoutersFacet__acceptProposedRouterOwner_badCaller",
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
    name: "RoutersFacet__addLiquidityForRouter_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_capReached",
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
    name: "RoutersFacet__approveRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__initializeRouter_configNotEmpty",
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
    name: "RoutersFacet__setRouterOwner_noChange",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouter_routerEmpty",
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
    ],
    name: "RouterInitialized",
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
        name: "_router",
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
    name: "approveRouter",
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "initializeRouter",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposed",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
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
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouter",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fd3806100206000396000f3fe60806040526004361061014b5760003560e01c806382904716116100b6578063da3a892f1161006f578063da3a892f14610416578063e9160f3e14610436578063f259cd2714610475578063f72c504814610495578063fd5bd5fe146104b5578063ffaf3f1a146104d557600080fd5b806382904716146103275780638770e68214610347578063911b8ee2146103855780639bf6d875146103a5578063b214c901146103ba578063c6bf691d146103da57600080fd5b80632d3f9ef6116101085780632d3f9ef6146102585780633b688da61461026b57806341258b5c146102bf5780634b72c5da146102df57806354064594146102f4578063582c78d21461030757600080fd5b806304376ff4146101505780630951d6d81461017257806309935b8f1461019657806312d57170146101b65780631407093b146101ef57806322a3c00714610238575b600080fd5b34801561015c57600080fd5b5061017061016b366004611c8f565b6104f5565b005b34801561017e57600080fd5b506001545b6040519081526020015b60405180910390f35b3480156101a257600080fd5b506101706101b1366004611c8f565b6105f2565b3480156101c257600080fd5b506101836101d1366004611c8f565b6001600160a01b031660009081526015602052604090206003015490565b3480156101fb57600080fd5b5061022861020a366004611c8f565b6001600160a01b031660009081526015602052604090205460ff1690565b604051901515815260200161018d565b34801561024457600080fd5b50610170610253366004611cb3565b610752565b610170610266366004611cec565b6108d1565b34801561027757600080fd5b506102a7610286366004611c8f565b6001600160a01b039081166000908152601560205260409020600201541690565b6040516001600160a01b03909116815260200161018d565b3480156102cb57600080fd5b506101836102da366004611cb3565b61093a565b3480156102eb57600080fd5b50612710610183565b610170610302366004611d2e565b610967565b34801561031357600080fd5b50610170610322366004611d53565b6109cf565b34801561033357600080fd5b50610170610342366004611d53565b610ace565b34801561035357600080fd5b50610228610362366004611c8f565b6001600160a01b0316600090815260156020526040902054610100900460ff1690565b34801561039157600080fd5b506101706103a0366004611c8f565b610b99565b3480156103b157600080fd5b50600c54610183565b3480156103c657600080fd5b506101706103d5366004611cb3565b610d0e565b3480156103e657600080fd5b506102a76103f5366004611c8f565b6001600160a01b039081166000908152601560205260409020600101541690565b34801561042257600080fd5b50610170610431366004611c8f565b610e42565b34801561044257600080fd5b506102a7610451366004611c8f565b6001600160a01b039081166000908152601560205260409020546201000090041690565b34801561048157600080fd5b50610170610490366004611c8f565b610fc5565b3480156104a157600080fd5b506101706104b0366004611ddc565b6110e2565b3480156104c157600080fd5b506101706104d0366004611e12565b611142565b3480156104e157600080fd5b506101706104f0366004611cb3565b61120c565b336104fe61127f565b6001600160a01b031614158015610539575060033360009081526014602052604090205460ff16600381111561053657610536611e64565b14155b1561055757604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b038116600090815260156020526040902054610100900460ff1661059557604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b038116600081815260156020908152604091829020805461ff0019169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad910160405180910390a150565b6001600160a01b03808216600090815260156020908152604091829020825160c081018452815460ff8082161515835261010082041615159382019390935262010000909204841692820192909252600182015483166060820152600282015490921660808301526003015460a0820181905262093a80906106749042611e90565b11610692576040516376b2ad0760e01b815260040160405180910390fd5b60808101516000906001600160a01b0316156106b25781608001516106b8565b81604001515b9050336001600160a01b038216146106e357604051633253a7bd60e01b815260040160405180910390fd5b6106f683836080015184604001516112ad565b60808201516001600160a01b031615610733576001600160a01b038316600090815260156020526040902060020180546001600160a01b03191690555b50506001600160a01b0316600090815260156020526040812060030155565b6001600160a01b038083166000908152601560205260409020548391620100009091041633146107955760405163407c584960e01b815260040160405180910390fd5b6001600160a01b03808416600090815260156020908152604091829020825160c081018452815460ff808216151583526101008204161515938201939093526201000090920484169282018390526001810154841660608301526002810154841660808301526003015460a0820152918416900361082657604051630e49614b60e31b815260040160405180910390fd5b826001600160a01b031681608001516001600160a01b03160361085c57604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b038481166000818152601560205260408082206002810180546001600160a01b031916898716908117909155426003909201919091556080860151915190949190911692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a450505050565b601654600119016108f557604051637ce54e2d60e11b815260040160405180910390fd5b6002601655601a54600160a01b900460ff161561092557604051633ee5b89360e01b815260040160405180910390fd5b610930838383611348565b5050600160165550565b6001600160a01b038083166000908152600a60209081526040808320938516835292905220545b92915050565b6016546001190161098b57604051637ce54e2d60e11b815260040160405180910390fd5b6002601655601a54600160a01b900460ff16156109bb57604051633ee5b89360e01b815260040160405180910390fd5b6109c6828233611348565b50506001601655565b336109d861127f565b6001600160a01b031614158015610a13575060033360009081526014602052604090205460ff166003811115610a1057610a10611e64565b14155b15610a3157604051637b32c26b60e01b815260040160405180910390fd5b6127106064610a4182605f611ea3565b610a4b9190611eba565b821015610a6b5760405163b74bfc8360e01b815260040160405180910390fd5b80821115610a8c57604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae91015b60405180910390a15050565b33610ad761127f565b6001600160a01b031614158015610b12575060033360009081526014602052604090205460ff166003811115610b0f57610b0f611e64565b14155b15610b3057604051637b32c26b60e01b815260040160405180910390fd5b801580610b3e5750600c5481145b15610b5c57604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1600c55565b33610ba261127f565b6001600160a01b031614158015610bdd575060013360009081526014602052604090205460ff166003811115610bda57610bda611e64565b14155b15610bfb576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038116610c225760405163085dd61360e11b815260040160405180910390fd5b6001600160a01b03808216600090815260156020908152604091829020825160c081018452815460ff808216151580845261010083049091161515948301949094526201000090048516938101939093526001810154841660608401526002810154909316608083015260039092015460a082015290610cb557604051632b31895f60e21b815260040160405180910390fd5b6001600160a01b038216600081815260156020908152604091829020805461ffff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a25050565b33600090815260156020908152604091829020825160c081018452815460ff80821615158352610100820416151593820193909352620100009092046001600160a01b0390811693830184905260018201548116606084015260028201541660808301526003015460a082015290151580610d95575060608101516001600160a01b031615155b80610dac575060808101516001600160a01b031615155b80610dbb575060008160a00151115b15610dd957604051630efdad3160e11b815260040160405180910390fd5b6001600160a01b038316610deb573392505b610df7338460006112ad565b6001600160a01b03821615610e1257610e1233836000611539565b60405133907f2622745e83f97f2d871ef785497c1eeba6f9bb94c7dd486cf28228e814d929e490600090a2505050565b33610e4b61127f565b6001600160a01b031614158015610e86575060033360009081526014602052604090205460ff166003811115610e8357610e83611e64565b14155b15610ea457604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b03808216600090815260156020908152604091829020825160c081018452815460ff808216158015808552610100840490921615159584019590955262010000909104861694820194909452600182015485166060820152600282015490941660808501526003015460a084015290610f295750610f276115cd565b155b15610f47576040516375befccb60e01b815260040160405180910390fd5b806020015115610f6a5760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b038216600081815260156020908152604091829020805461ff001916610100179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c9101610ac2565b33610fce61127f565b6001600160a01b031614158015611009575060013360009081526014602052604090205460ff16600381111561100657611006611e64565b14155b15611027576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b03811661104e5760405163330ef51f60e01b815260040160405180910390fd5b6001600160a01b03811660009081526015602052604090205460ff16156110885760405163916e73bd60e01b815260040160405180910390fd5b6001600160a01b038116600081815260156020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a250565b6016546001190161110657604051637ce54e2d60e11b815260040160405180910390fd5b6002601655601a54600160a01b900460ff161561113657604051633ee5b89360e01b815260040160405180910390fd5b610930828483336115f4565b6016546001190161116657604051637ce54e2d60e11b815260040160405180910390fd5b6002601655601a54600160a01b900460ff161561119657604051633ee5b89360e01b815260040160405180910390fd5b6001600160a01b038082166000908152601560205260408120546201000090049091169081156111c657816111c8565b825b9050336001600160a01b038216146111f35760405163f3dc2d1960e01b815260040160405180910390fd5b6111ff858786866115f4565b5050600160165550505050565b6001600160a01b0380831660009081526015602052604090205483916201000090910416331461124f5760405163407c584960e01b815260040160405180910390fd5b6001600160a01b0380841660009081526015602052604090206001015461127a918591859116611539565b505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b816001600160a01b0316816001600160a01b0316036112df576040516309a3ec2160e11b815260040160405180910390fd5b6001600160a01b03838116600081815260156020526040808220805462010000600160b01b031916620100008887169081029190911790915590519093851692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a4505050565b6001600160a01b03811661136f576040516339773cbf60e21b815260040160405180910390fd5b8260000361139057604051632a24141960e01b815260040160405180910390fd5b6001600160a01b0382166000908152600660209081526040918290208251808401909352805463ffffffff16808452600190910154918301919091521580156113db57506020810151155b156113fb5760045463ffffffff1681526001600160a01b03831660208201525b600061140f826020015183600001516117a3565b600081815260076020526040902060020154909150600160a01b900460ff1661144b5760405163a13f958f60e01b815260040160405180910390fd5b6114536115cd565b15801561147957506001600160a01b03831660009081526015602052604090205460ff16155b1561149757604051631464c65f60e31b815260040160405180910390fd5b6114a184866117e5565b6001600160a01b038084166000908152600a60209081526040808320938816835292905290812080548792906114d8908490611edc565b9091555050604080516001600160a01b03868116825260208201849052918101879052336060820152908416907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a25050505050565b816001600160a01b0316816001600160a01b03160361156b57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b0383811660008181526015602052604080822060010180546001600160a01b03191687861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a4505050565b6000806115d861127f565b6001600160a01b031614806115ef575060125460ff165b905090565b6001600160a01b0381811660009081526015602052604090206001015416801561161e5780611620565b825b90506001600160a01b0381166116495760405163516101e760e11b815260040160405180910390fd5b8460000361166a5760405163606ab7a160e11b815260040160405180910390fd5b6004548451602086015163ffffffff8281169316929092149160009161169091906117a3565b90506000826116b6576000828152600760205260409020546001600160a01b03166116bc565b60208701515b6001600160a01b038087166000908152600a60209081526040808320938516835292905220549091508881101561170657604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038087166000908152600a60209081526040808320938616835292905220898203905561173b82868b611936565b604080516001600160a01b0387811682528481166020830152918101859052606081018b9052336080820152908716907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a2505050505050505050565b600082826040516020016117c792919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b806000036117f1575050565b6001600160a01b03821661181857604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a0823190602401602060405180830381865afa158015611861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118859190611eef565b905061189c6001600160a01b038316333086611975565b6040516370a0823160e01b8152306004820152839082906001600160a01b038516906370a0823190602401602060405180830381865afa1580156118e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119089190611eef565b6119129190611e90565b1461193057604051630e40773560e21b815260040160405180910390fd5b50505050565b8060000361194357505050565b6001600160a01b03831661196a57604051633a48ca7b60e11b815260040160405180910390fd5b61127a8383836119e0565b6040516001600160a01b03808516602483015283166044820152606481018290526119309085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a10565b6040516001600160a01b03831660248201526044810182905261127a90849063a9059cbb60e01b906064016119a9565b6000611a65826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ae79092919063ffffffff16565b80519091501561127a5780806020019051810190611a839190611f08565b61127a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060611af68484600085611afe565b949350505050565b606082471015611b5f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611ade565b600080866001600160a01b03168587604051611b7b9190611f4e565b60006040518083038185875af1925050503d8060008114611bb8576040519150601f19603f3d011682016040523d82523d6000602084013e611bbd565b606091505b5091509150611bce87838387611bd9565b979650505050505050565b60608315611c48578251600003611c41576001600160a01b0385163b611c415760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611ade565b5081611af6565b611af68383815115611c5d5781518083602001fd5b8060405162461bcd60e51b8152600401611ade9190611f6a565b6001600160a01b0381168114611c8c57600080fd5b50565b600060208284031215611ca157600080fd5b8135611cac81611c77565b9392505050565b60008060408385031215611cc657600080fd5b8235611cd181611c77565b91506020830135611ce181611c77565b809150509250929050565b600080600060608486031215611d0157600080fd5b833592506020840135611d1381611c77565b91506040840135611d2381611c77565b809150509250925092565b60008060408385031215611d4157600080fd5b823591506020830135611ce181611c77565b600060208284031215611d6557600080fd5b5035919050565b600060408284031215611d7e57600080fd5b6040516040810181811067ffffffffffffffff82111715611daf57634e487b7160e01b600052604160045260246000fd5b604052905080823563ffffffff81168114611dc957600080fd5b8152602092830135920191909152919050565b600080600060808486031215611df157600080fd5b611dfb8585611d6c565b9250604084013591506060840135611d2381611c77565b60008060008060a08587031215611e2857600080fd5b611e328686611d6c565b9350604085013592506060850135611e4981611c77565b91506080850135611e5981611c77565b939692955090935050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561096157610961611e7a565b808202811582820484141761096157610961611e7a565b600082611ed757634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561096157610961611e7a565b600060208284031215611f0157600080fd5b5051919050565b600060208284031215611f1a57600080fd5b81518015158114611cac57600080fd5b60005b83811015611f45578181015183820152602001611f2d565b50506000910152565b60008251611f60818460208701611f2a565b9190910192915050565b6020815260008251806020840152611f89816040850160208701611f2a565b601f01601f1916919091016040019291505056fea264697066735822122039b6810f2b6da08853a1b8db18ef3769534dd0f6844dc8c9253290a1a4b9c53b64736f6c63430008110033";

type RoutersFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoutersFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoutersFacet__factory extends ContractFactory {
  constructor(...args: RoutersFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoutersFacet> {
    return super.deploy(overrides || {}) as Promise<RoutersFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
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
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoutersFacet {
    return new Contract(address, _abi, signerOrProvider) as RoutersFacet;
  }
}
