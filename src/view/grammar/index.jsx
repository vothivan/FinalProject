import { Chip, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/constant';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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

    render() {
        return (
            <div className='root'>
                <h1 style={{ fontSize: '40px' }}>
                    Grammar
                </h1>
                <h4>Practice grammar rules and earn stars</h4>
                <div>
                    <h3 className='level'>Intermediate</h3>
                    {this.state.listTopic.filter((item) => item.level === 'INTERMEDIATE').map((itemTopic, key) => <ItemTopic key={itemTopic.id} {...itemTopic} />)}
                    <h3 className='level'>Advanced</h3>
                    {this.state.listTopic.filter((item) => item.level === 'ADVANCED').map((itemTopic, key) => <ItemTopic key={itemTopic.id} {...itemTopic} />)}
                </div>
            </div>
        )
    }
};
function ItemTopic(props) {
    const { id, header, tags, name, trainingEnergy, star } = props;
    console.log(props);
    return (
        <Link
            style={{ textDecoration: 'none' }}
            to={
                ROUTE.GRAMMAR_ALL + '/' + id
            }
        >
            <Button style={{ height: '110px', borderRadius: '20px', marginBottom: '20px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', justifyContent: 'space-between' }}>
                <div style={{ paddingLeft: '10px', display: 'block', textTransform: 'none', textAlign: 'left' }}>
                    {/* <div>
                            {listCategory.forEach((value, key) => {
                                if (key === item.category) {
                                    return value
                                }
                            })}
                        </div> */}
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>{header}</div>
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>{name}</div>
                    <div style={{ display: 'flex' }}>
                        {tags.map((tag) => {
                            return (
                                <div style={{ marginRight: '5px' }}>
                                    <Chip size='small' label={tag} style={{ background: 'rgb(241, 136, 129)', fontSize: '11px', fontWeight: '600' }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{ textAlign: 'right', minWidth: '95px' }}>
                    <Rating
                        style={{ fontSize: '20px', width: '80px', justifyContent: 'center' }}
                        name="customized-empty"
                        defaultValue={star || 0}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        max={3}
                        disabled={true}
                    />
                    <div style={{ display: 'flex', width: '47px', height: '39px', margin: 'auto' }}>
                        <div className='point'>
                            <FlashOnIcon style={{ color: 'yellow' }} />
                            {trainingEnergy}
                        </div>
                    </div>
                </div>
            </Button>
        </Link>
    );
};

export default Grammar