import React, { Component } from 'react';
import { Card, Container, CssBaseline, Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import './style.css';
class LessonAll extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * render
     * @returns 
     */
    render() {
        const props = this.props;
        console.log(props);
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