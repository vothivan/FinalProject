import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import './style.css';
import api from '../../service/api';
import Guide from './guide';
class LessonAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grammar: [],
            grammarDetail: {}
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        api.get("/grammar", id).then((res) => {
            if (res && res.status === 200) {
                this.setState({
                    grammar: res.data,
                    grammarDetail: res.data.find(g => g.id === +id)
                })
            }
        })
    }

    /**
     * render
     * @returns 
     */
    render() {
        const { grammarDetail } = this.state;
        return (
            <div style={{ height: '100%' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Button onClick={() => redirectRouter(this.props, '/learn/grammar')}><ArrowBack /></Button>
                    </div>
                    <div style={{ alignItems: 'center', margin: '0px 16px 0px 16px' }}>
                        <Guide guide={grammarDetail.descriptions} />
                    </div>
                </div>
                <div className='total' style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div className='button'>
                        <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child' style={{ width: '100%', alignItems: 'end', borderRadius: '20px' }} onClick={() => redirectRouter(this.props, '/login')}>Learn</Button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LessonAll;