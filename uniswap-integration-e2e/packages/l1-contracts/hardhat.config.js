require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },

    goerli: {
      url: "https://goerli.infura.io/v3/",
      accounts: [""]
    }
  },
  etherscan: {
    apiKey: {
      goerli: ''
    }
  }
};
