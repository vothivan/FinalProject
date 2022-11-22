import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
class TransferMoney extends Component {
  render() {
    return (
      <div className='title-setting'>
        <div>
          <Button>
            <Link to={'/account'}>
              <ArrowBack style={{ marginRight: 'auto' }} />
            </Link>
          </Button>
          <div style={{ textAlign: 'center' }}><h2>Transfer Money</h2></div>
        </div>
      </div>
    )
  }
}

export default TransferMoney