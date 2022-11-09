import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { redirectRouter } from '../../utils/common';
import { ROUTE } from '../../common/constant';
import api from '../../service/api';
import { Link } from 'react-router-dom';
class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_vocabulary: []
        }
    }
    componentDidMount() {
        api.get("/vocabulary").then((response) => {
            if (response && response.status === 200) {
                console.log(response.data);
                this.setState({
                    list_vocabulary: response.data,
                })
            }
        })
    }
    render() {
        return (
            <div>
                <h1 className='title' style={{ fontWeight: 'bold', marginBottom: '24px' }}>Words</h1>
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
                                <Rating
                                    name="customized-empty"
                                    defaultValue={2}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    max={3}
                                />
                            </div>
                        </div>
                        <span>44 trên 47 từ</span>
                    </div>
                    <div className='continue-button'>
                        <Button className='button-child' style={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', fontSize: '25px' }}>Continue</Button>
                        <img style={{ width: '64px', height: '64px', zIndex: '1' }} src='https://lmscdn.org/storage/RD9eBBBRFTtHByxMTD5ZHg0iZgMhRUYwWhEtRww2bhEIPF1YKUAPPEcRHX0mD3cpLH9JAyM=?v=151&c=_EEFAEE.png'></img>
                    </div>
                </div>
                <h1 className='title' style={{ fontSize: '21px', fontWeight: 'bold', marginBottom: '0px' }}>In progress</h1>
                <div style={{ display: 'flex' }}>
                    {/* {this.itemWords()}
                    {this.itemWords()}
                    {this.itemWords()} */}
                </div>
                {this.state.list_vocabulary.map((item, key) => {
                    return (
                        <div key={key}>
                            <div className='header-item'>
                                <h1 className='title' style={{ fontSize: '21px', fontWeight: 'bold', marginBottom: '0px' }}>{item.titleNative}</h1>
                                <Button className='button-see-all' style={{ textTransform: 'none' }}>
                                    See all
                                    <NavigateNextIcon />
                                </Button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {item.wordSets.map((item_vocabulary, key) => <ItemWords id={item.id} key={key} {...item_vocabulary} />)}
                            </div>
                        </div>
                    )
                })}
            </div >
        )
    }
}

function ItemWords({ title, titleNative, stars, wordsCount, linkPic, onClick, percentCompleted, id }) {
    return (
        <Link
            style={{ textDecoration: 'none' }} to={{ pathname: ROUTE.LIST_WORD + '/' + id }}
        >
            <Button
                className='button-word'
                style={{ borderRadius: '20px', marginLeft: '20px', display: 'block', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px' }}
                // onClick={onClick}
            >
                <div className='button-top'>
                    <span className='button-top-top'>{title}</span>
                    <span className='button-top-bottom'>{wordsCount} words</span>
                </div >
                <div className='button-bottom'>
                    <div style={{ display: 'block' }}>
                        {/* <div className='sidebar' style={{ width: '80px' }}>
                    </div> */}
                        <progress value={percentCompleted} max="100" style={{ width: '80px' }} backGround="red" > {percentCompleted}% </progress>
                        <Rating
                            style={{ fontSize: '17px', width: '80px' }}
                            name="customized-empty"
                            defaultValue={stars}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            max={3}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <img style={{ width: '50px', height: '50px', zIndex: '1' }} src={linkPic}></img>
                    </div>
                </div>
            </Button>
        </Link>

    )
}

export default Words