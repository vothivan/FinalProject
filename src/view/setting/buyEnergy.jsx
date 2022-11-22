import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
class BuyEnergy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            energy: '',
        }
    }
    chooseEnergy = (value) => {
        this.setState({
            energy: value,
        })
    }
    render() {
        return (
            <div className='title-setting'>
                <div>
                    <Button>
                        <Link to={'/account'}>
                            <ArrowBack style={{ marginRight: 'auto' }} />
                        </Link>
                    </Button>
                    <div style={{ textAlign: 'center' }}><h2>Buy Energy</h2></div>
                </div>
                <div style={{ textAlign: 'center'}}>
                    <h4 >Please enter enery (10 energy ~ 1 coin): {this.state.energy}</h4>
                </div>
                <div style={{ flexGrow: '1', textAlign: 'center', marginTop: '30px' }}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3} style={{marginLeft: '1px'}}>
                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }}
                                    onClick={() => this.chooseEnergy(10)}>
                                    10
                                </Button>
                            </Grid>

                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} onClick={() => this.chooseEnergy(20)}>
                                    20
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} onClick={() => this.chooseEnergy(50)}>
                                    50
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} spacing={3} style={{marginLeft: '1px'}}>
                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} onClick={() => this.chooseEnergy(100)}>
                                    100
                                </Button>
                            </Grid>

                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} onClick={() => this.chooseEnergy(200)}>
                                    200
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className='energy-item' style={{ fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} onClick={() => this.chooseEnergy(500)}>
                                    500
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: '25px', textAlign: 'center'}}>
                  <Button
                    variant="contained"
                    style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                >
                    Buy
                </Button>  
                </div>
                
            </div >
        )
    }
}

export default BuyEnergy