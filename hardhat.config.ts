import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const GOERLI_PRIVATE_KEY = 'b7a34dcd511e1b2f43cdb9ec452782c832dca526e760ca29d5652a83e2cde8cc';

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/3960f94135be47459d172d3e0482eb39',
      accounts: [GOERLI_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: 'MZ89MUEMR53UTK84BG8MVV9CHDARDH8FX6',
  },
};

export default config;
