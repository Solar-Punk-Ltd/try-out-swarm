# Swarm Node Quick Guide

## Disclaimer

This is an **unofficial guide** to setting up and interacting with a Swarm light node. It provides a quick and straightforward method to deploy a node, fund it, and perform basic interactions. For comprehensive and official documentation, please visit the [Swarm Docs](https://docs.ethswarm.org/).

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setting Up the Node](#setting-up-the-node)
- [Starting the Node](#starting-the-node)
- [Funding the Node](#funding-the-node)
  - [Sending xDai](#sending-xdai)
  - [Sending xBzz](#sending-xbzz)
- [Interacting with the Node](#interacting-with-the-node)
- [Additional Resources](#additional-resources)

---

## Prerequisites

Before setting up your Swarm light node, ensure you have the following:

- A Linux or macOS environment
- `curl` installed for API interaction
- `node.js` installed (optional, for scripts like `sendxDai.js`)
- `swarm-cli` (optional, for higher-level interactions)

For installation and environment setup, refer to the [official installation guide](https://docs.ethswarm.org/docs/bee/installation/install/).

---

## Setting Up the Node

Your node requires a dedicated directory to store essential files, including keys. This directory can be created manually or via a script.

### Example: Using `genBeeFolder.sh`

You can use the `genBeeFolder.sh` script to create a directory named `bee-data-dir` inside the `bee` folder. This script also generates a `password` file containing a randomly generated passphrase for your node's key.

For more details about the Bee node file structure, refer to the [Swarm documentation](https://docs.ethswarm.org/docs/bee/working-with-bee/backups/#files).

---

## Starting the Node

To start a Swarm light node, you need the **Bee binary**, available at:
[Swarm Bee Releases](https://github.com/ethersphere/bee/releases)

1. Download the latest Bee binary (latest version: **2.4.0** at the time of writing and for mac/unix this is included in the dist folder).
2. Place the binary in an accessible location.
3. Use a startup script such as `runBee.sh` to start the node.

Note: If you are in mac it can happen that you have to enable the execution of your binary. Settings > Privacy & Security > Security > Allow execution. Also make sure that your binary is executable.

### Example: Using `runBee.sh`

Modify the script to:

- Set the correct binary path
- Point to the appropriate data directory
- Configure additional parameters as needed

For reference on configuration parameters, check the [Bee configuration documentation](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration/).

### Node Modes

The script will start your node as a **light node** with a public RPC. For details on different node types (full, light, ultra-light), see the [installation guide](https://docs.ethswarm.org/docs/bee/installation/install/#full-node-light-node-ultra-light-node).

---

## Funding the Node

Before your node becomes fully operational, it must deploy a **chequebook** contract. This process requires **xDai** for gas fees and **xBzz** for network interactions. [For more](https://docs.ethswarm.org/docs/concepts/incentives/bandwidth-incentives/#chequebook-contract)

### Sending xDai

When starting for the first time, your node will generate an **Ethereum address** and wait for **xDai** to be deposited. You can:

- Send xDai manually to this address.
- Use the `sendxDai.js` script for automation.

Modify `sendxDai.js` to:

- Specify the sender address
- Set the desired amount of xDai

More about xDai: [xDai Token Docs](https://docs.ethswarm.org/docs/references/glossary/#xdai-token)

### Sending xBzz

To perform actions such as writing data to Swarm, your node needs **xBzz** tokens. These can be sent manually or via script.

More about xBzz: [xBzz Token Docs](https://docs.ethswarm.org/docs/references/glossary/#xbzz-token)

---

## Interacting with the Node

Once your node is running, you can interact with it via API, CLI, or SDKs.

### API Interaction

Use `curl` to send direct HTTP requests:

```sh
curl http://localhost:1633/status   # Check node status
curl http://localhost:1633/wallet   # View wallet details
```

For full API documentation, see the [Swarm OpenAPI spec](https://github.com/ethersphere/bee/blob/master/openapi/Swarm.yaml).

### CLI Interaction

Use the `swarm-cli` tool for easier interactions:

- [Swarm CLI Repository](https://github.com/ethersphere/swarm-cli)

### SDK Interaction

For programmatic interactions, check out the **Bee-JS** SDK in the [Bee-Js Section](https://github.com/Solar-Punk-Ltd/try-out-swarm/tree/master/bee-js)

---

## Additional Resources

- **Official Swarm Documentation:** [https://docs.ethswarm.org/](https://docs.ethswarm.org/)
- **Swarm GitHub Repository:** [https://github.com/ethersphere/bee](https://github.com/ethersphere/bee)
- **Swarm Discord Community:** [https://discord.gg/swarm](https://discord.gg/swarm)

This guide provides a fast and efficient way to get started with Swarm. For in-depth details, always refer to the official documentation.
