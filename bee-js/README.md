# Bee-js SDK Quick Guide

## Introduction

The **Bee-js** SDK provides a simple and programmatic way to interact with your Bee node on Swarm. You can find the official repository here:
🔗 [Bee-js GitHub](https://github.com/ethersphere/bee-js)

For basic interactions such as **uploading and downloading** data, refer to the `simple.ts` script in this repository.

---

## Table of Contents

- [Uploading Data to Swarm](#uploading-data-to-swarm)
- [Stamp Requirements](#stamp-requirements)
- [Running `simple.ts`](#running-simplets)
- [Advanced Usage with `cheatsheet.ts`](#advanced-usage-with-cheatsheetts)
- [Upcoming Changes](#upcoming-changes)
- [Additional Resources](#additional-resources)

---

## Uploading Data to Swarm

To upload data to Swarm using Bee-js, you need to purchase a **postage stamp**. This is a requirement for writing data to the network. Learn more about postage stamps here:
🔗 [Swarm Documentation - Buy a Stamp Batch](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch/)

### Methods to Purchase a Stamp:

- **Manually** through the Bee API
- **Using `swarm-cli`**
- **Programmatically** via Bee-js (as seen in `simple.ts`)

---

## Running `simple.ts`

The `simple.ts` script demonstrates a **basic Swarm interaction**:

1. It **buys a stamp** (this may take up to **5 minutes**).
2. It **uploads a JSON object** (`Hello, world!`).
3. It **downloads the same object** and prints it.

### **Prerequisites**

- A **running Bee node** (`http://localhost:1633`)
- Node synced with the network (**first-time sync can take 10-15 minutes**)
- Sufficient **xBzz balance** for purchasing a stamp

### **Run the Script**

You may use the following command to execute `simple.ts`:

```sh
node --loader ts-node/esm simple.ts
```

For details, check the script itself.

---

## Advanced Usage with `cheatsheet.ts`

For more advanced Bee-js use cases, refer to the `cheatsheet.ts` file. It provides examples covering:

- Batch management
- Chunk operations
- Advanced Swarm interactions

For conceptual understanding, visit the official documentation:
🔗 [Swarm Docs](https://docs.ethswarm.org/)

---

## Upcoming Changes

🚀 The **Bee-js version used here is an upcoming release** that introduces major enhancements. It is not yet available in stable releases.

To track the latest updates, check this branch:
🔗 [Upcoming Bee-js Features](https://github.com/ethersphere/bee-js/tree/feat/add-primitives)

📢 **New documentation and official releases are expected in the coming weeks. Stay tuned!**

---

## Additional Resources

- **Bee-js GitHub Repository:** [https://github.com/ethersphere/bee-js](https://github.com/ethersphere/bee-js)
- **Swarm CLI:** [https://github.com/ethersphere/swarm-cli](https://github.com/ethersphere/swarm-cli)
- **Official Swarm Docs:** [https://docs.ethswarm.org/](https://docs.ethswarm.org/)

This guide serves as a quick reference for developers working with the upcoming Bee-js SDK. For deeper insights, always refer to the official documentation.
