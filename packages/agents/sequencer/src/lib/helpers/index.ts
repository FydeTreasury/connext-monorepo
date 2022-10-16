import {
  gelatoSDKSend,
  isChainSupportedByGelato,
  getGelatoRelayerAddress,
  getTaskStatusFromGelato,
  getTaskStatusFromBackupRelayer,
  connextRelayerSend,
} from "./relayer";
import {
  encodeExecuteFromBids,
  getDestinationLocalAsset,
  getBidsRoundMap,
  getAllSubsets,
  getMinimumBidsCountForRound,
} from "./auctions";

export const getHelpers = () => {
  return {
    relayer: {
      gelatoSDKSend,
      isChainSupportedByGelato,
      getGelatoRelayerAddress,
      getTaskStatusFromGelato,
      getTaskStatusFromBackupRelayer,
      connextRelayerSend,
    },
    auctions: {
      encodeExecuteFromBids,
      getDestinationLocalAsset,
      getBidsRoundMap,
      getAllSubsets,
      getMinimumBidsCountForRound,
    },
  };
};
