/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { NomadFacet, NomadFacetInterface } from "../../../../../contracts/core/connext/facets/NomadFacet";

const _abi = [
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
    name: "NomadFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "NomadFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "NomadFacet__reconcile_notConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "NomadFacet__setBridgeRouter_invalidBridge",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldBridgeRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newBridgeRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "BridgeRouterUpdated",
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
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
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
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [],
    name: "bridgeRouter",
    outputs: [
      {
        internalType: "contract IBridgeRouter",
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
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_tokenDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_tokenAddress",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_localToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "onReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeRouter",
        type: "address",
      },
    ],
    name: "setBridgeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b3e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063048494fe1461004657806341af5b521461005b5780636df420071461007a575b600080fd5b6100596100543660046105d9565b61008d565b005b601354604080516001600160a01b039092168252519081900360200190f35b6100596100883660046106ae565b6103c5565b6013546001600160a01b031633146100b8576040516376b55ce560e11b815260040160405180910390fd5b8515806100da575063ffffffff87166000908152601560205260409020548614155b156100f85760405163293e406f60e01b815260040160405180910390fd5b60008180602001905181019061010e919061077a565b9050600061012c8260000151858460200151898b87604001516104b4565b6000818152600b602052604090205490915060ff161561015f57604051630b7907a560e11b815260040160405180910390fd5b6000818152600b60209081526040808320805460ff19166001179055600c8252808320805482518185028101850190935280835291929091908301828280156101d157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101b3575b5050506000858152602860209081526040808320546027909252822054949550909361020093509091506108de565b82519091508115801590610215575080600114155b1561023357604051636c32bf4760e11b815260040160405180910390fd5b8015610379576000610245828961090c565b905060005b610255600184610920565b8110156102dd57816000600d01600087848151811061027657610276610937565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008c6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546102d091906108de565b909155505060010161024a565b5060006102ea838a61094d565b6102f490836108de565b905080600d600087610307600188610920565b8151811061031757610317610937565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008c6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461037191906108de565b909155505050505b837f65aed8d9be32292379e4349568db3564ca2d746067162a68c96b4205cc951f4f848a8a336040516103af9493929190610961565b60405180910390a2505050505050505050505050565b336103f77fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b03161461041e576040516314e74a2560e21b815260040160405180910390fd5b6013546001600160a01b03908116908216810361044e57604051632441878f60e11b815260040160405180910390fd5b601380546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915233908201527f9beaae476d204e448e87faaeb2d2f4cea9049c7f62c3669c9e1ed81cd7d4cdb19060600160405180910390a15050565b600084878386868a6040516020016104d1969594939291906109fd565b6040516020818303038152906040528051906020012090509695505050505050565b63ffffffff8116811461050557600080fd5b50565b6001600160a01b038116811461050557600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156105565761055661051d565b60405290565b604051610160810167ffffffffffffffff811182821017156105565761055661051d565b604051601f8201601f1916810167ffffffffffffffff811182821017156105a9576105a961051d565b604052919050565b600067ffffffffffffffff8211156105cb576105cb61051d565b50601f01601f191660200190565b600080600080600080600060e0888a0312156105f457600080fd5b87356105ff816104f3565b9650602088013595506040880135610616816104f3565b945060608801359350608088013561062d81610508565b925060a0880135915060c088013567ffffffffffffffff81111561065057600080fd5b8801601f81018a1361066157600080fd5b803561067461066f826105b1565b610580565b8181528b602083850101111561068957600080fd5b8160208401602083013760006020838301015280935050505092959891949750929550565b6000602082840312156106c057600080fd5b81356106cb81610508565b9392505050565b80516106dd81610508565b919050565b60005b838110156106fd5781810151838201526020016106e5565b8381111561070c576000848401525b50505050565b600082601f83011261072357600080fd5b815161073161066f826105b1565b81815284602083860101111561074657600080fd5b6107578260208301602087016106e2565b949350505050565b80516106dd816104f3565b805180151581146106dd57600080fd5b60006020828403121561078c57600080fd5b815167ffffffffffffffff808211156107a457600080fd5b90830190606082860312156107b857600080fd5b6107c0610533565b8251828111156107cf57600080fd5b830161016081880312156107e257600080fd5b6107ea61055c565b6107f3826106d2565b815260208201518481111561080757600080fd5b61081389828501610712565b6020830152506108256040830161075f565b60408201526108366060830161075f565b6060820152610847608083016106d2565b608082015261085860a0830161076a565b60a082015261086960c0830161076a565b60c082015261087a60e083016106d2565b60e082015261010082810151908201526101208083015190820152610140918201518282015282526020848101519083015291506108ba604084016106d2565b604082015295945050505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156108f1576108f16108c8565b500190565b634e487b7160e01b600052601260045260246000fd5b60008261091b5761091b6108f6565b500490565b600082821015610932576109326108c8565b500390565b634e487b7160e01b600052603260045260246000fd5b60008261095c5761095c6108f6565b500690565b6080808252855190820181905260009060209060a0840190828901845b828110156109a35781516001600160a01b03168452928401929084019060010161097e565b5050506001600160a01b03968716918401919091526040830194909452509216606090920191909152919050565b600081518084526109e98160208601602086016106e2565b601f01601f19169290920160200192915050565b86815260c06020820152610a1d60c0820187516001600160a01b03169052565b600060208701516101608060e0850152610a3b6102208501836109d1565b91506040890151610100610a568187018363ffffffff169052565b60608b01519150610120610a718188018463ffffffff169052565b60808c01519250610140610a8f818901856001600160a01b03169052565b60a08d81015115159589019590955260c08d0151151561018089015260e08d01516001600160a01b039081166101a08a0152928d01516101c0890152908c01516101e0880152909a01516102008601525096909716604083015250606081019390935263ffffffff91909116608083015291015291905056fea264697066735822122035ef12891d4158a4a8ec51d4c75eff5fb4a442454854f0fdf6134f76fe411fbb64736f6c634300080f0033";

type NomadFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: NomadFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class NomadFacet__factory extends ContractFactory {
  constructor(...args: NomadFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<NomadFacet> {
    return super.deploy(overrides || {}) as Promise<NomadFacet>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NomadFacet {
    return super.attach(address) as NomadFacet;
  }
  override connect(signer: Signer): NomadFacet__factory {
    return super.connect(signer) as NomadFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NomadFacetInterface {
    return new utils.Interface(_abi) as NomadFacetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NomadFacet {
    return new Contract(address, _abi, signerOrProvider) as NomadFacet;
  }
}
