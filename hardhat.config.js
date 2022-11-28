// require("@nomicfoundation/hardhat-toolbox");

//https://eth-goerli.g.alchemy.com/v2/NK29nTP9DJoqJ6kANl9uwNyfTKb1tsjI

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/wL1maDWm41DH9mKb0zgKyDNSzykduI4T",
      accounts: [
        `fb80d9e3bf654405fce8b28c7b6eb8ba8708efe3d5057e8dceb5fb525f7a4d4c`,
      ],
    },
  },
};
