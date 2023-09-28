/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MerkleTreeManager, MerkleTreeManagerInterface } from "../../../contracts/messaging/MerkleTreeManager";

const _abi = [
  {
    inputs: [],
    name: "MerkleLib__insert_treeIsFull",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeManager__renounceOwnership_prohibited",
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
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
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
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "LeafInserted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "LeavesInserted",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "incrementNonce",
    outputs: [
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "_leaves",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "leaves",
    outputs: [
      {
        internalType: "enum MerkleTreeManager.LeafStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
    ],
    name: "markAsProcessed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
    ],
    name: "markAsProven",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "rootAndCount",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612620806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638da5cb5b116100c3578063c5b350df1161007c578063c5b350df146102f3578063c9b0a6de146102fb578063d1851c9214610303578063d232c22014610314578063ebf0c7171461033d578063fd54b2281461034557600080fd5b80638da5cb5b1461026a57806398fae8e914610281578063b1f8100d14610294578063b61f1030146102a7578063b95a2001146102ba578063c4d66de8146102e057600080fd5b806331d0913c1161011557806331d0913c146101fe57806334a55ee6146102295780633cf52ffb1461023c5780634b72d0d4146102445780636a42b8f814610259578063715018a61461026257600080fd5b806306661abd146101525780630c132ab514610169578063151bcd2c146101915780631b373a98146101c15780632d287e43146101d6575b600080fd5b6052545b6040519081526020015b60405180910390f35b61017c610177366004612205565b61034f565b60405163ffffffff9091168152602001610160565b6101b461019f366004612232565b60546020526000908152604090205460ff1681565b6040516101609190612261565b6101d46101cf366004612289565b6103d0565b005b6101e96101e4366004612232565b6104be565b60408051928352602083019190915201610160565b605354610211906001600160a01b031681565b6040516001600160a01b039091168152602001610160565b6101e96102373660046122c8565b6105ae565b600254610156565b61024c6106d9565b6040516101609190612386565b62093a80610156565b6101d4610715565b6000546201000090046001600160a01b0316610211565b6101d461028f366004612232565b61075f565b6101d46102a2366004612289565b610805565b6101d46102b5366004612232565b6108b2565b61017c6102c8366004612205565b60556020526000908152604090205463ffffffff1681565b6101d46102ee366004612289565b610958565b6101d4610a73565b6101e9610ae5565b6001546001600160a01b0316610211565b61032d6000546201000090046001600160a01b03161590565b6040519015158152602001610160565b610156610afe565b6052546101569081565b6053546000906001600160a01b031633146103855760405162461bcd60e51b815260040161037c906123bc565b60405180910390fd5b63ffffffff8083166000908152605560205260408120805490921691906103ab836123f5565b91906101000a81548163ffffffff021916908363ffffffff1602179055509050919050565b6000546201000090046001600160a01b03163314610401576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b03811661042857604051630c11a52d60e11b815260040160405180910390fd5b6053546001600160a01b0390811690821681036104585760405163606e957b60e11b815260040160405180910390fd5b604080516001600160a01b038084168252841660208201527ff2fa31e21376edb31995720340ba00a41a12a7c8744a9bde552660121f4b7771910160405180910390a150605380546001600160a01b0319166001600160a01b0392909216919091179055565b60535460009081906001600160a01b031633146104ed5760405162461bcd60e51b815260040161037c906123bc565b60408051610440810180835261053b92869291603291839190820190839060209082845b81548152602001906001019080831161051157505050918352505060209182015491015290610b0f565b805160329061054d9082906020612173565b50602091820151910155506052546105656032610c1b565b60408051828152602081018490529081018590529092507fd50e83984b64a106ac2ee6314d689ec4d2a656d5ece6d94c585796944b52240c9060600160405180910390a1915091565b60535460009081906001600160a01b031633146105dd5760405162461bcd60e51b815260040161037c906123bc565b6040805161044081018083526000926032918391820190839060209082845b8154815260200190600101908083116105fc575050509183525050602091820154910152845190915060005b818110156106665761065c86828151811061064557610645612418565b602002602001015184610b0f90919063ffffffff16565b9250600101610628565b508151829060329061067b9082906020612173565b506020918201519082015582015192506106956032610c1b565b93507f3ef8438c07c6b4b67e70eace906a07e9b294c2f0066803f58e705567e1aa4f1b8484876040516106ca9392919061242e565b60405180910390a15050915091565b6106e16121b1565b604080516104008101918290529060329060209082845b8154815260200190600101908083116106f8575050505050905090565b6000546201000090046001600160a01b03163314610746576040516311a8a1bb60e31b815260040160405180910390fd5b60405163aa0e191b60e01b815260040160405180910390fd5b6053546001600160a01b031633146107895760405162461bcd60e51b815260040161037c906123bc565b60008181526054602052604081205460ff1660028111156107ac576107ac61224b565b146107e25760405162461bcd60e51b815260206004820152600660248201526521656d70747960d01b604482015260640161037c565b600081815260546020526040902080546001919060ff191682805b021790555050565b6000546201000090046001600160a01b03163314610836576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610854575060025415155b15610872576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083166201000090920416036108a657604051634a2fb73f60e11b815260040160405180910390fd5b6108af81611fd1565b50565b6053546001600160a01b031633146108dc5760405162461bcd60e51b815260040161037c906123bc565b600160008281526054602052604090205460ff1660028111156109015761090161224b565b146109385760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b604482015260640161037c565b600081815260546020526040902080546002919060ff19166001836107fd565b600054610100900460ff16158080156109785750600054600160ff909116105b806109925750303b158015610992575060005460ff166001145b6109f55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161037c565b6000805460ff191660011790558015610a18576000805461ff0019166101001790555b610a218261201f565b610a2961204f565b8015610a6f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6001546001600160a01b03163314610a9e576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610ab09190612483565b11610ace576040516324e0285f60e21b815260040160405180910390fd5b600154610ae3906001600160a01b031661207e565b565b600080610af26032610c1b565b60525490939092509050565b6000610b0a6032610c1b565b905090565b610b176121d0565b6000836020018051610b2890612496565b9081905290506001610b3c60206002612593565b610b469190612483565b811115610b6657604051638eab04bb60e01b815260040160405180910390fd5b60005b6020811015610bfb5781600116600103610ba257845184908260208110610b9257610b92612418565b602002015250839150610c159050565b84518160208110610bb557610bb5612418565b602002015184604051602001610bd5929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209350600191821c9101610b69565b50604051638eab04bb60e01b815260040160405180910390fd5b92915050565b6020810154600090808203610c5257507f27ae5ba08d7291c96c8cbddcc148bf48a6d68c7974b94356f53754ef6171d75792915050565b6000836001831615610c74578054600052600060205260406000209350611527565b6002831615610cb95760018101546000527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56020526040600020935060019150611527565b6004831615610cfe5760028101546000527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d306020526040600020935060029150611527565b6008831615610d435760038101546000527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba856020526040600020935060039150611527565b6010831615610d885760048101546000527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a193446020526040600020935060049150611527565b6020831615610dcd5760058101546000527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d6020526040600020935060059150611527565b6040831615610e125760068101546000527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a19686020526040600020935060069150611527565b6080831615610e575760078101546000527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f836020526040600020935060079150611527565b610100831615610e9d5760088101546000527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6020526040600020935060089150611527565b610200831615610ee35760098101546000527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06020526040600020935060099150611527565b610400831615610f2957600a8101546000527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a560205260406000209350600a9150611527565b610800831615610f6f57600b8101546000527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89260205260406000209350600b9150611527565b611000831615610fb557600c8101546000527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c60205260406000209350600c9150611527565b612000831615610ffb57600d8101546000527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb60205260406000209350600d9150611527565b61400083161561104157600e8101546000527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc60205260406000209350600e9150611527565b61800083161561108757600f8101546000527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d260205260406000209350600f9150611527565b620100008316156110ce5760108101546000527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6020526040600020935060109150611527565b620200008316156111155760118101546000527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6020526040600020935060119150611527565b6204000083161561115c5760128101546000527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06020526040600020935060129150611527565b620800008316156111a35760138101546000527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06020526040600020935060139150611527565b621000008316156111ea5760148101546000527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26020526040600020935060149150611527565b622000008316156112315760158101546000527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96020526040600020935060159150611527565b624000008316156112785760168101546000527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776020526040600020935060169150611527565b628000008316156112bf5760178101546000527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526020526040600020935060179150611527565b63010000008316156113075760188101546000527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6020526040600020935060189150611527565b630200000083161561134f5760198101546000527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6020526040600020935060199150611527565b630400000083161561139757601a8101546000527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d060205260406000209350601a9150611527565b63080000008316156113df57601b8101546000527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e60205260406000209350601b9150611527565b631000000083161561142757601c8101546000527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e60205260406000209350601c9150611527565b632000000083161561146f57601d8101546000527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32260205260406000209350601d9150611527565b63400000008316156114b757601e8101546000527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73560205260406000209350601e9150611527565b63800000008316156114ff57601f8101546000527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a960205260406000209350601f9150611527565b7f27ae5ba08d7291c96c8cbddcc148bf48a6d68c7974b94356f53754ef6171d7579350602091505b601e8211611fc9576001821015611585576002831680156115535760018201546000528460205261157c565b846000527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56020525b50604060002093505b60028210156115db576004831680156115a9576002820154600052846020526115d2565b846000527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d306020525b50604060002093505b6003821015611631576008831680156115ff57600382015460005284602052611628565b846000527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba856020525b50604060002093505b6004821015611687576010831680156116555760048201546000528460205261167e565b846000527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a193446020525b50604060002093505b60058210156116dd576020831680156116ab576005820154600052846020526116d4565b846000527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d6020525b50604060002093505b6006821015611733576040831680156117015760068201546000528460205261172a565b846000527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a19686020525b50604060002093505b60078210156117895760808316801561175757600782015460005284602052611780565b846000527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f836020525b50604060002093505b60088210156117e057610100831680156117ae576008820154600052846020526117d7565b846000527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6020525b50604060002093505b600982101561183757610200831680156118055760098201546000528460205261182e565b846000527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06020525b50604060002093505b600a82101561188e576104008316801561185c57600a82015460005284602052611885565b846000527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56020525b50604060002093505b600b8210156118e557610800831680156118b357600b820154600052846020526118dc565b846000527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926020525b50604060002093505b600c82101561193c576110008316801561190a57600c82015460005284602052611933565b846000527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6020525b50604060002093505b600d821015611993576120008316801561196157600d8201546000528460205261198a565b846000527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6020525b50604060002093505b600e8210156119ea57614000831680156119b857600e820154600052846020526119e1565b846000527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6020525b50604060002093505b600f821015611a415761800083168015611a0f57600f82015460005284602052611a38565b846000527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26020525b50604060002093505b6010821015611a99576201000083168015611a6757601082015460005284602052611a90565b846000527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6020525b50604060002093505b6011821015611af1576202000083168015611abf57601182015460005284602052611ae8565b846000527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6020525b50604060002093505b6012821015611b49576204000083168015611b1757601282015460005284602052611b40565b846000527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06020525b50604060002093505b6013821015611ba1576208000083168015611b6f57601382015460005284602052611b98565b846000527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06020525b50604060002093505b6014821015611bf9576210000083168015611bc757601482015460005284602052611bf0565b846000527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26020525b50604060002093505b6015821015611c51576220000083168015611c1f57601582015460005284602052611c48565b846000527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96020525b50604060002093505b6016821015611ca9576240000083168015611c7757601682015460005284602052611ca0565b846000527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776020525b50604060002093505b6017821015611d01576280000083168015611ccf57601782015460005284602052611cf8565b846000527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526020525b50604060002093505b6018821015611d5a57630100000083168015611d2857601882015460005284602052611d51565b846000527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6020525b50604060002093505b6019821015611db357630200000083168015611d8157601982015460005284602052611daa565b846000527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6020525b50604060002093505b601a821015611e0c57630400000083168015611dda57601a82015460005284602052611e03565b846000527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06020525b50604060002093505b601b821015611e6557630800000083168015611e3357601b82015460005284602052611e5c565b846000527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6020525b50604060002093505b601c821015611ebe57631000000083168015611e8c57601c82015460005284602052611eb5565b846000527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6020525b50604060002093505b601d821015611f1757632000000083168015611ee557601d82015460005284602052611f0e565b846000527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226020525b50604060002093505b601e821015611f7057634000000083168015611f3e57601e82015460005284602052611f67565b846000527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356020525b50604060002093505b601f821015611fc957638000000083168015611f9757601f82015460005284602052611fc0565b846000527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96020525b50604060002093505b505050919050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff166120465760405162461bcd60e51b815260040161037c9061259f565b6108af816120fa565b600054610100900460ff166120765760405162461bcd60e51b815260040161037c9061259f565b610ae3612143565b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03909216620100000262010000600160b01b0319909216919091178155600255600180546001600160a01b0319169055565b600054610100900460ff166121215760405162461bcd60e51b815260040161037c9061259f565b605380546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff1661216a5760405162461bcd60e51b815260040161037c9061259f565b610ae33361207e565b82602081019282156121a1579160200282015b828111156121a1578251825591602001919060010190612186565b506121ad9291506121f0565b5090565b6040518061040001604052806020906020820280368337509192915050565b60405180604001604052806121e36121b1565b8152602001600081525090565b5b808211156121ad57600081556001016121f1565b60006020828403121561221757600080fd5b813563ffffffff8116811461222b57600080fd5b9392505050565b60006020828403121561224457600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b602081016003831061228357634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561229b57600080fd5b81356001600160a01b038116811461222b57600080fd5b634e487b7160e01b600052604160045260246000fd5b600060208083850312156122db57600080fd5b823567ffffffffffffffff808211156122f357600080fd5b818501915085601f83011261230757600080fd5b813581811115612319576123196122b2565b8060051b604051601f19603f8301168101818110858211171561233e5761233e6122b2565b60405291825284820192508381018501918883111561235c57600080fd5b938501935b8285101561237a57843584529385019392850192612361565b98975050505050505050565b6104008101818360005b602080821061239f57506123b3565b825184529283019290910190600101612390565b50505092915050565b60208082526009908201526808585c989bdc9a5cdd60ba1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681810361240e5761240e6123df565b6001019392505050565b634e487b7160e01b600052603260045260246000fd5b6000606082018583526020858185015260606040850152818551808452608086019150828701935060005b8181101561247557845183529383019391830191600101612459565b509098975050505050505050565b81810381811115610c1557610c156123df565b6000600182016124a8576124a86123df565b5060010190565b600181815b808511156124ea5781600019048211156124d0576124d06123df565b808516156124dd57918102915b93841c93908002906124b4565b509250929050565b60008261250157506001610c15565b8161250e57506000610c15565b8160018114612524576002811461252e5761254a565b6001915050610c15565b60ff84111561253f5761253f6123df565b50506001821b610c15565b5060208310610133831016604e8410600b841016171561256d575081810a610c15565b61257783836124af565b806000190482111561258b5761258b6123df565b029392505050565b600061222b83836124f2565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea264697066735822122045a1527550f15c239cc4244bcc76051c19fd5da70bdc648706ed383d9ee4911564736f6c63430008110033";

type MerkleTreeManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MerkleTreeManagerConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MerkleTreeManager__factory extends ContractFactory {
  constructor(...args: MerkleTreeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<MerkleTreeManager> {
    return super.deploy(overrides || {}) as Promise<MerkleTreeManager>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
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
  static connect(address: string, signerOrProvider: Signer | Provider): MerkleTreeManager {
    return new Contract(address, _abi, signerOrProvider) as MerkleTreeManager;
  }
}
