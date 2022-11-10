import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { redirectRouter } from '../../utils/common';
import { ArrowBack } from '@material-ui/icons';
import api from '../../service/api';
class LoginUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  onClickSignIn = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    }
    api.post("/accounts/login", payload).then((res) => {
      if (res && res.status === 200) {
        if (res.data.token) {
          localStorage.setItem("jwt_token", res.data.token)
          redirectRouter(this.props, '/page')
        }
      }
    })
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className='paper'>
          <div style={{ display: 'flex' }}>
            <Button onClick={() => redirectRouter(this.props, '/')} style={{ marginLeft: '-24px' }}><ArrowBack /></Button>
            <Typography component="h1" variant="h5" style={{ marginLeft: '134px', fontWeight: 'bold' }}>
              Login
            </Typography>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={() => this.onClickSignIn()}
            className='button-child'
            style={{ width: '100%', alignItems: 'center', borderRadius: '20px', marginBottom: '10px', marginTop: '10px', color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '18px' }}
          >
            Login
          </Button>
        </div>
      </Container>
    );
  }
}
export default LoginUser