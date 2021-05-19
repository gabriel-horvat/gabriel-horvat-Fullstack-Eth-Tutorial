require("@nomiclabs/hardhat-waffle");

const infuraUrl = process.env.REACT_APP_INFURA_URL;
const PRIVATE_KEY_1 = process.env.REACT_APP_ACCOUNT_KEY;

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

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
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: infuraUrl,
      accounts: [PRIVATE_KEY_1],
    },
  },
  solidity: "0.8.3",
};
