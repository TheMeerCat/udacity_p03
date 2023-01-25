const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "";
const infuraKey = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
        network_id: 5,       // goerli's id
        gas: 4500000,        // goerli has a lower block limit than mainnet
        gasPrice: 82252383287
    }
  },
  compilers: {
    solc: {
      version: "^0.8.13",  
    }
  },
};