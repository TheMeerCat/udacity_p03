# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
yarn
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your termin^al should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
yarn dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Deployed Contracts
> Network name: 'goerli'
> Network id: 5

Farmer
- 0x9c6ceafc7078dfc1b42cab865f9c970894a571cec867c21122ead4996f77893a

Distributor
- 0x0a7a9ed21d9e7378a0d81690364e83e4cdb6c53f0458143c7ad3557900eda932

Retailer
- 0xffc1b5f587a88afe8e0bf32f9d3ba3ac6059d9cd1be48c38e235605701f576a2

Consumer
- 0x509448235691ec7e7cdf3fa6c379c137c751ad0d0ce439a3015852793f69a9af

SupplyChain
- 0x39f924292993088f5c8db5ed5c0918efb36524f0180c10840526f78c8937eadd

## Libraries

- lite-server v2.4.0 (development environment)
- truffle-hdwallet-provider v1.0.17 (provides access to Görli network)
- truffle-assertions v0.9.2 (testing helper)
- truffle-contract v4.0.31 (enables access to the contract from UI)
- web3 v1.8.1 (enables access to the blockchain and account from UI)

## Versions

- Truffle v5.7.1 (core: 5.7.1)
- Ganache v7.6.0
- Solidity - ^0.8.13 (solc-js)
- Node v19.4.0
- Web3.js v1.8.1

## Diagrams

State, Sequence, Activity and Data diagrams are located in directory `/diagrams`.