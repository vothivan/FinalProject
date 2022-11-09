import React, { Component } from 'react';
import {Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import './style.css';
import api from '../../service/api';
class LessonAll extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        api.get("/grammar", id).then((res) => {
            console.log(res);
        })
    }

    /**
     * render
     * @returns 
     */
    render() {
        console.log(this.props.match.params);
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <div alignItems='center' justify='flex-start'>
                        <Button onClick={() => redirectRouter(this.props, '/learn/grammar')}><ArrowBack /></Button>
                    </div>
                    <div alignItems='center' justify='flex-end'>
                    </div>
                </div>
                <div className='total'>
                    <div className='button'>
                        <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child' onClick={() => redirectRouter(this.props, '/login')}>Học</Button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LessonAll;