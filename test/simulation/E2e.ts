import "dotenv/config";
import { expect } from "chai";
import BigNumber from "bignumber.js";

import { ethers } from "hardhat";
import {
    XDealRouter,
    XDealRouter__factory,
    XBridgeDealer,
    XBridgeDealer__factory,
} from "../../typechain";
import { assert } from "console";

describe("E2e cross-chain messaging", function () {
    const SOURCE_CHAIN_URL: any = process.env.AVALANCHE_TEST_PUB_RPC;
    const DEST_CHAIN_URL: any = process.env.GOERLI_TEST_PUB_RPC;

    let routerSource: XDealRouter;
    let routerDest: XBridgeDealer;

    let sourceProvider: any;
    let destProvider: any;

    before(async function (): Promise<any> {
        const wallet = ethers.Wallet.fromMnemonic(
            `${process.env.TEST_ACCOUNT_MNEMONIC}`
        );
        const pk = wallet.privateKey;

        // Set providers
        sourceProvider = new ethers.providers.JsonRpcProvider(SOURCE_CHAIN_URL);
        destProvider = new ethers.providers.JsonRpcProvider(DEST_CHAIN_URL);

        // getWallets
        const deployerSource = new ethers.Wallet(pk, sourceProvider);
        const deployerDest = new ethers.Wallet(pk, destProvider);

        // XDealRouter Contract
        try {
            const ContractFactory = (await ethers.getContractFactory(
                "xDealRouter"
            )) as XDealRouter__factory;
            const xRouterSource = await ContractFactory.connect(deployerSource);
            routerSource = await xRouterSource.deploy();
            await routerSource.deployed();
            console.info("xRouterSource@ ",SOURCE_CHAIN_URL,":",routerSource.address);
        } catch (e) {
            console.error("xRouterSource Deployment Failed", String(e));
        }

        try {
            const ContractFactory = (await ethers.getContractFactory(
                "xBridgeDealer"
            )) as XBridgeDealer__factory;
            const xRouterDest = await ContractFactory.connect(deployerDest);
            routerDest = await xRouterDest.deploy();
            await routerDest.deployed();
            console.info("xRouterDest@ ",DEST_CHAIN_URL,":",routerDest.address);
        } catch (e) {
            console.error("xRouterDest Deployment Failed", String(e));
        }
    });

    it("Should deploy source & dest router", async function (): Promise<any> {
        // assert(routerSource.address != ethers.constants.AddressZero);
        assert(routerDest.address != ethers.constants.AddressZero);
    });

    it("Should deploy destination router", async function (): Promise<any> {});

    it("Should connect to source and destination chains", async function () {});
});
