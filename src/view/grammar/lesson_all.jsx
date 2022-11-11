import React, { Component } from 'react';
import {Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import './style.css';
import api from '../../service/api';
class LessonAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            grammar: [],
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        api.get("/grammar", id).then((res) => {
            if (res && res.status === 200){
                this.setState({
                    grammar: res.data,
                })
            }
        })
    }

    /**
     * render
     * @returns 
     */
    render() {
        return (
            <div style={{height: '100%'}}>
                <div style={{ display: 'flex' }}>
                    <div style={{display: 'flex', alignItems: 'flex-start'}}>
                        <Button onClick={() => redirectRouter(this.props, '/learn/grammar')}><ArrowBack /></Button>
                    </div>
                    <div alignItems='center' justify='flex-end'>
                    </div>
                </div>
                <div className='total' style={{display: 'flex', alignItems: 'flex-end'}}>
                    <div className='button'>
                        <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child' style={{width: '100%', alignItems: 'end', borderRadius: '20px'}} onClick={() => redirectRouter(this.props, '/login')}>Learn</Button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LessonAll;