import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../../utils/constants'

export const CertificationContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.web3Provider(ethereum);
    const signer = provider.getSigner();
    const certificationContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        certificationContract
    }); 
}

export const CertificationProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({ method: 'eth_accounts'});

        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <CertificationContext.Provider  value={{ connectWallet,currentAccount }}>
            {children}
        </CertificationContext.Provider>
    );
}