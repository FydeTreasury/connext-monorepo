import { NxtpError } from "@connext/nxtp-utils";

export class SignerAddressMissing extends NxtpError {
  constructor(context: any = {}) {
    super("Signer Address Missing", context, SignerAddressMissing.name);
  }
}

export class ContractAddressMissing extends NxtpError {
  constructor(domainId: string, which: string, context: any = {}) {
    super(`Contract address missing for ${domainId}: ${which}`, context, ContractAddressMissing.name);
  }
}

export class ChainDataUndefined extends NxtpError {
  constructor(context: any = {}) {
    super("Chain Data Undefined", context, ChainDataUndefined.name);
  }
}

export class ParamsInvalid extends NxtpError {
  constructor(context: any = {}) {
    super("Params invalid", context, ParamsInvalid.name);
  }
}

export class UriInvalid extends NxtpError {
  constructor(context: any = {}) {
    super("Uri invalid", context, UriInvalid.name);
  }
}

export class ApiRequestFailed extends NxtpError {
  constructor(context: any = {}) {
    super("Api Request failed", context, ApiRequestFailed.name);
  }
}

export class ParseConnextLogFailed extends NxtpError {
  constructor(context: any = {}) {
    super("Parsing logs failed", context, ParseConnextLogFailed.name);
  }
}

export class PoolDoesNotExist extends NxtpError {
  constructor(domainId: string, tokenAddress: string, context: any = {}) {
    super(
      "Pool doesn't exist for the token on this domain.",
      { ...context, domainId, tokenAddress },
      PoolDoesNotExist.name,
    );
  }
}

export class CannotUnwrapOnDestination extends NxtpError {
  constructor(reason: string, context: any = {}) {
    super(
      "Cannot fulfill request to unwrap native token on destination due to bad argument: " + reason,
      { ...context },
      CannotUnwrapOnDestination.name,
    );
  }
}
