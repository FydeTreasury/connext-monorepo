import { createLoggingContext, expect, getChainData, mkAddress, mkBytes32 } from "@connext/nxtp-utils";
import { constants, utils } from "ethers";
import { Interface } from "ethers/lib/utils";
import { SinonStubbedInstance, createStubInstance, stub } from "sinon";
import { TransactionManagerInterface } from "@connext/nxtp-contracts/typechain/TransactionManager";

import { getNtpTimeSeconds, getMainnetEquivalent } from "../../../src/lib/helpers";
import * as shared from "../../../src/lib/helpers/shared";
import { ctxMock, txServiceMock } from "../../globalTestHook";

const { requestContext, methodContext } = createLoggingContext("auctionRequestBinding", undefined, mkBytes32());

const encodedDataMock = "0xabcde";
let interfaceMock: SinonStubbedInstance<Interface>;

describe("getNtpTimeSeconds", () => {
  it("should work", async () => {
    const result = await getNtpTimeSeconds();
    expect(result).to.be.eq(Math.floor(Date.now() / 1000));
  });
});

describe("getMainnetEquivalent", () => {
  it("should work", async () => {
    const result = await getMainnetEquivalent(56, "0x0000000000000000000000000000000000000000");
    expect(result).to.be.eq("0xB8c77482e45F1F44dE1745F52C74426C631bDD52");
  });
});

describe("getTokenPriceFromOnChain", () => {
  beforeEach(() => {
    txServiceMock.getTokenPriceFromOnChain.resolves(utils.parseEther("1"));
  });
  it("should work", async () => {
    const tokenPrice = await shared.getTokenPriceFromOnChain(1337, mkAddress("0xa"));
    expect(tokenPrice.toString()).to.be.eq(utils.parseEther("1").toString());
  });
});

describe("isRouterWhitelisted", () => {
  beforeEach(() => {
    interfaceMock = createStubInstance(Interface);
    stub(shared, "getTxManagerInterface").returns(interfaceMock as unknown as TransactionManagerInterface);
    interfaceMock.encodeFunctionData.returns(encodedDataMock);
    txServiceMock.readTx.resolves("0x0000000000000000000000000000000000000000000000000000000000000001");
    interfaceMock.decodeFunctionResult.returns([true]);
  });
  it("should work", async () => {
    const status = await shared.isRouterWhitelisted(mkAddress("0xa"), 1337);

    expect(status).to.be.true;
  });
});
