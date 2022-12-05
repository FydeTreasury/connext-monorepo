import { AdminSchema, NxtpErrorJsonSchema, TAddress } from "@connext/nxtp-utils";
import { Static, Type } from "@sinclair/typebox";

export const PauseRequestSchema = Type.Intersect([AdminSchema, Type.Object({ reason: Type.String() })]);
export type PauseRequest = Static<typeof PauseRequestSchema>;

export const PauseResponseSchema = Type.Object({
  paused: Type.Array(Type.Boolean()),
  domains: Type.Array(Type.String()),
});
export type PauseResponse = Static<typeof PauseResponseSchema>;

export const WatcherApiErrorResponseSchema = Type.Object({
  message: Type.String(),
  error: Type.Optional(NxtpErrorJsonSchema),
});
export type WatcherApiErrorResponse = Static<typeof WatcherApiErrorResponseSchema>;

export const ConfigResponseSchema = Type.Object({
  address: TAddress,
});
export type ConfigResponse = Static<typeof ConfigResponseSchema>;
