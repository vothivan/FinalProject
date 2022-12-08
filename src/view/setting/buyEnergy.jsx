import React, { useEffect, useState } from 'react';
import './style.css';
import { Component } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';
import api from '../../service/api';
import LoadingOverlay from 'react-loading-overlay';
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import { redirectRouter } from '../../utils/common';

const chooseEnergys = [10, 20, 50, 100, 200, 500];

const APP_WALLET = "0x3241441B278dfc05C600FE5824ea36a498E730f5";

async function postBscTransfer(txHash) {
    // mã giao dịch txHash
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
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);

    const chooseEnergy = energy => {
        setEnergy(energy);
    }

    const wallet = useWallet();
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
        setLoading(true)
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
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
                setPopup(true);
            })
    }

    const handleClose = () => {
        redirectRouter(props, '/account')
    }

    if (wallet.status !== 'connected') {
        return (
            <div>
                <Button>
                    <Link to={'/account'}>
                        <ArrowBack style={{ marginRight: 'auto' }} />
                    </Link>
                </Button>
                <div style={{ display: 'block', textAlign: 'center', textTransform: 'none', fontWeight: '600' }}>
                    <div style={{ marginBottom: '50px' }}>Do you have your wallet?</div>

                    <Button type='primary' onClick={() => wallet.connect()} style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', marginBottom: '10px', marginTop: '10px', color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '18px', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}>
                        <span>Please connect the wallet</span>
                    </Button>
                </div>

            </div>
        )
    }

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2)
        }
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1)
        }
    }))(MuiDialogActions);

    return (
        <LoadingOverlay active={loading} spinner style={{ height: '100%'}} >
            <div className='title-setting'>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button>
                            <Link to={'/account'}>
                                <ArrowBack style={{ marginRight: 'auto' }} />
                            </Link>
                        </Button>
                        <div style={{ marginRight: '10px' }}>
                            <a style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }} href={"https://testnet.bscscan.com/address/" + wallet.account} target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="contained"
                                    style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                                >
                                    Wallet
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2>Buy Energy</h2>
                        <h4>Balance: {wallet.balance == '-1' ? '0' : Web3.utils.fromWei(wallet.balance)} BNB</h4>
                    </div>

                </div>
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h5 style={{ color: 'rgb(0 0 0 / 54%)' }}>Please enter energy (1000 energy ~ 1 BNB)</h5>
                    <h4>Selected: <b>{energy}</b> energy ~ <b>{energy / 1000.0}</b> BNB</h4>
                </div>
                <div style={{ flexGrow: '1', textAlign: 'center', marginTop: '20px' }}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3} style={{ marginLeft: '30px', marginRight: '30px' }}>
                            {chooseEnergys.map((_energy) => (
                                <Grid key={_energy} item xs={4}>
                                    <Button color={_energy !== energy ? 'primary' : 'secondary'} className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px', background: '#e1bec3', height: '80px', fontSize: '16px' }}
                                        onClick={() => chooseEnergy(_energy)}>
                                        {_energy}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Button
                        onClick={buyEnergy}
                        variant="contained"
                        style={{ background: energy > 0 ? 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)' : '', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                    >
                        Buy
                    </Button>
                </div>
            </div >
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={popup}
                style={{ overflowY: 'none' }}
            >
                <DialogContent style={{ fontWeight: '600', width: '300px', textAlign: 'center' }}>
                    You have successfully bought {energy} energy!
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center', width: '300px' }}>
                    <Button onClick={handleClose} color="primary" style={{ fontWeight: '600', fontSize: '18px', textTransform: 'none' }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </LoadingOverlay>
    )
}
