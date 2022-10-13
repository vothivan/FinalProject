import { Card, Chip } from '@material-ui/core';
import React, { Component } from 'react';
import api from '../../service/api';
import './style.css'
class Grammar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        api.get('/grammar').then((res) => {
            console.log(res);
        })

    }

    itemTopic() {
        return (
            <Card style={{ height: '110px', borderRadius: '20px' }}>
                <div style={{paddingLeft: '10px'}}>
                    <p>Present Simple</p>
                    <b>Am, Is, Are</b>
                    <div>
                        <Chip size='small' label="Basic" className='chip' color='rgb(231, 110, 135)'/>
                        <Chip size='small' label="Basic" className='chip' color='rgb(231, 110, 135)'/>
                        <Chip size='small' label="Basic" className='chip' color='rgb(231, 110, 135)'/>
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
                {this.itemTopic()}
            </div>
        )
    }
}

export default Grammar