import { Card, Chip, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/constant';
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

    /**
     * itemTopic
     * @param {*} item 
     * @returns 
     */
    itemTopic(item) {
        return (
            <Link
                style={{textDecoration: 'none'}}
                to={
                    ROUTE.GRAMMAR_ALL + '/' + item.id
                }
            >
                <Button style={{ width: '100%' }}>
                    <Card style={{ height: '110px', borderRadius: '20px', marginBottom: '20px', width: '100%' }}>
                        <div style={{ paddingLeft: '10px', display: 'block' }}>
                            <div>{item.category}</div>
                            <div><b>{item.title}</b></div>
                            <div style={{ display: 'flex' }}>
                                {item.descriptions.map((des) => {
                                    return (
                                        <div style={{ marginRight: '10px' }}>
                                            <Chip size='small' label={des} className='chip' color='rgb(231, 110, 135)' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Card>
                </Button>
            </Link>


        )
    }

    render() {
        return (
            <div className='root'>
                <h1 className='title'>Grammar</h1>
                <h4 style={{fontFamily: 'cursive'}}>Luyện tập cấu trúc ngữ pháp và nhận sao</h4>
                <div>
                    {this.state.listTopic.map((item) => {
                        return this.itemTopic(item)
                    })}
                </div>
            </div>
        )
    }
}

export default Grammar