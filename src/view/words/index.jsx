import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ROUTE } from '../../common/constant';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import { redirectRouter } from '../../utils/common';
class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_vocabulary: [],
            // vocabulary_progress: [],
        }
    }
    componentDidMount() {
        api.get("/vocabulary").then((response) => {
            if (response && response.status === 200) {
                this.setState({
                    list_vocabulary: response.data,
                })
            }
        })
    }
    render() {
        return (
            <div className='root'>
                {/* <div style={{textAlign:'center'}}>
                    <img style={{width: '130px'}} src='https://scontent.xx.fbcdn.net/v/t1.15752-9/313199148_1949018905301733_8909389498709606620_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=C6c1p8hjJE4AX-QMdjL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRRSIlocV7uqiSeL5bKT9k76eWsWlThe_ulXCsdKbmK9w&oe=639EB0EC' alt='' />
                </div> */}
                <h2 style={{ fontWeight: 'bold', fontSize: '40px' }}>Words</h2>
                {/* <div className='topic-continue'>
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
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <span>44 trên 47 từ</span>
                    </div>
                    <div className='continue-button'>
                        <Button className='button-child' style={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', fontSize: '25px' }}>Continue</Button>
                        <img alt='' style={{ width: '64px', height: '64px', zIndex: '1' }} src='https://lmscdn.org/storage/RD9eBBBRFTtHByxMTD5ZHg0iZgMhRUYwWhEtRww2bhEIPF1YKUAPPEcRHX0mD3cpLH9JAyM=?v=151&c=_EEFAEE.png'></img>
                    </div>
                </div> */}
                <div>
                    {this.state.list_vocabulary.map((item, key) => {
                        var myOjb = item.wordSets;
                        var size = Object.keys(myOjb).length;
                        if (size > 0) {
                            return (
                                <div key={key} style={{ marginTop: '20px' }}>
                                    <div className='header-item'>
                                        <h1 className='title' style={{ fontSize: '21px', fontWeight: 'bold' }} >{item.titleNative}</h1>
                                        <Button className='button-see-all' style={{ textTransform: 'none', fontWeight: 'bold' }} onClick={() => redirectRouter(this.props, ROUTE.SEE_ALL + '/' + item.id)}>
                                            See all
                                            <NavigateNextIcon />
                                        </Button>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        {item.wordSets.map((item_vocabulary, key) => <ItemWords id={item.id} key={key} {...item_vocabulary} />)}
                                    </div>
                                </div>
                            )
                        }
                        return (<div></div>)
                    })}
                </div>

            </div >
        )
    }
}

function ItemWords({ title, titleNative, star, stars, wordsCount, linkPic, percentCompleted, id }) {
    return (
        <Link
            style={{ textDecoration: 'none' }} to={{ pathname: ROUTE.LIST_WORD + '/' + id }}
        >
            <Button
                className='button-word'
                style={{ borderRadius: '20px', marginRight: '20px', display: 'block', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px' }}
            >
                <div className='button-top'>
                    <span className='button-top-top'>{title}</span>
                    <span className='button-top-bottom'>{wordsCount} words</span>
                </div >
                <div className='button-bottom'>
                    <div style={{ display: 'block' }}>
                        <progress value={percentCompleted ? percentCompleted : 60} max="100" style={{ width: '80px' }} backGround="red" > {percentCompleted ? percentCompleted : ''}% </progress>
                        <Rating
                            style={{ fontSize: '17px', width: '80px' }}
                            name="customized-empty"
                            defaultValue={star ? star : 2}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            max={3}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <img alt='' style={{ width: '50px', height: '50px', zIndex: '1' }} src={linkPic}></img>
                    </div>
                </div>
            </Button>
        </Link>

    )
}

export default Words