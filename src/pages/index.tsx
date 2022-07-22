import type { NextPage } from "next";
import Head from "next/head";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import { useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { injected } from "config/constants/wallets";
import { connectorLocalStorageKey } from "config/connectors/index";

const Home: NextPage = () => {
    const { account, chainId, error, activate } = useActiveWeb3React();

    useEffect(() => {
        console.log(window.localStorage.getItem(connectorLocalStorageKey));

        activate(injected, undefined, true).catch((error) => {
            activate(injected);
        });
    }, []);
    return (
        <div>
            <Head>
                <title>Create Dapp</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {account}---
                {chainId}
            </div>
        </div>
    );
};

export default Home;
