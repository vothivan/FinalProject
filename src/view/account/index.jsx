import { Button } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { redirectRouter } from '../../utils/common';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import api from '../../service/api';
import './style.css'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rewards: 0,
            energyValue: 0,
            skillGrammar: 0,
            skillListening: 0,
            skillPronouncing: 0,
            skillVocabulary: 0,
            xp: 0,
        }
    }
    async componentDidMount() {
        const res = await api.get('/accounts/profile');
        if (res && res.status === 200) {
            this.setState({
                energyValue: res.data.energyValue,
                rewards: res.data.rewards,
                skillGrammar: res.data.skillGrammar,
                skillListening: res.data.skillListening,
                skillPronouncing: res.data.skillPronouncing,
                skillVocabulary: res.data.skillVocabulary,
                xp: res.data.xp,
            })
        }

    }

    render() {
        const { energyValue, xp, rewards, skillGrammar, skillListening, skillPronouncing, skillVocabulary } = this.state;
        return (
            <div style={{ paddingLeft: '10px', paddingRight: '6px' }}>
                <div className='header'>
                    <div className='header-left' style={{ display: 'flex' }}>
                        <div>
                            <img alt='' src='https://s2.coinmarketcap.com/static/img/coins/64x64/20581.png' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className='header-left-right' style={{ display: 'block', fontSize: '19px', lineHeight: '24px', marginLeft: '6px', marginRight: '6px' }}>
                            <div style={{ fontSize: '16px', lineHeight: '13px', color: 'black', fontWeight: 'bold' }}>{xp}</div>
                            <div className='header-left-right-right' style={{ fontSize: '12px', lineHeight: '13px' }}>= {rewards} USDC</div>
                        </div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div className='point'>
                                    <FlashOnIcon style={{ color: 'yellow' }} />
                                    {energyValue}
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className='header-right'>
                        <Button onClick={() => redirectRouter(this.props, '/login')}>
                            <ExitToAppIcon style={{ color: 'black' }} />
                        </Button>
                    </div>
                </div>
                <div className='talent' style={{ marginTop: '20px' }}>
                    <Button className='talent-item' style={{ textTransform: 'none', fontWeight: '600' }} onClick={() => redirectRouter(this.props, '/buy-energy')}>
                        Buy Genery
                    </Button>
                    <Button className='talent-item' style={{ textTransform: 'none', fontWeight: '600' }} onClick={() => redirectRouter(this.props, '/pay-in')}>
                        Transfer Money
                    </Button>
                </div>
                <h3 className='title-skill'>
                    Review statistics
                </h3>
                <div className='skill-body'>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <LibraryBooksIcon style={{ fontSize: '50px', color: 'rgb(31 65 231 / 87%)' }} />
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Vocabulary</div>
                            <div style={{ fontWeight: 'bold', fontSize: '22px' }}>{skillVocabulary}</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <RecordVoiceOverIcon style={{ fontSize: '50px', color: 'rgb(30 191 58)' }} />
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Speaking</div>
                            <div style={{ fontWeight: 'bold', fontSize: '22px' }}>{skillPronouncing}</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <MusicVideoIcon style={{ fontSize: '50px', color: '#f7b845' }} />
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Listening</div>
                            <div style={{ fontWeight: 'bold', fontSize: '22px' }}>{skillListening}</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <EventAvailableIcon style={{ fontSize: '50px', color: 'rgb(253 90 63)' }} />
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Grammar</div>
                            <div style={{ fontWeight: 'bold', fontSize: '22px' }}>{skillGrammar}</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Account