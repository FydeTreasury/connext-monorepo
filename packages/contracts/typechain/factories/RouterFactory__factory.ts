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
        name: "routerSigner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "transactionManager",
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
        name: "routerSigner",
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
    inputs: [
      {
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "getRouterAddress",
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
  "0x60a060405234801561001057600080fd5b50604051611ff0380380611ff083398101604081905261002f916100b0565b61003833610060565b608052600180546001600160a01b0319166001600160a01b03929092169190911790556100e8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100c2578182fd5b82516001600160a01b03811681146100d8578283fd5b6020939093015192949293505050565b608051611eed61010360003960006102190152611eed6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637f629efc1161005b5780637f629efc146101025780638da5cb5b14610115578063e981ce7914610126578063f2fde38b1461013957600080fd5b80630b1fa61c1461008d5780631f16a046146100a25780633b716452146100e7578063715018a6146100fa575b600080fd5b6100a061009b366004610661565b61014c565b005b6100cb6100b0366004610661565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546100cb906001600160a01b031681565b6100a06101a1565b6100cb61011036600461067b565b6101d7565b6000546001600160a01b03166100cb565b6100cb61013436600461067b565b61030e565b6100a0610147366004610661565b61038c565b6000546001600160a01b0316331461017f5760405162461bcd60e51b8152600401610176906106fb565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101cb5760405162461bcd60e51b8152600401610176906106fb565b6101d56000610427565b565b6000806101f760006101e886610477565b6101f287876104b6565b61052e565b60015460405163087f801760e31b81526001600160a01b0391821660048201527f000000000000000000000000000000000000000000000000000000000000000060248201523360448201529192508216906343fc00b890606401600060405180830381600087803b15801561026c57600080fd5b505af1158015610280573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602090815260409182902080548686166001600160a01b0319909116811790915560015483519182529181019390935286841683830152336060840152909216608082015290517f0d6accca38b8e47e83d8ee92f5cb8192187218abaeb9e1c90c637a804ead29409181900360a00190a19392505050565b600061038561031c84610477565b61032685856104b6565b80519060200120604080516001600160f81b03196020808301919091523060601b6bffffffffffffffffffffffff1916602183015260358201859052605580830185905283518084039091018152607590920190925280519101206000905b9392505050565b6000546001600160a01b031633146103b65760405162461bcd60e51b8152600401610176906106fb565b6001600160a01b03811661041b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610176565b61042481610427565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516bffffffffffffffffffffffff19606083901b166020820152600090603401604051602081830303815290604052805190602001209050919050565b60606000604051806020016104ca90610638565b601f1982820381018352601f9091011660408181526001600160a01b038781166020840152861681830152805180830382018152606083019091529192506105169183916080016106e6565b60405160208183030381529060405291505092915050565b600080844710156105815760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610176565b82516105cf5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610176565b8383516020850187f590506001600160a01b0381166106305760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401610176565b949350505050565b6117878061073183390190565b80356001600160a01b038116811461065c57600080fd5b919050565b600060208284031215610672578081fd5b61038582610645565b6000806040838503121561068d578081fd5b61069683610645565b91506106a460208401610645565b90509250929050565b60008151815b818110156106cd57602081850181015186830152016106b3565b818111156106db5782828601525b509290920192915050565b60006106306106f583866106ad565b846106ad565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe60a06040523480156200001157600080fd5b5060405162001787380380620017878339810160408190526200003491620000e5565b6200003f3362000078565b3360601b608052600480546001600160a01b039384166001600160a01b031991821617909155600380549290931691161790556200011c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000e057600080fd5b919050565b60008060408385031215620000f8578182fd5b6200010383620000c8565b91506200011360208401620000c8565b90509250929050565b60805160601c6116456200014260003960008181610193015261032801526116456000f3fe6080604052600436106100dd5760003560e01c8063715018a61161007f578063c48bf4a611610059578063c48bf4a614610255578063d2baa16814610275578063d4132a0b14610288578063f2fde38b146102a857600080fd5b8063715018a6146101f55780638da5cb5b1461020a5780639da42bac1461022857600080fd5b806343fc00b8116100bb57806343fc00b8146101615780634ba514371461018157806366d003ac146101b55780636c19e783146101d557600080fd5b80633411dbdc146100e25780633b7164521461011f5780633bbed4a01461013f575b600080fd5b3480156100ee57600080fd5b50600454610102906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561012b57600080fd5b50600154610102906001600160a01b031681565b34801561014b57600080fd5b5061015f61015a366004610cef565b6102c8565b005b34801561016d57600080fd5b5061015f61017c366004610d12565b61031d565b34801561018d57600080fd5b506101027f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c157600080fd5b50600354610102906001600160a01b031681565b3480156101e157600080fd5b5061015f6101f0366004610cef565b6103b7565b34801561020157600080fd5b5061015f610403565b34801561021657600080fd5b506000546001600160a01b0316610102565b34801561023457600080fd5b50610248610243366004610dc1565b610439565b6040516101169190611446565b34801561026157600080fd5b50610248610270366004610d53565b61053c565b610248610283366004610e00565b6105ce565b34801561029457600080fd5b5061015f6102a3366004610f43565b6106de565b3480156102b457600080fd5b5061015f6102c3366004610cef565b610802565b6000546001600160a01b031633146102fb5760405162461bcd60e51b81526004016102f290611136565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156103895760405162461bcd60e51b815260206004820152601060248201526f4f4e4c595f5649415f464143544f525960801b60448201526064016102f2565b600180546001600160a01b0319166001600160a01b03851617905560028290556103b281610802565b505050565b6000546001600160a01b031633146103e15760405162461bcd60e51b81526004016102f290611136565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461042d5760405162461bcd60e51b81526004016102f290611136565b610437600061089d565b565b610441610c09565b6004546001600160a01b031633146104b157600061047f8560405160200161046991906111d9565b60405160208183030381529060405285856108ed565b6004549091506001600160a01b038083169116146104af5760405162461bcd60e51b81526004016102f2906110ff565b505b6001546040516301362a3560e71b81526001600160a01b0390911690639b151a80906104e19087906004016111d9565b61020060405180830381600087803b1580156104fc57600080fd5b505af1158015610510573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105349190610e3f565b949350505050565b610544610c09565b6004546001600160a01b0316331461059e57600061056c85604051602001610469919061116b565b6004549091506001600160a01b0380831691161461059c5760405162461bcd60e51b81526004016102f2906110ff565b505b600154604051635f48d15d60e11b81526001600160a01b039091169063be91a2ba906104e190879060040161116b565b6105d6610c09565b6004546001600160a01b031633146106305760006105fe856040516020016104699190611275565b6004549091506001600160a01b0380831691161461062e5760405162461bcd60e51b81526004016102f2906110ff565b505b6001546001600160a01b031663d945937261066161065460a0880160808901610cef565b6001600160a01b03161590565b61066c57600061066e565b345b866040518363ffffffff1660e01b815260040161068b9190611275565b610200604051808303818588803b1580156106a557600080fd5b505af11580156106b9573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105349190610e3f565b6004546001600160a01b0316331461078c5760408051608080820183528682526001600160a01b0386811660208085019182526002548587019081526004548416606080880191825288519384018d90529351851697830197909752519181019190915293511690830152906000906107599060a001610469565b6004549091506001600160a01b038083169116146107895760405162461bcd60e51b81526004016102f2906110ff565b50505b600154600354604051633cc6af3160e21b8152600481018790526001600160a01b038681166024830152918216604482015291169063f31abcc490606401600060405180830381600087803b1580156107e457600080fd5b505af11580156107f8573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331461082c5760405162461bcd60e51b81526004016102f290611136565b6001600160a01b0381166108915760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102f2565b61089a8161089d565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061053461095085805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061098c92505050565b60008151604114156109c05760208201516040830151606084015160001a6109b686828585610a36565b9350505050610a30565b8151604014156109e857602082015160408301516109df858383610bdf565b92505050610a30565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102f2565b92915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610ab35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102f2565b8360ff16601b1480610ac857508360ff16601c145b610b1f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102f2565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610b73573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610bd65760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102f2565b95945050505050565b60006001600160ff1b03821660ff83901c601b01610bff86828785610a36565b9695505050505050565b6040805161020081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081019190915290565b8035610c98816115fa565b919050565b8051610c98816115fa565b60008083601f840112610cb9578182fd5b50813567ffffffffffffffff811115610cd0578182fd5b602083019150836020828501011115610ce857600080fd5b9250929050565b600060208284031215610d00578081fd5b8135610d0b816115fa565b9392505050565b600080600060608486031215610d26578182fd5b8335610d31816115fa565b9250602084013591506040840135610d48816115fa565b809150509250925092565b600080600060408486031215610d67578283fd5b833567ffffffffffffffff80821115610d7e578485fd5b908501906102408288031215610d92578485fd5b90935060208501359080821115610da7578384fd5b50610db486828701610ca8565b9497909650939450505050565b600080600060408486031215610dd5578283fd5b833567ffffffffffffffff80821115610dec578485fd5b908501906102808288031215610d92578485fd5b600080600060408486031215610e14578283fd5b833567ffffffffffffffff80821115610e2b578485fd5b908501906102608288031215610d92578485fd5b60006102008284031215610e51578081fd5b610e5961157d565b610e6283610c9d565b8152610e7060208401610c9d565b6020820152610e8160408401610c9d565b6040820152610e9260608401610c9d565b6060820152610ea360808401610c9d565b6080820152610eb460a08401610c9d565b60a0820152610ec560c08401610c9d565b60c0820152610ed660e08401610c9d565b60e0820152610100610ee9818501610c9d565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b60008060008060608587031215610f58578081fd5b843593506020850135610f6a816115fa565b9250604085013567ffffffffffffffff811115610f85578182fd5b610f9187828801610ca8565b95989497509550505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b610fe082610fd383610c8d565b6001600160a01b03169052565b610fec60208201610c8d565b6001600160a01b0316602083015261100660408201610c8d565b6001600160a01b0316604083015261102060608201610c8d565b6001600160a01b0316606083015261103a60808201610c8d565b6001600160a01b0316608083015261105460a08201610c8d565b6001600160a01b031660a083015261106e60c08201610c8d565b6001600160a01b031660c083015261108860e08201610c8d565b6001600160a01b031660e08301526101006110a4828201610c8d565b6001600160a01b03169083015261012081810135908301526101408082013590830152610160808201359083015261018080820135908301526101a080820135908301526101c080820135908301526101e090810135910152565b6020808252601d908201527f526f75746572207369676e6174757265206973206e6f742076616c6964000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020815261117c6020820183610fc6565b600061118c6102008401846115b5565b61024061022081818701526111a661026087018486610f9d565b93506111b4818801886115b5565b878603601f190184890152935090506111ce848483610f9d565b979650505050505050565b602081526111ea6020820183610fc6565b600061022061020084013581840152611205818501856115b5565b915061028061024081818701526112216102a087018585610f9d565b935061122f818801886115b5565b93509050601f1961026081888703018189015261124d868685610f9d565b955061125b818a018a6115b5565b9550925050808786030183880152506111ce848483610f9d565b6020815261128960208201610fd384610c8d565b600061129760208401610c8d565b6001600160a01b0381166040840152506112b360408401610c8d565b6001600160a01b0381166060840152506112cf60608401610c8d565b6001600160a01b0381166080840152506112eb60808401610c8d565b6001600160a01b03811660a08401525061130760a08401610c8d565b6001600160a01b03811660c08401525061132360c08401610c8d565b6001600160a01b03811660e08401525061133f60e08401610c8d565b610100611356818501836001600160a01b03169052565b611361818601610c8d565b91505061012061137b818501836001600160a01b03169052565b6101409150808501358285015250610160818501358185015261018091508085013582850152506101a081850135818501526101c091508085013582850152506101e081850135818501526113d2818601866115b5565b9250905061026061020081818701526113f061028087018585610f9d565b93506113fe818801886115b5565b93509050601f1961022081888703018189015261141c868685610f9d565b955061142a818a018a6115b5565b955092505061024081888703018189015261124d868685610f9d565b81516001600160a01b031681526102008101602083015161147260208401826001600160a01b03169052565b50604083015161148d60408401826001600160a01b03169052565b5060608301516114a860608401826001600160a01b03169052565b5060808301516114c360808401826001600160a01b03169052565b5060a08301516114de60a08401826001600160a01b03169052565b5060c08301516114f960c08401826001600160a01b03169052565b5060e083015161151460e08401826001600160a01b03169052565b50610100838101516001600160a01b03169083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a080840151908301526101c080840151908301526101e092830151929091019190915290565b604051610200810167ffffffffffffffff811182821017156115af57634e487b7160e01b600052604160045260246000fd5b60405290565b6000808335601e198436030181126115cb578283fd5b830160208101925035905067ffffffffffffffff8111156115eb57600080fd5b803603831315610ce857600080fd5b6001600160a01b038116811461089a57600080fdfea2646970667358221220c669ae0a41074dbfb17443c43e053f7d3b96240049b86956c01d3c6627f6236e64736f6c63430008040033a2646970667358221220f9ffa45979749ce6942264310789c44061e1a9fadbe82f1f08fe4dd3f5bf723464736f6c63430008040033";

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
