import { Chip, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/constant';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import api from '../../service/api';
import './style.css'

class Grammar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listTopic: [],
        }
    }

    componentDidMount() {
        api.get('/grammar').then((res) => {
            if (res && res.status === 200) {
                this.setState({
                    listTopic: res.data,
                })
            }
        })
    }

    render() {
        return (
            <div className='root'>
                <h1 className='title'>
                    Grammar
                </h1>
                <h4 style={{ fontFamily: 'cursive' }}>Practice grammar rules and earn stars</h4>
                <div>
                    <h3>Intermediate</h3>
                    {this.state.listTopic.filter((item) => item.level === 'INTERMEDIATE').map((itemTopic, key) => <ItemTopic key={key} {...itemTopic}/>)}
                    <h3>Advanced</h3>
                    {this.state.listTopic.filter((item) => item.level === 'ADVANCED').map((itemTopic, key) => <ItemTopic key={key} {...itemTopic}/>)}
                </div>
            </div>
        )
    }
};
function ItemTopic({id, header, tags}) {
        return (
            <Link
                style={{ textDecoration: 'none' }}
                to={
                    ROUTE.GRAMMAR_ALL + '/' + id
                }
            >
                <Button style={{ height: '110px', borderRadius: '20px', marginBottom: '20px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', justifyContent: 'space-between' }}>
                    <div style={{ paddingLeft: '10px', display: 'block', textTransform: 'none', textAlign: 'left' }}>
                        {/* <div>
                            {listCategory.forEach((value, key) => {
                                if (key === item.category) {
                                    return value
                                }
                            })}
                        </div> */}
                        <div>{header}</div>
                        {/* <div>{name}</div> */}
                        <div style={{ display: 'flex' }}>
                            {tags.map((tag) => {
                                return (
                                    <div style={{ marginRight: '5px' }}>
                                        <Chip size='small' label={tag} style={{ background: 'rgb(241, 136, 129)', fontSize: '11px' }} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: '95px' }}>
                        <div style={{ height: '26px', marginBottom: '16px' }}>
                            <img alt='' src='https://cdn-icons-png.flaticon.com/128/1985/1985836.png' style={{ width: '20px', marginRight: '7px' }} />
                            <img alt='' src='https://cdn-icons-png.flaticon.com/128/1985/1985836.png' style={{ width: '20px', marginRight: '7px' }} />
                            <img alt='' src='https://cdn-icons-png.flaticon.com/128/1985/1985836.png' style={{ width: '20px', marginRight: '7px' }} />
                        </div>
                        <div style={{ display: 'flex', width: '47px', height: '39px' }}>
                            <div className='point'>
                                <FlashOnIcon style={{ color: 'yellow' }} />
                                100
                            </div>
                        </div>
                    </div>
                </Button>
            </Link>
        );
    };

export default Grammar