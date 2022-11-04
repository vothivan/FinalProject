import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { Height } from '@material-ui/icons';
class Words extends Component {
    itemWords = () => {
        return (
           <Button className='button-word' style={{borderRadius: '20px', marginLeft: '20px', backgroundColor: 'rgb(99, 97, 233)'}}>
            <div className='button-top'>
                <span className='button-top-top'>Trái cây và rau củ</span>
                <span className='button-top-bottom'>47 từ</span>
            </div >
            <div className='button-bottom'>

            </div>
        </Button> 
        )
    }
    render() {
        return (
            <div>
                <h1 className='title'>Từ vựng</h1>
                <div className='topic-continue'>
                    <span className='title-small'>Thức ăn</span>
                    <span className='title-big'>Trái cây và rau củ</span>
                    <div className='topic-continue-point'>
                        <div className='topic-continue-point-bottom'>
                            <div className='sidebar'>
                                <div className='sidebar-point'>

                                </div>
                            </div>
                            <div className='star'>
                            </div>
                        </div>
                        <span>44 trên 47 từ</span>
                    </div>
                    <div className='continue-button'>
                        <Button className='button-child' style={{ borderRadius: '20px' }}>Tiếp tục</Button>
                        <img style={{ width: '64px', height: '64px', zIndex: '1' }} src='https://lmscdn.org/storage/RD9eBBBRFTtHByxMTD5ZHg0iZgMhRUYwWhEtRww2bhEIPF1YKUAPPEcRHX0mD3cpLH9JAyM=?v=151&c=_EEFAEE.png'></img>
                    </div>
                </div>
                <h1 className='title' style={{ fontSize: '21px'}}>Đang tiến hành</h1>
                {this.itemWords()}
            </div >
        )
    }
}

export default Words