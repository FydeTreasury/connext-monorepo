import commandLineArgs from "command-line-args";
import { BigNumber, constants, Contract, providers, Wallet } from "ethers";
import { isAddress } from "ethers/lib/utils";
import { config } from "dotenv";

import { chainIdToDomain, domainToChainId } from "../../domain";
import { Env, getProviderFromHardhatConfig } from "../../utils";
import { hardhatNetworks } from "../../config";
import { Deployment } from "../types";

import {
  getOwnableDeployments,
  HubMessagingOwnableDeployments,
  HUBS,
  OwnableDeployment,
  SUPPORTED_DOMAINS,
} from "./helpers";

config();

export const optionDefinitions = [
  { name: "env", type: String },
  { name: "network", type: String },
  { name: "desired", type: String },
  { name: "domains", type: String, multiple: true },
  { name: "apply", type: Boolean, defaultValue: false },
];

export const transferOwnership = async () => {
  let cmdArgs: any;
  try {
    cmdArgs = commandLineArgs(optionDefinitions);
  } catch (err: any) {
    throw new Error(`Parsing arguments failed, cmdArgs: ${process.argv}`);
  }

  // get desired wallet if possible
  let desiredWallet: Wallet | undefined;
  if (process.env.DESIRED_WALLET) {
    desiredWallet = Wallet.fromMnemonic(process.env.DESIRED_WALLET!);
  }

  // get deployer
  const privateKey = process.env.PRIVATE_KEY;
  const mnemonic = process.env.DEPLOYER || process.env.DEPLOYER_MNEMONIC || process.env.MNEMONIC;
  if (!mnemonic && !privateKey) {
    throw new Error(
      "Deployer mnemonic was not specified. Please specify `deployer` in the config file, " +
        "or set DEPLOYER or DEPLOYER_MNEMONIC in env.",
    );
  }
  // Convert deployer from mnemonic to Wallet.
  let wallet: Wallet;
  if (privateKey) {
    wallet = new Wallet(privateKey);
  } else {
    wallet = Wallet.fromMnemonic(mnemonic!);
  }
  console.log("wallet: ", wallet.address);

  // get default config values
  const { env: _env, domains: _domains, network: _network, desired, apply } = cmdArgs;
  const env: Env = _env ?? "staging";
  const network: "testnet" | "mainnet" = _network ?? "testnet";
  const domains = _domains ?? SUPPORTED_DOMAINS[network];

  // config validation
  if (!["staging", "production"].includes(env as string)) {
    throw new Error(`Environment should be either staging or production, env: ${env}`);
  }

  if (!["testnet", "mainnet"].includes(network as string)) {
    throw new Error(`Network should be either testnet or mainnet, network: ${network}`);
  }

  if (!desired || desired === constants.AddressZero || !isAddress(desired as string)) {
    throw new Error(`Desired owner must be a valid address, desired: ${desired}`);
  }

  // pull all ownable deployments
  const allDeployments: { [chain: number]: OwnableDeployment } = {};
  domains.forEach((domain: string) => {
    const chain = domainToChainId(+domain);
    const config: any = Object.values(hardhatNetworks).find((h: any) => h.chainId === chain);
    if (!config?.url) {
      throw new Error(`No hardhat network config provider found for chain ${chain}`);
    }
    const deployments = getOwnableDeployments(
      chain,
      wallet.connect(getProviderFromHardhatConfig(chain)),
      HUBS[network] === +domain,
      env,
    );
    allDeployments[chain] = deployments;
  });

  // for each deployment:
  // - if current owner is correct, ignore
  // - if proposed owner is correct, check deadline.
  //   - if deadline is passed, execute
  //   - if deadline is not passed, ignore
  // - if proposed owner is incorrect, propose new owner
  // only send txs if apply is true, otherwise just log

  // define helper for ^^
  const handleOwnership = async (name: string, contract: Contract, provider: providers.JsonRpcProvider) => {
    // Check the owner
    const owner = await contract.owner();

    if (owner.toLowerCase() === desired.toLowerCase()) {
      // already done, continue
      return;
    }

    const proposed = await contract.proposed();

    // handle case where the desired owner is already proposed
    if (proposed.toLowerCase() === desired.toLowerCase()) {
      // check deadline
      const timestamp: BigNumber = await contract.proposedTimestamp();
      const delay: BigNumber = await contract.delay();
      const sec = Math.floor(Date.now() / 1000) + 5;
      if (timestamp.add(delay).gt(sec)) {
        // deadline not passed, do nothing
        console.log(
          `desired owner for ${name} already proposed, deadline not elapsed. Waiting ${timestamp
            .add(delay)
            .sub(sec)
            .toNumber()}s`,
        );
        return;
      }

      // Deadline is passed, execute
      let sender = wallet;
      if (desiredWallet && desiredWallet.address.toLowerCase() === proposed.toLowerCase()) {
        sender = desiredWallet.connect(provider);
      }

      // Sanity check: wallet is proposed
      if (sender.address.toLowerCase() !== proposed.toLowerCase()) {
        throw new Error(
          `Wallet is not proposed owner, sender: ${sender.address}, proposed: ${proposed}. Trying to accept owner for ${name} (${contract.address}).`,
        );
      }

      console.log(`accepting new owner for ${name} (${contract.address}):`);
      console.log(`- current: ${owner}`);
      console.log(`- accepting: ${desired}`);
      if (apply) {
        const tx = await contract.connect(sender).acceptProposedOwner();
        console.log(`tx: ${tx.hash}`);
        await tx.wait();
        console.log(`tx mined`);
      }
      return;
    }

    // need to propose new owner
    // Sanity check: wallet is current owner
    if (wallet.address.toLowerCase() !== owner.toLowerCase()) {
      throw new Error(`Wallet is not current owner, wallet: ${wallet.address}, owner: ${owner}`);
    }

    // propose new owner
    console.log(`proposing new owner for ${name} (${contract.address}):`);
    console.log(`- current: ${owner}`);
    console.log(`- proposing: ${desired}`);
    if (apply) {
      const tx = await contract.proposeNewOwner(desired);
      console.log(`tx: ${tx.hash}`);
      await tx.wait();
      console.log(`tx mined`);
    }
  };

  // for each deployment, update the owner
  for (const chain of Object.keys(allDeployments)) {
    const provider = getProviderFromHardhatConfig(+chain);
    console.log(`\n========== Handling execution layer ownership on ${chain} ==========`);
    for (const deployment of Object.values(allDeployments[+chain].execution)) {
      await handleOwnership(deployment.name, deployment.contract, provider);
    }

    console.log(`\n========== Handling messaging layer ownership on ${chain} ==========`);
    for (const [key, deployments] of Object.entries(allDeployments[+chain].messaging)) {
      if (key === "HubConnectors") {
        // handle separately
        continue;
      }
      await handleOwnership((deployments as Deployment).name, (deployments as Deployment).contract, provider);
    }

    // handle hub connectors if on hub
    if (HUBS[network] === chainIdToDomain(+chain)) {
      for (const deployments of Object.values(
        (allDeployments[+chain].messaging as HubMessagingOwnableDeployments).HubConnectors,
      )) {
        await handleOwnership(deployments.name, deployments.contract, provider);
      }
    }
  }
};
