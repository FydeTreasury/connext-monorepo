/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RouterFactory, RouterFactoryInterface } from "../RouterFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_transactionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creater",
        type: "address",
      },
    ],
    name: "RouterCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "routerAddresses",
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
        name: "_transactionManager",
        type: "address",
      },
    ],
    name: "setTransactionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionManager",
    outputs: [
      {
        internalType: "contract ITransactionManager",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611db6380380611db683398101604081905261002f916100b0565b61003833610060565b608052600180546001600160a01b0319166001600160a01b03929092169190911790556100e8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100c2578182fd5b82516001600160a01b03811681146100d8578283fd5b6020939093015192949293505050565b608051611cb361010360003960006101d70152611cb36000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063715018a61161005b578063715018a6146100ef5780637f629efc146100f75780638da5cb5b1461010a578063f2fde38b1461011b57600080fd5b80630b1fa61c146100825780631f16a046146100975780633b716452146100dc575b600080fd5b6100956100903660046103e6565b61012e565b005b6100c06100a53660046103e6565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546100c0906001600160a01b031681565b610095610183565b6100c0610105366004610407565b6101b9565b6000546001600160a01b03166100c0565b6100956101293660046103e6565b6102d2565b6000546001600160a01b031633146101615760405162461bcd60e51b815260040161015890610439565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101ad5760405162461bcd60e51b815260040161015890610439565b6101b7600061036d565b565b600080600160009054906101000a90046001600160a01b03168484337f0000000000000000000000000000000000000000000000000000000000000000604051610202906103bd565b6001600160a01b039586168152938516602085015291841660408401529092166060820152608081019190915260a001604051809103906000f08015801561024e573d6000803e3d6000fd5b506001600160a01b0385811660008181526002602090815260409182902080548686166001600160a01b031990911681179091558251908152908101929092529186168183015233606082015290519192507fe8e811674d167b407a67a22f592a226ade5e34b608e7d56721f82422f3b98197919081900360800190a19392505050565b6000546001600160a01b031633146102fc5760405162461bcd60e51b815260040161015890610439565b6001600160a01b0381166103615760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610158565b61036a8161036d565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61180f8061046f83390190565b80356001600160a01b03811681146103e157600080fd5b919050565b6000602082840312156103f7578081fd5b610400826103ca565b9392505050565b60008060408385031215610419578081fd5b610422836103ca565b9150610430602084016103ca565b90509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe60c06040523480156200001157600080fd5b506040516200180f3803806200180f8339810160408190526200003491620001de565b6200003f336200009c565b6001600160601b0319606086901b16608052600280546001600160a01b038681166001600160a01b031992831617909255600180549286169290911691909117905560a08190526200009182620000ec565b505050505062000244565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146200014c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620001b35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000143565b620001be816200009c565b50565b80516001600160a01b0381168114620001d957600080fd5b919050565b600080600080600060a08688031215620001f6578081fd5b6200020186620001c1565b94506200021160208701620001c1565b93506200022160408701620001c1565b92506200023160608701620001c1565b9150608086015190509295509295909350565b60805160601c60a05161158762000288600039600061065901526000818160fb015281816103b8015281816104c101528181610562015261072101526115876000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101945780639da42bac146101b2578063c48bf4a6146101df578063d2baa168146101ff578063d4132a0b14610212578063f2fde38b1461023257600080fd5b8063238ac933146100ac5780633b716452146100e95780633bbed4a01461011d57806366d003ac1461013f5780636c19e7831461015f578063715018a61461017f575b600080fd5b3480156100b857600080fd5b506002546100cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f557600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561012957600080fd5b5061013d610138366004610c72565b610252565b005b34801561014b57600080fd5b506001546100cc906001600160a01b031681565b34801561016b57600080fd5b5061013d61017a366004610c72565b6102a7565b34801561018b57600080fd5b5061013d6102f3565b3480156101a057600080fd5b506000546001600160a01b03166100cc565b3480156101be57600080fd5b506101d26101cd366004610d03565b610329565b6040516100e09190611388565b3480156101eb57600080fd5b506101d26101fa366004610c95565b610448565b6101d261020d366004610d42565b6104f6565b34801561021e57600080fd5b5061013d61022d366004610e85565b610624565b34801561023e57600080fd5b5061013d61024d366004610c72565b610785565b6000546001600160a01b031633146102855760405162461bcd60e51b815260040161027c90611078565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146102d15760405162461bcd60e51b815260040161027c90611078565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461031d5760405162461bcd60e51b815260040161027c90611078565b6103276000610820565b565b610331610b8c565b6002546001600160a01b031633146103a157600061036f85604051602001610359919061111b565b6040516020818303038152906040528585610870565b6002549091506001600160a01b0380831691161461039f5760405162461bcd60e51b815260040161027c90611041565b505b6040516301362a3560e71b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639b151a80906103ed90879060040161111b565b61020060405180830381600087803b15801561040857600080fd5b505af115801561041c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104409190610d81565b949350505050565b610450610b8c565b6002546001600160a01b031633146104aa5760006104788560405160200161035991906110ad565b6002549091506001600160a01b038083169116146104a85760405162461bcd60e51b815260040161027c90611041565b505b604051635f48d15d60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063be91a2ba906103ed9087906004016110ad565b6104fe610b8c565b6002546001600160a01b031633146105585760006105268560405160200161035991906111b7565b6002549091506001600160a01b038083169116146105565760405162461bcd60e51b815260040161027c90611041565b505b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663d94593726105a761059a60a0880160808901610c72565b6001600160a01b03161590565b6105b25760006105b4565b345b866040518363ffffffff1660e01b81526004016105d191906111b7565b610200604051808303818588803b1580156105eb57600080fd5b505af11580156105ff573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906104409190610d81565b6002546001600160a01b031633146106f05760408051608080820183528682526001600160a01b0386811660208085019182527f00000000000000000000000000000000000000000000000000000000000000008587019081526002548416606080880191825288519384018d90529351851697830197909752519181019190915293511690830152906000906106bd9060a001610359565b6002549091506001600160a01b038083169116146106ed5760405162461bcd60e51b815260040161027c90611041565b50505b600154604051633cc6af3160e21b8152600481018690526001600160a01b03858116602483015291821660448201527f00000000000000000000000000000000000000000000000000000000000000009091169063f31abcc490606401600060405180830381600087803b15801561076757600080fd5b505af115801561077b573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b031633146107af5760405162461bcd60e51b815260040161027c90611078565b6001600160a01b0381166108145760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161027c565b61081d81610820565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006104406108d385805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061090f92505050565b60008151604114156109435760208201516040830151606084015160001a610939868285856109b9565b93505050506109b3565b81516040141561096b5760208201516040830151610962858383610b62565b925050506109b3565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161027c565b92915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610a365760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161027c565b8360ff16601b1480610a4b57508360ff16601c145b610aa25760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161027c565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610af6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b595760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161027c565b95945050505050565b60006001600160ff1b03821660ff83901c601b01610b82868287856109b9565b9695505050505050565b6040805161020081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081019190915290565b8035610c1b8161153c565b919050565b8051610c1b8161153c565b60008083601f840112610c3c578182fd5b50813567ffffffffffffffff811115610c53578182fd5b602083019150836020828501011115610c6b57600080fd5b9250929050565b600060208284031215610c83578081fd5b8135610c8e8161153c565b9392505050565b600080600060408486031215610ca9578182fd5b833567ffffffffffffffff80821115610cc0578384fd5b908501906102408288031215610cd4578384fd5b90935060208501359080821115610ce9578384fd5b50610cf686828701610c2b565b9497909650939450505050565b600080600060408486031215610d17578283fd5b833567ffffffffffffffff80821115610d2e578485fd5b908501906102808288031215610cd4578485fd5b600080600060408486031215610d56578283fd5b833567ffffffffffffffff80821115610d6d578485fd5b908501906102608288031215610cd4578485fd5b60006102008284031215610d93578081fd5b610d9b6114bf565b610da483610c20565b8152610db260208401610c20565b6020820152610dc360408401610c20565b6040820152610dd460608401610c20565b6060820152610de560808401610c20565b6080820152610df660a08401610c20565b60a0820152610e0760c08401610c20565b60c0820152610e1860e08401610c20565b60e0820152610100610e2b818501610c20565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b60008060008060608587031215610e9a578081fd5b843593506020850135610eac8161153c565b9250604085013567ffffffffffffffff811115610ec7578182fd5b610ed387828801610c2b565b95989497509550505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b610f2282610f1583610c10565b6001600160a01b03169052565b610f2e60208201610c10565b6001600160a01b03166020830152610f4860408201610c10565b6001600160a01b03166040830152610f6260608201610c10565b6001600160a01b03166060830152610f7c60808201610c10565b6001600160a01b03166080830152610f9660a08201610c10565b6001600160a01b031660a0830152610fb060c08201610c10565b6001600160a01b031660c0830152610fca60e08201610c10565b6001600160a01b031660e0830152610100610fe6828201610c10565b6001600160a01b03169083015261012081810135908301526101408082013590830152610160808201359083015261018080820135908301526101a080820135908301526101c080820135908301526101e090810135910152565b6020808252601d908201527f526f75746572207369676e6174757265206973206e6f742076616c6964000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602081526110be6020820183610f08565b60006110ce6102008401846114f7565b61024061022081818701526110e861026087018486610edf565b93506110f6818801886114f7565b878603601f19018489015293509050611110848483610edf565b979650505050505050565b6020815261112c6020820183610f08565b600061022061020084013581840152611147818501856114f7565b915061028061024081818701526111636102a087018585610edf565b9350611171818801886114f7565b93509050601f1961026081888703018189015261118f868685610edf565b955061119d818a018a6114f7565b955092505080878603018388015250611110848483610edf565b602081526111cb60208201610f1584610c10565b60006111d960208401610c10565b6001600160a01b0381166040840152506111f560408401610c10565b6001600160a01b03811660608401525061121160608401610c10565b6001600160a01b03811660808401525061122d60808401610c10565b6001600160a01b03811660a08401525061124960a08401610c10565b6001600160a01b03811660c08401525061126560c08401610c10565b6001600160a01b03811660e08401525061128160e08401610c10565b610100611298818501836001600160a01b03169052565b6112a3818601610c10565b9150506101206112bd818501836001600160a01b03169052565b6101409150808501358285015250610160818501358185015261018091508085013582850152506101a081850135818501526101c091508085013582850152506101e08185013581850152611314818601866114f7565b92509050610260610200818187015261133261028087018585610edf565b9350611340818801886114f7565b93509050601f1961022081888703018189015261135e868685610edf565b955061136c818a018a6114f7565b955092505061024081888703018189015261118f868685610edf565b81516001600160a01b03168152610200810160208301516113b460208401826001600160a01b03169052565b5060408301516113cf60408401826001600160a01b03169052565b5060608301516113ea60608401826001600160a01b03169052565b50608083015161140560808401826001600160a01b03169052565b5060a083015161142060a08401826001600160a01b03169052565b5060c083015161143b60c08401826001600160a01b03169052565b5060e083015161145660e08401826001600160a01b03169052565b50610100838101516001600160a01b03169083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a080840151908301526101c080840151908301526101e092830151929091019190915290565b604051610200810167ffffffffffffffff811182821017156114f157634e487b7160e01b600052604160045260246000fd5b60405290565b6000808335601e1984360301811261150d578283fd5b830160208101925035905067ffffffffffffffff81111561152d57600080fd5b803603831315610c6b57600080fd5b6001600160a01b038116811461081d57600080fdfea26469706673582212202b295f390175d2b5732e7c308d7e5d9e0c51645fc014041526a6bd21aca60ed264736f6c63430008040033a2646970667358221220a94b1d21f0330e42aa8e71d4add77b57bb1f7d3d6059f5e9d3e038482fda885964736f6c63430008040033";

export class RouterFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _transactionManager: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RouterFactory> {
    return super.deploy(
      _transactionManager,
      _chainId,
      overrides || {}
    ) as Promise<RouterFactory>;
  }
  getDeployTransaction(
    _transactionManager: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _transactionManager,
      _chainId,
      overrides || {}
    );
  }
  attach(address: string): RouterFactory {
    return super.attach(address) as RouterFactory;
  }
  connect(signer: Signer): RouterFactory__factory {
    return super.connect(signer) as RouterFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterFactoryInterface {
    return new utils.Interface(_abi) as RouterFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterFactory {
    return new Contract(address, _abi, signerOrProvider) as RouterFactory;
  }
}
