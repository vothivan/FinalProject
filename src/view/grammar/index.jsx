import { Card, Chip } from '@material-ui/core';
import React, { Component } from 'react';
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
                // debugger
                this.setState({
                    listTopic: res.data,
                })
            }
        })

    }

    itemTopic(item) {
        // debugger
        console.log(item);
        return (
            <Card style={{ height: '110px', borderRadius: '20px', marginBottom: '20px' }}>
                <div style={{ paddingLeft: '10px' }}>
                    <p>{item.category}</p>
                    <b>{item.title}</b>
                    <div style={{display: 'flex'}}>
                        {item.descriptions.map((des) => {
                            console.log(des);
                            return (
                                <div style={{marginRight: '10px'}}>
                                    <Chip size='small' label={des} className='chip' color='rgb(231, 110, 135)' />
                                </div>
                            )
                        })}
                    </div>

                </div>

            </Card>
        )
    }

    render() {
        return (
            <div className='root'>
                <h1 className='title'>Grammar</h1>
                <h4>Luyện tập cấu trúc ngữ pháp và nhận sao</h4>
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