require('@nomiclabs/hardhat-waffle')
require('solidity-coverage')
require('hardhat-gas-reporter')

module.exports = {
  solidity: '0.8.9',
  paths: {
    root: './dapp-contract'
  },
  plugins: [
    'solidity-coverage',
  ],
  networks: {
    hardhat: {
      chainId: 1337
    },
  }
}
