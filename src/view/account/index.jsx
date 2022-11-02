import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { redirectRouter } from '../../utils/common';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.css'

class Account extends Component {
    render() {
        return (
            <div style={{ paddingLeft: '10px', paddingRight: '6px' }}>
                <div className='header'>
                    <div className='header-left' style={{ display: 'flex' }}>
                        <div>
                            <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/20581.png' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className='header-left-right' style={{ display: 'block', fontSize: '19px', lineHeight: '24px', marginLeft: '6px' }}>
                            <div style={{ fontSize: '16px', lineHeight: '13px', color: 'black' }}>1.26</div>
                            <div className='header-left-right-right' style={{ fontSize: '12px', lineHeight: '13px' }}>=0.00 USDC</div>
                        </div>
                    </div >
                    <div className='header-right'>
                        <SettingsIcon style={{ color: 'black', marginRight: '12px' }} />
                        <Button onClick={() => redirectRouter(this.props, '/login')}>
                            <ExitToAppIcon style={{ color: 'black' }}/>
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
                <div className='level'>
                    <span className='level-left'>3</span>
                    <div className='level-right'>
                        <div className='level-right-top'>
                            <span>
                                Cấp độ 3
                            </span>
                            <span>
                                1436 / 2500 XP
                            </span>
                        </div>
                        <div className='level-right-bottom'>

                        </div>
                    </div>
                </div>
                <div className='level'>
                    <span className='day-left'></span>
                    <div className='level-right'>
                        <div className='level-right-top'>
                            <span>
                                Ngày còn thị thực
                            </span>
                            <span>
                                0 / 30
                            </span>
                        </div>
                        <div className='level-right-bottom'>

                        </div>
                    </div>
                </div>
                <h3 className='title-skill'>
                    Kỹ năng
                </h3>
                <div className='skill-body'>
                    <div className='skill-body-item'>
                        Từ vựng
                    </div>
                    <div className='skill-body-item'>
                        Phát âm
                    </div>
                    <div className='skill-body-item'>
                        Nghe
                    </div>
                    <div className='skill-body-item'>
                        Ngữ pháp
                    </div>
                </div>
                <div className='talent'>
                    <div className='talent-item'>
                        Tài năng
                    </div>
                    <div className='talent-item'>
                        Thưởng
                    </div>
                    <div className='talent-item'>
                        Tốc độ học
                    </div>
                </div>
            </div>
        )
    }
}

export default Account