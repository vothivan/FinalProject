import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import api from '../../service/api';
class PayIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: 0,
      total_coin: 0,
      swap_coin: 0,
    }
  }
  async componentDidMount() {
    const res = await api.get('/accounts/profile');
    if (res && res.status === 200) {
      this.setState({
        total_coin: res.data.rewards,
      })
    }
  }
  actionBuy = (event) => {
    event.preventDefault();
    alert('You buy successfully');
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}><h2>Transfer Money</h2></div>
          <form onSubmit={this.actionBuy}>
            <div style={{ marginBlock: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '110px', marginBlock: 'auto', fontWeight: '600' }}><span>Your point</span></div>
                <TextField
                  variant='outlined'
                  value={this.state.total_coin}
                  disabled={true}
                  inputProps={{
                    style: { color: 'black', fontWeight: '600' }
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <div style={{ width: '110px', marginBlock: 'auto', fontWeight: '600' }}><div>You want swap</div></div>
                <TextField
                  variant='outlined'
                  required
                  inputProps={{
                    style: { color: 'black', fontWeight: '600' }
                  }}
                  name='swap_coin'
                  value={this.state.swap_coin}
                  onChange={(event) => this.setState({swap_coin: event.target.value})}
                />
              </div>
            </div>
            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <Button
                type='submit'
                variant="contained"
                style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
              >
                Swap
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PayIn