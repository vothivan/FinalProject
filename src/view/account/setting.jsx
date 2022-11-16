import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMetamaskWallet } from '../../common/hooks';

function SelectCharacter(props) {

    const wallet = useMetamaskWallet();

    console.log(wallet);

    return (
        <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <div>
                <Button>
                    <Link to={'/account'}>
                        <ArrowBack style={{ marginRight: 'auto' }} />
                    </Link>
                </Button>
                <div style={{ textAlign: 'center' }}><h2>Choose a character</h2></div>
            </div>
            <Button style={{ width: '100%', height: '250px', borderRadius: '20px', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', display: 'block', textTransform: 'none' }}>
                <img alt='' src='https://web.letmespeak.org/static/media/PaidCharacter.89e1518fa893dbe1013b.png' style={{ width: '80px', height: '80px' }} />
                <div><h3>Ready-to-use characters</h3></div>
                <div><h4>You'll be able to learn and earn</h4></div>
                <Button href='' style={{ textTransform: 'none', color: 'rgb(45, 129, 255)', fontSize: '18px', fontWeight: '400', alignItems: 'center' }}>Go to marker place <ArrowForwardIcon /></Button>
            </Button>
            {
                wallet.isInstalled ? <Button onClick={wallet.connectWallet} style={{ width: '100%', height: '250px', borderRadius: '20px', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', marginTop: '30px' }}>
                    {
                        wallet.isConnected ? 'Connected wallet address ' + wallet.accountAddress + ' Balance ' + wallet.balance : 'Connect Metamask'
                    }
                </Button>
                    :
                    <Button style={{ width: '100%', height: '250px', borderRadius: '20px', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', marginTop: '30px' }}>
                        <a href='https://metamask.io/' rel="noopener noreferrer" target='_blank'> <span>Please install Metamask</span></a>
                    </Button>
            }


        </div>
    )

}
export default SelectCharacter