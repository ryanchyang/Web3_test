//https://eth-ropsten.alchemyapi.io/v2/DL5gqmntoicACwUaGG4WGfV-7NL2N1qQ

require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DL5gqmntoicACwUaGG4WGfV-7NL2N1qQ',
      accounts: [ '77e80456a477af6c65e58ec3e8793977279a66ada2836eeeff7f5245f438efa4' ]
    }
  }
}