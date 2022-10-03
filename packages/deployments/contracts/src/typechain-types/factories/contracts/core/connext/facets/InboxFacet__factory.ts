/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  InboxFacet,
  InboxFacetInterface,
} from "../../../../../contracts/core/connext/facets/InboxFacet";

const _abi = [
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
    name: "InboxFacet__handle_notTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyRemoteRouter_notRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyReplica_notReplica",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_notConnext",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
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
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061143d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e366004611155565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff191661046f565b8c8484610484565b5050505050505050505050565b602854604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab9190611231565b92915050565b63ffffffff8216600090815260126020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610796565b95945050505050565b60006101ab61020d836107dd565b62ffffff191661080f565b600081600261022f815b62ffffff1984169061086f565b5061024562ffffff198516600060246001610948565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b031661127f565b90506000610283866109b8565b60ff16905061029b62ffffff19871660248484610948565b9695505050505050565b60006101ab8260036109cd565b600080806102c562ffffff198616610a2c565b905060006102d862ffffff198716610a4e565b905060006102f06102e98484610a70565b8484610ab2565b9050600061030362ffffff198816610ac1565b90508060000361038657306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a450935060009250610466915050565b61038f82610ad6565b6103f4576040516340c10f1960e01b8152306004820152602481018290526001600160a01b038316906340c10f1990604401600060405180830381600087803b1580156103db57600080fd5b505af11580156103ef573d6000803e3d6000fd5b505050505b306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4909450925050505b94509492505050565b60006101ab62ffffff19831660216020610ae3565b6000848152600c602052604081205460ff16908160038111156104a9576104a9611253565b141580156104c9575060028160038111156104c6576104c6611253565b14155b156104e757604051638f6bc06f60e01b815260040160405180910390fd5b60008160038111156104fb576104fb611253565b1461050757600361050a565b60015b6000868152600c60205260409020805460ff1916600183600381111561053257610532611253565b02179055506000858152600d602090815260408083208054825181850281018501909352808352919290919083018282801561059757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610579575b505050600089815260266020908152604080832054602590925282205494955090936105c69350909150611296565b825190915081158015906105db575080600114155b156105f95760405163d3bd901560e01b815260040160405180910390fd5b801561073f57600061060b82876112c4565b905060005b61061b60018461127f565b8110156106a357816000600e01600087848151811061063c5761063c6112d8565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546106969190611296565b9091555050600101610610565b5060006106b083886112ee565b6106ba9083611296565b905080600e6000876106cd60018861127f565b815181106106dd576106dd6112d8565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107379190611296565b909155505050505b856001600160a01b03168763ffffffff16897f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a086893360405161078493929190611302565b60405180910390a45050505050505050565b6000806107a38385611296565b90506040518111156107b3575060005b806000036107c85762ffffff199150506101d4565b5050606092831b9190911790911b1760181b90565b60006107e882610c3f565b15610805576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b600061081a82610c62565b61086b5760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064015b60405180910390fd5b5090565b600061087b8383610c9f565b61094157600061089a61088e8560d81c90565b64ffffffffff16610cc2565b91505060006108af8464ffffffffff16610cc2565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b81526004016108629190611366565b5090919050565b60008061095e8660781c6001600160601b031690565b6001600160601b0316905061097286610d70565b8461097d8784611296565b6109879190611296565b111561099a5762ffffff19915050610245565b6109a48582611296565b905061029b8364ffffffffff168286610796565b60006101ab62ffffff19831660246001610da9565b60008160038111156109e1576109e1611253565b60ff166109ed84610dd9565b60ff161480156101d45750816003811115610a0a57610a0a611253565b610a1384610ded565b6003811115610a2457610a24611253565b149392505050565b6000816001610a3a81610222565b5061024562ffffff19851660046020610ae3565b6000816001610a5c81610222565b5061024562ffffff19851660006004610da9565b60008282604051602001610a9492919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006102458484846000610e08565b60006101ab62ffffff19831660016020610da9565b60006101ab826000610e47565b60008160ff16600003610af8575060006101d4565b610b0b8460181c6001600160601b031690565b6001600160601b0316610b2160ff841685611296565b1115610b8557610b6c610b3d8560781c6001600160601b031690565b6001600160601b0316610b598660181c6001600160601b031690565b6001600160601b0316858560ff16610e7d565b60405162461bcd60e51b81526004016108629190611366565b60208260ff161115610bff5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610862565b600882026000610c188660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000601882901c6001600160601b0316610c5b60416024611296565b1492915050565b6000610c6e8260d81c90565b64ffffffffff1664ffffffffff03610c8857506000919050565b6000610c9383610d70565b60405110199392505050565b60008164ffffffffff16610cb38460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff161115610d17576000610ce18260086113bb565b60ff1685901c9050610cf281610fa7565b61ffff16841793508160ff16601014610d0d57601084901b93505b5060001901610cc8565b50600f5b60ff8160ff161015610d6a576000610d348260086113bb565b60ff1685901c9050610d4581610fa7565b61ffff16831792508160ff16600014610d6057601083901b92505b5060001901610d1b565b50915091565b6000610d858260181c6001600160601b031690565b610d988360781c6001600160601b031690565b016001600160601b03169050919050565b6000610db68260206113e4565b610dc19060086113bb565b60ff16610dcf858585610ae3565b901c949350505050565b60006101ab62ffffff198316826001610da9565b600060d882901c60ff1660038111156101ab576101ab611253565b600481015460009063ffffffff90811690841603610e27575082610245565b506000848152600b820160205260409020546001600160a01b0316610245565b6001600160a01b038216600090815260098201602052604081205463ffffffff1615610e75575060006101ab565b50503b151590565b60606000610e8a86610cc2565b9150506000610e9886610cc2565b9150506000610ea686610cc2565b9150506000610eb486610cc2565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b6000610fb960048360ff16901c610fd9565b60ff1661ffff919091161760081b610fd082610fd9565b60ff1617919050565b600060f08083179060ff82169003610ff45750603092915050565b8060ff1660f1036110085750603192915050565b8060ff1660f20361101c5750603292915050565b8060ff1660f3036110305750603392915050565b8060ff1660f4036110445750603492915050565b8060ff1660f5036110585750603592915050565b8060ff1660f60361106c5750603692915050565b8060ff1660f7036110805750603792915050565b8060ff1660f8036110945750603892915050565b8060ff1660f9036110a85750603992915050565b8060ff1660fa036110bc5750606192915050565b8060ff1660fb036110d05750606292915050565b8060ff1660fc036110e45750606392915050565b8060ff1660fd036110f85750606492915050565b8060ff1660fe0361110c5750606592915050565b8060ff1660ff036111205750606692915050565b50919050565b803563ffffffff8116811461113a57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561116b57600080fd5b61117485611126565b935061118260208601611126565b925060408501359150606085013567ffffffffffffffff808211156111a657600080fd5b818701915087601f8301126111ba57600080fd5b8135818111156111cc576111cc61113f565b604051601f8201601f19908116603f011681019083821181831017156111f4576111f461113f565b816040528281528a602084870101111561120d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561124357600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561129157611291611269565b500390565b600082198211156112a9576112a9611269565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826112d3576112d36112ae565b500490565b634e487b7160e01b600052603260045260246000fd5b6000826112fd576112fd6112ae565b500690565b606080825284519082018190526000906020906080840190828801845b828110156113445781516001600160a01b03168452928401929084019060010161131f565b50505090830194909452506001600160a01b0391909116604090910152919050565b600060208083528351808285015260005b8181101561139357858101830151858201604001528201611377565b818111156113a5576000604083870101525b50601f01601f1916929092016040019392505050565b600060ff821660ff84168160ff04811182151516156113dc576113dc611269565b029392505050565b600060ff821660ff8416808210156113fe576113fe611269565b9003939250505056fea2646970667358221220fea3e5ea28f8e251315e32d7a87d88c6057b43a6defae034408b72216816df5164736f6c634300080f0033";

type InboxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxFacet__factory extends ContractFactory {
  constructor(...args: InboxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxFacet> {
    return super.deploy(overrides || {}) as Promise<InboxFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxFacet {
    return super.attach(address) as InboxFacet;
  }
  override connect(signer: Signer): InboxFacet__factory {
    return super.connect(signer) as InboxFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxFacetInterface {
    return new utils.Interface(_abi) as InboxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxFacet {
    return new Contract(address, _abi, signerOrProvider) as InboxFacet;
  }
}
