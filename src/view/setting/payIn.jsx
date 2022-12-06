import React from 'react';
import './style.css';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack, RestoreSharp } from '@material-ui/icons';
import api from '../../service/api';
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import { redirectRouter } from '../../utils/common';
class PayIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: 0,
      total_coin: 0,
      swap_coin: null,
      open_popup: false,
      open_popup_success: false,
      nftWalletAddress: '',
      claimingRewards: 0,
    }
  }
  async componentDidMount() {
    const res = await api.get('/accounts/profile');
    if (res && res.status === 200) {
      this.setState({
        total_coin: res.data.rewards,
        nftWalletAddress: res.data.nftWalletAddress,
        claimingRewards: res.data.claimingRewards,
      })
    }
  }
  actionBuy = (event) => {
    event.preventDefault();
    this.setState({ open_popup: true })
  }
  handleClose = () => {
    this.setState({ open_popup: false })
  }
  handleSwap = () => {
    this.setState({ open_popup: false, open_popup_success: true, })
    const payload = {
      claimRewards: this.state.swap_coin ? Number(this.state.swap_coin) : null,
      nftWalletAddress: this.state.nftWalletAddress,
    }
    api.post('/accounts/profile', payload).then((res) => {
      if (res && res.status === 200) {

      }
    });
  }
  handleCloseSwap = () => {
    redirectRouter(this.props, '/account')
  }
  render() {
    const {total_coin, claimingRewards} = this.state;
    const coin_use = total_coin - claimingRewards;
    return (
      <div className='title-setting'>
        <div>
          <Button>
            <Link to={'/account'}>
              <ArrowBack style={{ marginRight: 'auto' }} />
            </Link>
          </Button>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>Transfer Money</h2>
            <h4>1 BNB = 200 point</h4>
          </div>
          <form onSubmit={this.actionBuy}>
            <div style={{ marginBlock: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '110px', marginBlock: 'auto', fontWeight: '600' }}><span>Your point</span></div>
                <TextField
                  variant='outlined'
                  value={coin_use}
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
                  onChange={(event) => this.setState({ swap_coin: event.target.value })}
                />
              </div>
            </div>
            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <Button
                type='submit'
                variant="contained"
                style={{ background: this.state.swap_coin ? 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)' : '', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
              >
                Swap
              </Button>
            </div>
          </form>
          <div style={{ textAlign: 'center' }}>
            <Dialog
              aria-labelledby="customized-dialog-title"
              open={this.state.open_popup}
              style={{ overflowY: 'none' }}
            >
              <DialogContent style={{ fontWeight: '600', width: '300px', textAlign: 'center' }}>
                Are you swap?
              </DialogContent>
              <DialogActions style={{ justifyContent: 'center', width: '300px' }}>
                <Button onClick={() => this.handleSwap()} color="primary" style={{ fontWeight: '600', fontSize: '18px', textTransform: 'none' }}>
                  Yes
                </Button>
                <Button onClick={() => this.handleClose()} color="primary" style={{ fontWeight: '600', fontSize: '18px', textTransform: 'none' }}>
                  No
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              aria-labelledby="customized-dialog-title"
              open={this.state.open_popup_success}
              style={{ overflowY: 'none' }}
            >
              <DialogContent style={{ fontWeight: '600', width: '300px', textAlign: 'center' }}>
                You have successfully swap {this.state.swap_coin} points for {(this.state.swap_coin/200).toFixed(2)} BNB
              </DialogContent>
              <DialogActions style={{ justifyContent: 'center', width: '300px' }}>
                <Button onClick={() => this.handleCloseSwap()} color="primary" style={{ fontWeight: '600', fontSize: '18px', textTransform: 'none' }}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    )
  }
}
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default PayIn