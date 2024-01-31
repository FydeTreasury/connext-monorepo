/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ChainIDs,
  ChainIDsInterface,
} from "../../../../../contracts/core/connext/libraries/ChainIDs";

const _abi = [
  {
    inputs: [],
    name: "ARBITRUM_GOERLI",
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
    name: "ARBITRUM_ONE",
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
    name: "BNB",
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
    name: "GNOSIS",
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
    name: "GNOSIS_CHIADO",
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
    name: "GOERLI",
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
    name: "LINEA",
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
    name: "LINEA_TEST",
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
    name: "MAINNET",
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
    name: "MUMBAI",
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
    name: "OPTIMISM",
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
    name: "OPTIMISM_GOERLI",
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
    name: "POLYGON_POS",
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
    name: "POLYGON_ZKEVM",
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
    name: "POLYGON_ZKEVM_TEST",
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
    name: "ZKSYNC",
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
    name: "ZKSYNC_TEST",
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
] as const;

const _bytecode =
  "0x000200000000000200010000000103550000006001100270000000660010019d0000008001000039000000400010043f0000000101200190000000430000c13d0000000001000031000000040210008c000001770000413d0000000102000367000000000202043b000000e002200270000000680320009c0000004d0000613d000000690320009c000000600000613d0000006a0320009c000000730000613d0000006b0320009c000000860000613d0000006c0320009c000000990000613d0000006d0320009c000000ac0000613d0000006e0320009c000000bf0000613d0000006f0320009c000000d20000613d000000700320009c000000e50000613d000000710320009c000000f80000613d000000720320009c0000010b0000613d000000730320009c0000011e0000613d000000740320009c000001310000613d000000750320009c000001440000613d000000760320009c000001570000613d000000770320009c0000016a0000613d000000780220009c000001770000c13d000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000006401000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f0000000001000416000000000110004c000001770000c13d000000200100003900000100001004430000012000000443000001000100003900000040020000390000006703000041019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000014401000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d000005a201000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000a4b101000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d000027d801000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000000a01000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000044d01000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d000001a401000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000000101000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000003801000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000008901000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000000501000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000007b01000041000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000007a01000041000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000e70801000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c000001770000c13d0000011801000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f000000040110008a0000007902000041000000000310004c000000000300001900000000030240190000007901100197000000000410004c000000000200a019000000790110009c00000000010300190000000001026019000000000110004c0000017a0000613d00000000010000190000000002000019019101880000040f0000e70401000039000000800010043f000000800100003900000020020000390000000003000019019101800000040f0000006604000041000000660510009c000000000104801900000040011002100000006002200210000000000121019f0000000001310019000001920001042e0000006603000041000000660420009c0000000002038019000000660410009c000000000103801900000040011002100000006002200210000000000112019f00000193000104300000019100000432000001920001042e0000019300010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fb61f62f000000000000000000000000000000000000000000000000000000000f7fedfb000000000000000000000000000000000000000000000000000000002168ca0f00000000000000000000000000000000000000000000000000000000274423de000000000000000000000000000000000000000000000000000000003c130daf000000000000000000000000000000000000000000000000000000003f1b42fb00000000000000000000000000000000000000000000000000000000476d7ff500000000000000000000000000000000000000000000000000000000510547f90000000000000000000000000000000000000000000000000000000058f7f6d20000000000000000000000000000000000000000000000000000000059a655310000000000000000000000000000000000000000000000000000000061148af0000000000000000000000000000000000000000000000000000000006de99f080000000000000000000000000000000000000000000000000000000089c80d2f00000000000000000000000000000000000000000000000000000000af0712d700000000000000000000000000000000000000000000000000000000cd7c6f5e00000000000000000000000000000000000000000000000000000000efe1764600000000000000000000000000000000000000000000000000000000015ff39f800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000138810000000000000000000000000000000000000000000000000000000000066eed0000000000000000000000000000000000000000000000000000000000000000";

type ChainIDsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainIDsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainIDs__factory extends ContractFactory {
  constructor(...args: ChainIDsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainIDs> {
    return super.deploy(overrides || {}) as Promise<ChainIDs>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ChainIDs {
    return super.attach(address) as ChainIDs;
  }
  override connect(signer: Signer): ChainIDs__factory {
    return super.connect(signer) as ChainIDs__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainIDsInterface {
    return new utils.Interface(_abi) as ChainIDsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainIDs {
    return new Contract(address, _abi, signerOrProvider) as ChainIDs;
  }
}
