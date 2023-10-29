# 🧛‍♂️ AztecSwap

AztecSwap allows someone with funds on Aztec (L2) to to swap using L1 Uniswap and then get the swapped assets back to Aztec.

⚙️ Built using NextJS and Noir.

## User flow
- 🔥 **Withdraw**: The user withdraws their “input” assets to L1 (i.e. burn them on L2 and create a L2 to L1 message to withdraw)
- 📩 **Message**: An L2 → L1 message to swap on L1 is created
- ♻️ **Swap**: On L1, the user gets their input tokens, consumes the swap message, and executes the swap
- 💰 **Deposit**: The user deposits the “output” tokens to the output token portal so it can be deposited into L2

## Diagram

![diagram](https://docs.aztec.network/assets/ideal-img/uniswap_flow.38b8805.1030.png)

## Quickstart

To get started with AztecSwap, follow the steps below:

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

4. Run the sandbox:

```
/bin/sh -c "$(curl -fsSL 'https://sandbox.aztec.network')"
```

5. Deploy the Aztec.nr contracts:

```
cd contracts/uniswap_contracts/uniswap/target
aztec-cli deploy Uniswap.json
```

6. Setup the frontend

```
cd frontend
yarn start
```

The interface should automatically open. If it does not, navigate to [http://localhost:3000].

## Deployments
Deployed L1 contracts on Goerli
- [PortalERC20](https://goerli.etherscan.io/address/0x9CD811F498029D8760e6dA4A31A4B08b77154A20)
- [TokenPortal](https://goerli.etherscan.io/address/0x6DBD391Ff3A82079E4188c517452a8d3146b7Abf)
- [UniswapPortal](https://goerli.etherscan.io/address/0x5E60F6BFa0e1B52b1bf270cd41b151642Fc4Da65

Aztec L2 contracts are deployed locally on the sandbox

## Team

This project was build at ETH London 2023 by:

- [Labdhi Jain](https://www.linkedin.com/in/labdhi-jain/)
- [Edoardo Diana](https://www.linkedin.com/in/edoardo-diana-64b5b81a5/)
- [arjanjohan](https://x.com/arjanjohan/)
