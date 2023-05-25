# Stargate Cross-chain testing

**End-to-end cross-chain swap testing**

Testing cross-chain messages or swaps is not a regular smart contract integration test routine. Scripts need to be developed outside of the local test suite and commonly require a set of arguments to the test command.

With this single-file approach, I intend to demonstrate the integration of cross-chain testing into the regular `hardhat test` command.

With the help of two JsonRPC providers, the test set-up will deploy the source and destination contracts and test the token swap between two different chains using the Stargate protocol.

The test will sleep (delay execution) to allow transaction processing on Stargate contracts and start a cycle of queries to monitor its events until the desired parameters are asserted along with the update of the receiving contract balance.

**Why Stargate?**

Stargate is the first bridge to solve the bridging trilemma.

Existing bridges are forced to make trade-offs on the following core bridge features:
-   Instant Guaranteed Finality
-   Native Assets: No wrapped assets on the destination chain.
-   Unified Liquidity: Access to a single liquidity pool across multiple chains.
  
**Configuration**
-   For the end-to-end testing to be completed you will need a testing account with test funds. The test script will try to pull the private key defined on the ```.env```file to create the deployer wallet and pay for the transactions.
-   For the URL endpoints, I will use ANKER public RPC nodes.

**Testing**

 - Install dependencies with ```npm install```
 - Compile contracts with ```hardhat compile```
 - Test End-to-end cross-chain ```hardhat test```



  

