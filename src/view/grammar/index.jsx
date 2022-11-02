import { Card, Chip, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/constant';
import api from '../../service/api';

import './style.css'

const listCategory = new Map([
    ['QUESTION_WORDS', 'Question words'],
    ['PRESENT_SIMPLE', 'Present simple'],
    ['PRONOUNS', 'Pronouns'],
    ['MODAL_VERBS', 'Modal verb'],
    ['PAST_SIMPLE', 'Past simple'],
])
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
                    <Card style={{ height: '110px', borderRadius: '20px', marginBottom: '20px', width: '100%' ,boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px',}}>
                        <div style={{ paddingLeft: '10px', display: 'block', textTransform: 'none' }}>
                            <div>
                                {listCategory.forEach((value, key) => {
                                    // console.log(value);
                                    // console.log(key);
                                    if (key === item.category) {
                                        return value
                                    }
                                })}
                            </div>
                            <div>{item.title}</div>
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