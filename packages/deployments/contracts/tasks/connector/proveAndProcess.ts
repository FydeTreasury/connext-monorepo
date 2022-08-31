import { constants, Contract } from "ethers";
import { task } from "hardhat/config";

import { Env, getDeploymentName, getMessagingProtocolConfig, getProtocolNetwork, mustGetEnv } from "../../src/utils";

type TaskArgs = {
  message: string;
  env?: Env;
};

export default task("prove-and-process", "Call `Connector.proveAndProcess()` to process message")
  .addParam("message", "Message body to prove")
  .addOptionalParam("env", "Environment of contracts")
  .setAction(async ({ env: _env, message }: TaskArgs, { deployments, ethers }) => {
    let { deployer } = await ethers.getNamedSigners();
    if (!deployer) {
      [deployer] = await ethers.getUnnamedSigners();
    }

    console.log("message:", message);
    const env = mustGetEnv(_env);
    console.log("env:", env);
    const network = await ethers.provider.getNetwork();
    const protocolConfig = getMessagingProtocolConfig(getProtocolNetwork(network.chainId, env));

    const deploymentName = getDeploymentName(
      `${protocolConfig.configs[network.chainId].prefix}${
        +network.chainId === protocolConfig.hub ? "L1" : "L2"
      }Connector`,
      env,
    );
    const deployment = await deployments.get(deploymentName);
    const address = deployment.address;
    console.log(deploymentName, "connector:", address);

    const connector = new Contract(address, deployment.abi, deployer);

    const tx = await connector.proveAndProcess(message, Array(32).fill(constants.HashZero), 0);
    console.log("connector proveAndProcess tx: ", tx);
    const receipt = await tx.wait();
    console.log("connector proveAndProcess tx mined: ", receipt.transactionHash);
  });
