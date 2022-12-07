import React, { Component, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
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
        <div className="total">
            <Button className="button-return"
                style={{ marginRight: 'auto' }} onClick={() => redirectRouter(props, '/learn/grammar')}><ArrowBack /></Button>
            <div style={{ overflow: 'auto', alignItems: 'center' }}>
                <Guide guide={grammar?.descriptions} />
            </div>
            <Button
                className='button-child'
                style={{ fontSize: '17px', width: '100%', alignItems: 'center', borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }}
                onClick={() => redirectRouter(props, '/learn-grammar/' + props.match.params.id)}
            >
                Learn {grammar.questions?.length === 0 ? "(no any questions)" : ""}
            </Button>
        </div>
    )

}