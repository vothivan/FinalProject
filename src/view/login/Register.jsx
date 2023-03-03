import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Component } from 'react';
import { redirectRouter } from '../../utils/common';
import api from '../../service/api';
import { ArrowBack } from '@material-ui/icons';
import SimpleReactValidator from 'simple-react-validator';
import { FormHelperText } from '@material-ui/core';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isSubmitForm: false,
    }
    this.validator = new SimpleReactValidator()
  };

  onClickRegister = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.setState({
        error: '',
        isSubmitForm: true,
      })
      redirectRouter(this.props, '/account')
      // const payload = {
      //   email: this.state.email,
      //   password: this.state.password,
      // }
      // api.post("/accounts/login", payload).then((res) => {
      //   if (res && res.status === 200) {
      //     redirectRouter(this.props, '/account')
      //   }
      // })
    } else {
      this.setState({
        error: 'Please fill in all the information.'
      })
    }

  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className='paper'>
          <div style={{ display: 'flex' }}>
            <Button onClick={() => redirectRouter(this.props, '/')} style={{ marginLeft: '-24px' }}><ArrowBack /></Button>
            <Typography component="h1" variant="h5" style={{ marginLeft: '84px', fontWeight: 'bold' }}>
              I'm new here
            </Typography>
          </div>
          <br></br>
          <form onSubmit={this.onClickRegister}>
            {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              placeholder='Please enter the email address.'
              type='email'
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })}
              placeholder='Please enter the password.'
              inputProps={{ minLength: 6 }}
              type="password"
            />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className='button-child'
              style={{ boxShadow: 'rgb(242 153 74) 0px 4px 0px', width: '100%', alignItems: 'center', borderRadius: '20px', marginBottom: '10px', marginTop: '10px', color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '18px' }}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default Register