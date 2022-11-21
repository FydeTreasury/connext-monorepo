/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DiamondLoupeFacet,
  DiamondLoupeFacetInterface,
} from "../../../../../contracts/core/connext/facets/DiamondLoupeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610646806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c146100845780637a0ed62714610099578063adfca15e146100ae578063cdffacc6146100ce575b600080fd5b61006f61006a366004610447565b6100f9565b60405190151581526020015b60405180910390f35b61008c61012a565b60405161007b9190610478565b6100a1610196565b60405161007b919061050a565b6100c16100bc366004610587565b610334565b60405161007b91906105b0565b6100e16100dc366004610447565b6103de565b6040516001600160a01b03909116815260200161007b565b600080610104610413565b6001600160e01b0319909316600090815260039093016020525050604090205460ff1690565b60606000610136610413565b6002810180546040805160208084028201810190925282815293945083018282801561018b57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161016d575b505050505091505090565b606060006101a2610413565b60028101549091508067ffffffffffffffff8111156101c3576101c36105c3565b60405190808252806020026020018201604052801561020957816020015b6040805180820190915260008152606060208201528152602001906001900390816101e15790505b50925060005b8181101561032e57600083600201828154811061022e5761022e6105d9565b9060005260206000200160009054906101000a90046001600160a01b0316905080858381518110610261576102616105d9565b6020908102919091018101516001600160a01b03928316905290821660009081526001860182526040908190208054825181850281018501909352808352919290919083018282801561030057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116102c25790505b5050505050858381518110610317576103176105d9565b60209081029190910181015101525060010161020f565b50505090565b60606000610340610413565b6001600160a01b038416600090815260018201602090815260409182902080548351818402810184019094528084529394509192908301828280156103d157602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116103935790505b5050505050915050919050565b6000806103e9610413565b6001600160e01b03199093166000908152602093909352505060409020546001600160a01b031690565b60008061044160017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6105ef565b92915050565b60006020828403121561045957600080fd5b81356001600160e01b03198116811461047157600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156104b95783516001600160a01b031683529284019291840191600101610494565b50909695505050505050565b600081518084526020808501945080840160005b838110156104ff5781516001600160e01b031916875295820195908201906001016104d9565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561057957888303603f19018552815180516001600160a01b03168452870151878401879052610566878501826104c5565b9588019593505090860190600101610531565b509098975050505050505050565b60006020828403121561059957600080fd5b81356001600160a01b038116811461047157600080fd5b60208152600061047160208301846104c5565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b8181038181111561044157634e487b7160e01b600052601160045260246000fdfea264697066735822122007272337a247e254dcce8c16a9b9335d5430f6a0082c4e6b2c81a6fdc386495464736f6c63430008110033";

type DiamondLoupeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondLoupeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondLoupeFacet__factory extends ContractFactory {
  constructor(...args: DiamondLoupeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondLoupeFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondLoupeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondLoupeFacet {
    return super.attach(address) as DiamondLoupeFacet;
  }
  override connect(signer: Signer): DiamondLoupeFacet__factory {
    return super.connect(signer) as DiamondLoupeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondLoupeFacetInterface {
    return new utils.Interface(_abi) as DiamondLoupeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondLoupeFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondLoupeFacet;
  }
}
