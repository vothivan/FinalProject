import React, { Component, useEffect, useState } from 'react';
import { Button} from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import './style.css';
import api from '../../service/api';
import Guide from './guide';
import { Link } from 'react-router-dom';

export default function LessonAll(props) {
    const { id } = props.match.params;
    const [grammar, setGrammar] = useState({});

    useEffect(() => {
        api.get("/grammar/" + id).then((res) => {
            if (res && res.status === 200) {
                setGrammar(res.data)
            }
        })
    }, [])

    return (
        <div style={{ height: '100%' }}>
            <div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Button onClick={() => redirectRouter(props, '/learn/grammar')}><ArrowBack /></Button>
                </div>
                <div style={{ alignItems: 'center', margin: '0px 16px 0px 16px' }}>
                    <Guide guide={grammar?.descriptions} />
                </div>
            </div>
            <div className='total' style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div className='button'>
                    <div style={{ width: '100%', margin: '16px 0px 0px' }}>
                        <Button className='button-child' disabled={grammar.questions?.length === 0}
                            style={{ fontSize: '17px', width: '100%', alignItems: 'center', borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }}
                            onClick={() => redirectRouter(props, '/learn-grammar/' + props.match.params.id)}>Learn {grammar.questions?.length === 0 ? "(no any questions)" : ""}</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}