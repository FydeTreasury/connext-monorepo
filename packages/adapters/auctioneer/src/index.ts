export class AuctioneerAPI {
  constructor() {}

  // TODO: MetaTx type
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async sendBid(metaTx: any) {
    throw new Error("Not implemented");
  }

  public async getAuctionCycleTime(): Promise<number> {
    // TODO: Should be cached locally, this value will reflect the period for which a
    // transaction's auction will last, i.e. 30s.
    throw new Error("Not implemented");
  }
}