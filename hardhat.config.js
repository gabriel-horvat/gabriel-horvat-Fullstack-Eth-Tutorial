require("@nomiclabs/hardhat-waffle");

const infuraUrl = process.env.REACT_APP_INFURA_URL;
const PRIVATE_KEY_1 = process.env.REACT_APP_ACCOUNT_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [RINKEBY_ACCOUNT_KEY],
    },
    // ropsten: {
    //   url: infuraUrl,
    //   accounts: [PRIVATE_KEY_1],
    // },
  },
  solidity: "0.8.3",
};
