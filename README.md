# Cross-chain Deal

**End-to-end cross-chain swaps built on Stargete**

With the help of two JsonRPC providers, the test set-up will deploy the source and destination contracts on different networks and test the token swap between two different chains using the Stargate protocol.

-  Multiple RPC providers into the test file
-  Deployment to different networks
- Listener function attached to each deployed contract
-  Wait and validate updates

The test will sleep (delay execution) to allow transaction processing on Stargate contracts to happen, and start a cycle of queries to monitor its events until the desired properties are asserted for a valid test.

**Configuration**
-   For the end-to-end testing to be completed you will need a testing account with [test funds](https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/testnet-faucet). Select the testnets of choice at the [Stargate Site](https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/testnet), select a [token here](https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/testnet-faucet), and request funds.
-   The test script will try to pull the private key defined on the ```.env```file to create the deployer wallet and pay for the transactions.
-   For the URL endpoints, I will use ANKER public RPC nodes.

**Testing**

 - Install dependencies with ```npm install```
 - Compile contracts with ```hardhat compile```
 - Test End-to-end cross-chain ```hardhat test```
  
**Why Stargate?**

Stargate is the first bridge to solve the bridging trilemma.

Existing bridges are forced to make trade-offs on the following core bridge features:
-   Instant Guaranteed Finality
-   Native Assets: No wrapped assets on the destination chain.
-   Unified Liquidity: Access to a single liquidity pool across multiple chains.

**Contribute**

Ping me on Twitter


[![Twitter Follow](https://img.shields.io/twitter/follow/danielles0xG?label=Follow%20me%20%40danielles0xG&style=social)](https://twitter.com/danielles0xG)