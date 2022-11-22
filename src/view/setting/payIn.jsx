import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
class PayIn extends Component {
  render() {
    return (
      <div className='title-setting'>
        <div>
          <Button>
            <Link to={'/account'}>
              <ArrowBack style={{ marginRight: 'auto' }} />
            </Link>
          </Button>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}><h2>Pay In</h2></div>
          <div style={{marginBlock: 'auto'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '110px', marginBlock: 'auto', fontWeight: '600' }}><span>Your point</span></div>
              <TextField
                variant='outlined'
                value='1.26'
                disabled={true}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <div style={{ width: '110px', marginBlock: 'auto',fontWeight: '600' }}><div>You want swap</div></div>
              <TextField
                variant='outlined'
              />
            </div>
          </div>
          <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <Button
              variant="contained"
              style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
            >
              Swap
            </Button>
          </div>

        </div>
      </div>
    )
  }
}

export default PayIn