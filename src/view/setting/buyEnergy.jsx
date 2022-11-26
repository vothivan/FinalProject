import React, { useEffect, useState } from 'react';
import './style.css';
import { Component } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';
import api from '../../service/api';

const chooseEnergys = [10, 20, 50, 100, 200, 500];

const APP_WALLET = "0x3241441B278dfc05C600FE5824ea36a498E730f5";

async function postBscTransfer(txHash) {

    for (let i = 0; i < 3; i++) {
        try {
            return await api.post('/bsc-transfer/' + txHash);
        } catch (error) {
            if (i === 2) {
                throw error;
            }
        }
    }

}

export default function BuyEnergy(props) {

    const [energy, setEnergy] = useState(0);

    const chooseEnergy = energy => {
        setEnergy(energy);
    }

    const wallet = useWallet();

    console.log(wallet);

    useEffect(() => {

        if (wallet.account) {
            api.post('/accounts/profile', { nftWalletAddress: wallet.account })
        }
    }, [wallet.account || "-1"])



    const buyEnergy = () => {


        if (energy <= 0) {
            return;
        }

        const bnbValue = String(energy / 1000);
        const wei = Web3.utils.toWei(bnbValue);
        const hexValue = Web3.utils.toHex(wei);
        const hexGas = Web3.utils.toHex(
            Web3.utils.toWei('0.00021')
        )
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: wallet.account,
                    to: APP_WALLET,
                    value: hexValue
                },
            ],
        }).then(postBscTransfer)
            .catch((error) => console.error);

    }


    if (wallet.status !== 'connected') {
        return (
            <div>
                <Button type='primary' onClick={() => wallet.connect()}>
                    Please connect the wallet
                </Button>
            </div>
        )
    }

    return (
        <div className='title-setting'>

            <div>
                <Button>
                    <Link to={'/account'}>
                        <ArrowBack style={{ marginRight: 'auto' }} />
                    </Link>
                </Button>
                <div style={{ textAlign: 'center' }}><h2>Buy Energy</h2></div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4 >Please enter enery (1000 energy ~ 1 BNB)</h4>
                <h4>Selected: {energy} energy ~ {energy / 1000.0} BNB</h4>
            </div>
            <div style={{ flexGrow: '1', textAlign: 'center', marginTop: '30px' }}>
                <div> <a href={"https://testnet.bscscan.com/address/" + wallet.account} target="_blank" rel="noopener noreferrer">
                    {wallet.account}</a></div>
                <div>Balance: {wallet.balance == '-1' ? '0' : Web3.utils.fromWei(wallet.balance)} BNB</div>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3} style={{ marginLeft: '1px' }}>
                        {chooseEnergys.map((_energy) => (
                            <Grid key={_energy} item xs={4}>
                                <Button color={_energy !== energy ? 'primary' : 'secondary'} className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }}
                                    onClick={() => chooseEnergy(_energy)}>
                                    {_energy}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginTop: '25px', textAlign: 'center' }}>
                <Button
                    onClick={buyEnergy}
                    variant="contained"
                    style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                >
                    Buy
                </Button>
            </div>

        </div >
    )
}