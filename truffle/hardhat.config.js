require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "e59621d7b1adf54453582cd700ddbd7ccda4af17755b112fb38b22d78425b620",
      ],
    },
  },
};
