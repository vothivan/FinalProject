import { useEffect, useState } from 'react';
const { ethers } = require("ethers");

const { ethereum } = window;
// const provider = new ethers.providers.Web3Provider(ethereum);
const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
export function useMetamaskWallet() {

    const [accountAddress, setAccountAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [balance, setBalance] = useState(0);

    const connectWallet = async () => {
        if (!ethereum) {
            return;
        }
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            const blc = await provider.getBalance("ethers.eth");
            setAccountAddress(accounts[0]);
            setIsConnected(true);
            setBalance(ethers.utils.formatEther(blc));
        } catch (error) {
            setIsConnected(false);
        }
    };

    useEffect(() => {
        connectWallet()
    }, [])

    return {
        isConnected,
        accountAddress,
        connectWallet,
        isInstalled: Boolean(ethereum),
        balance
    }
}