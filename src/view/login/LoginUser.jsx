import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { FormHelperText } from '@material-ui/core';
class LoginUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      isSubmitForm: false,
    }
    this.validator = new SimpleReactValidator()
  }
  onClickSignIn = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.setState({
        error: '',
        isSubmitForm: true,
      })
      const payload = {
        email: this.state.email,
        password: this.state.password,
      }
      api.post("/accounts/login", payload).then((res) => {
        if (res && res.status === 200) {
          if (res.data.token) {
            localStorage.setItem("jwt_token", res.data.token)
            redirectRouter(this.props, '/account')
          } else {
            this.setState({
              error: 'Email or password is invalid, please enter again! '
            })
          }
        }
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
            <Typography component="h1" variant="h5" style={{ marginLeft: '47px', fontWeight: 'bold' }}>
              I've got an account
            </Typography>
          </div>
          <br></br>
          {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}
          <form onSubmit={this.onClickSignIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type='email'
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              placeholder='Please enter the email address.'
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })}
              placeholder='Please enter the password.'
              inputProps={{ minLength: 6 }}
            />
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              className='button-child'
              style={{ width: '100%', alignItems: 'center', borderRadius: '20px', marginBottom: '25px', marginTop: '10px', color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '18px', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
            >
              Login
            </Button>
          </form>
          <div style={{ textAlign: 'center' }}>
            <Link style={{ textDecoration: 'none', fontWeight: '600' }} to={'/register'}>I don't have account</Link>
          </div>

        </div>
      </Container>
    );
  }
}
export default LoginUser