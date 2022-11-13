/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MerkleTreeManager,
  MerkleTreeManagerInterface,
} from "../../../contracts/messaging/MerkleTreeManager";

const _abi = [
  {
    inputs: [],
    name: "MerkleLib__insert_treeIsFull",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeManager__setArborist_alreadyArborist",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeManager__setArborist_zeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
    ],
    name: "ArboristUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arborist",
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
    name: "branch",
    outputs: [
      {
        internalType: "bytes32[32]",
        name: "",
        type: "bytes32[32]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "delay",
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
        name: "_arborist",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "insert",
    outputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "insert",
    outputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newArborist",
        type: "address",
      },
    ],
    name: "setArborist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112a7806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063c5b350df11610071578063c5b350df1461020d578063d1851c9214610215578063d232c22014610226578063ebf0c7171461024f578063fd54b2281461025757600080fd5b8063715018a6146101c85780638da5cb5b146101d0578063b1f8100d146101e7578063c4d66de8146101fa57600080fd5b806334a55ee6116100de57806334a55ee61461018f5780633cf52ffb146101a25780634b72d0d4146101aa5780636a42b8f8146101bf57600080fd5b806306661abd146101105780631b373a98146101275780632d287e431461013c57806331d0913c14610164575b600080fd5b6052545b6040519081526020015b60405180910390f35b61013a610135366004610f6f565b610261565b005b61014f61014a366004610f9f565b61034f565b6040805192835260208301919091520161011e565b605354610177906001600160a01b031681565b6040516001600160a01b03909116815260200161011e565b61014f61019d366004610fce565b6103c0565b600254610114565b6101b2610465565b60405161011e919061108c565b62093a80610114565b61013a6104a1565b6000546201000090046001600160a01b0316610177565b61013a6101f5366004610f6f565b6104d4565b61013a610208366004610f6f565b610588565b61013a6106a3565b6001546001600160a01b0316610177565b61023f6000546201000090046001600160a01b03161590565b604051901515815260200161011e565b610114610713565b6052546101149081565b6000546201000090046001600160a01b03163314610292576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b0381166102b957604051630c11a52d60e11b815260040160405180910390fd5b6053546001600160a01b0390811690821681036102e95760405163606e957b60e11b815260040160405180910390fd5b604080516001600160a01b038084168252841660208201527ff2fa31e21376edb31995720340ba00a41a12a7c8744a9bde552660121f4b7771910160405180910390a150605380546001600160a01b0319166001600160a01b0392909216919091179055565b60535460009081906001600160a01b0316331461039f5760405162461bcd60e51b815260206004820152600960248201526808585c989bdc9a5cdd60ba1b60448201526064015b60405180910390fd5b6103aa603284610724565b50506052546103b96032610823565b9150915091565b60535460009081906001600160a01b0316331461040b5760405162461bcd60e51b815260206004820152600960248201526808585c989bdc9a5cdd60ba1b6044820152606401610396565b60005b835181101561044d5761044484828151811061042c5761042c6110c2565b6020026020010151603261072490919063ffffffff16565b5060010161040e565b506104586032610823565b6052549094909350915050565b61046d610f50565b604080516104008101918290529060329060209082845b815481526020019060010190808311610484575050505050905090565b6000546201000090046001600160a01b031633146104d2576040516311a8a1bb60e31b815260040160405180910390fd5b565b6000546201000090046001600160a01b03163314610505576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561052a57506001600160a01b03811615155b15610548576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831662010000909204160361057c57604051634a2fb73f60e11b815260040160405180910390fd5b61058581610836565b50565b600054610100900460ff16158080156105a85750600054600160ff909116105b806105c25750303b1580156105c2575060005460ff166001145b6106255760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610396565b6000805460ff191660011790558015610648576000805461ff0019166101001790555b61065182610884565b6106596108b4565b801561069f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6001546001600160a01b031633146106ce576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426106e091906110ee565b116106fe5760405163d39c12bb60e01b815260040160405180910390fd5b6001546104d2906001600160a01b03166108e3565b600061071f6032610823565b905090565b600080836020015460016107389190611101565b90506001610748602060026111f8565b61075291906110ee565b811061077157604051638eab04bb60e01b815260040160405180910390fd5b6020840181905560005b602081101561080357816001166001036107ac57838582602081106107a2576107a26110c2565b015550905061081d565b8481602081106107be576107be6110c2565b015460408051602081019290925281018590526060016040516020818303038152906040528051906020012093506002826107f99190611204565b915060010161077b565b50604051638eab04bb60e01b815260040160405180910390fd5b92915050565b600061081d82610831610953565b610e14565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff166108ab5760405162461bcd60e51b815260040161039690611226565b61058581610ed7565b600054610100900460ff166108db5760405162461bcd60e51b815260040161039690611226565b6104d2610f20565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b61095b610f50565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015610ecf57600182821c811690819003610e7b57858260208110610e4857610e486110c2565b01546040805160208101929092528101859052606001604051602081830303815290604052805190602001209350610ec6565b83858360208110610e8e57610e8e6110c2565b6020020151604051602001610ead929190918252602082015260400190565b6040516020818303038152906040528051906020012093505b50600101610e1e565b505092915050565b600054610100900460ff16610efe5760405162461bcd60e51b815260040161039690611226565b605380546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16610f475760405162461bcd60e51b815260040161039690611226565b6104d2336108e3565b6040518061040001604052806020906020820280368337509192915050565b600060208284031215610f8157600080fd5b81356001600160a01b0381168114610f9857600080fd5b9392505050565b600060208284031215610fb157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610fe157600080fd5b823567ffffffffffffffff80821115610ff957600080fd5b818501915085601f83011261100d57600080fd5b81358181111561101f5761101f610fb8565b8060051b604051601f19603f8301168101818110858211171561104457611044610fb8565b60405291825284820192508381018501918883111561106257600080fd5b938501935b8285101561108057843584529385019392850192611067565b98975050505050505050565b6104008101818360005b60208082106110a557506110b9565b825184529283019290910190600101611096565b50505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561081d5761081d6110d8565b8082018082111561081d5761081d6110d8565b600181815b8085111561114f578160001904821115611135576111356110d8565b8085161561114257918102915b93841c9390800290611119565b509250929050565b6000826111665750600161081d565b816111735750600061081d565b81600181146111895760028114611193576111af565b600191505061081d565b60ff8411156111a4576111a46110d8565b50506001821b61081d565b5060208310610133831016604e8410600b84101617156111d2575081810a61081d565b6111dc8383611114565b80600019048211156111f0576111f06110d8565b029392505050565b6000610f988383611157565b60008261122157634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220f270b2f42422e5084a6661e3c29d07af55d6e9551b8fd276b5c03dd5c6d4a2c064736f6c63430008110033";

type MerkleTreeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreeManager__factory extends ContractFactory {
  constructor(...args: MerkleTreeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MerkleTreeManager> {
    return super.deploy(overrides || {}) as Promise<MerkleTreeManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MerkleTreeManager {
    return super.attach(address) as MerkleTreeManager;
  }
  override connect(signer: Signer): MerkleTreeManager__factory {
    return super.connect(signer) as MerkleTreeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeManagerInterface {
    return new utils.Interface(_abi) as MerkleTreeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTreeManager {
    return new Contract(address, _abi, signerOrProvider) as MerkleTreeManager;
  }
}
