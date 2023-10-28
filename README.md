# 🧛‍♂️ AztecWorld

AztecWorld allows someone with funds on Aztec (L2) to to swap using L1 Uniswap and then get the swapped assets back to Aztec.

⚙️ Built using NextJS and Noir.

The flow of the swapping dapp is:
- 🔥 **Withdraw**: The user withdraws their “input” assets to L1 (i.e. burn them on L2 and create a L2 to L1 message to withdraw)
- 📩 **Message**: An L2 → L1 message to swap on L1 is created
- ♻️ **Swap**: On L1, the user gets their input tokens, consumes the swap message, and executes the swap
- 💰 **Deposit**: The user deposits the “output” tokens to the output token portal so it can be deposited into L2

## Diagram

![diagram](https://docs.aztec.network/assets/ideal-img/uniswap_flow.38b8805.1030.png)

## Quickstart

To get started with AztecWorld, follow the steps below:

1. Clone this repo & install dependencies using yarn install

2. Compile the solidity contracts

```
cd contracts/l1-contracts
npx hardhat compile
```

3. Compile the Aztec.nr contracts

```
cd contracts/uniswap_contracts
aztec-cli compile --typescript ../../src/test/fixtures uniswap
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

4. Setup the fork

Since we want to use L1 Uniswap, we need the sandbox to execute against a fork of L1. This has be easily done: in your terminal add the following variables:

```
export FORK_BLOCK_NUMBER=17514288
export FORK_URL=<YOUR_RPC_URL e.g. https://mainnet.infura.io/v3/API_KEY>
```

Now run the sandbox:

```
/bin/sh -c "$(curl -fsSL 'https://sandbox.aztec.network')"
```

4. Setup the frontend

```
cd frontend
yarn start
```

The interface should automatically open. If it does not, navigate to [http://localhost:3000].

## Deployments
We deployed the L1 contracts to Goerli
- [PortalERC20](https://goerli.etherscan.io/address/0xEB9B519e1c902B9921A6d1d8aE69B90Ac3058E5F)
- [TokenPortal](https://goerli.etherscan.io/address/0xB9F8f615377247B8499f0e3A905fE160e249d8b4)
- [UniswapPortal](https://goerli.etherscan.io/address/0x902d15A7b5266576387c6E27B940b7828D3D61E4)

## Team

This project was build at ETH London 2023 by:

- [?](https://x.com/)
- [?](https://x.com/)
- [arjanjohan](https://x.com/arjanjohan/)
