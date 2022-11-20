import { Button} from '@material-ui/core';
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
import './style.css'

class Account extends Component {
    render() {
        return (
            <div style={{ paddingLeft: '10px', paddingRight: '6px' }}>
                <div className='header'>
                    <div className='header-left' style={{ display: 'flex' }}>
                        <div>
                            <img alt='' src='https://s2.coinmarketcap.com/static/img/coins/64x64/20581.png' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className='header-left-right' style={{ display: 'block', fontSize: '19px', lineHeight: '24px', marginLeft: '6px' }}>
                            <div style={{ fontSize: '16px', lineHeight: '13px', color: 'black', fontWeight: 'bold' }}>1.26</div>
                            <div className='header-left-right-right' style={{ fontSize: '12px', lineHeight: '13px' }}>=0.00 USDC</div>
                        </div>
                    </div >
                    <div className='header-right'>
                        <Button onClick={() => redirectRouter(this.props, '/select_character')}>
                            <SettingsIcon style={{ color: 'black', marginRight: '12px' }} />
                        </Button>
                        <Button onClick={() => redirectRouter(this.props, '/login')}>
                            <ExitToAppIcon style={{ color: 'black' }} />
                        </Button>
                    </div>
                </div>
                <div className='personage'>
                    <div style={{ marginRight: '12px' }}>
                        <Avatar style={{ height: '140px', width: '140px' }} src='https://lmscdn.org/storage/base_avatars/base_max.png' />
                    </div>
                    <div>
                        <span className='name'>Vannie</span>
                        <div style={{ display: 'flex' }}>
                            <div className='point'>
                                <FlashOnIcon style={{ color: 'yellow' }} />
                                100
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='title-skill'>
                    Skills
                </h3>
                <div className='skill-body'>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <LibraryBooksIcon style={{fontSize: '50px', color: 'rgb(31 65 231 / 87%)'}}/>
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Vocabulary</div>
                            <div style={{fontWeight: 'bold', fontSize: '22px'}}>22</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <RecordVoiceOverIcon style={{fontSize: '50px', color: 'rgb(30 191 58)'}}/>
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Speaking</div>
                            <div style={{fontWeight: 'bold', fontSize: '22px'}}>18</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <MusicVideoIcon style={{fontSize: '50px', color: '#f7b845'}}/>
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Listening</div>
                            <div style={{fontWeight: 'bold', fontSize: '22px'}}>18</div>
                        </div>

                    </div>
                    <div className='skill-body-item'>
                        <div style={{ marginRight: '10px' }}>
                            <EventAvailableIcon style={{fontSize: '50px', color: 'rgb(253 90 63)'}}/>
                        </div>
                        <div className='skill-body-item-2'>
                            <div>Grammar</div>
                            <div style={{fontWeight: 'bold', fontSize: '22px'}}>20</div>
                        </div>

                    </div>
                </div>
                <div className='talent'>
                    <div className='talent-item'>
                        talent
                    </div>
                    <div className='talent-item'>
                        rewards
                    </div>
                    <div className='talent-item'>
                        learning speed
                    </div>
                </div>
            </div>
        )
    }
}

export default Account