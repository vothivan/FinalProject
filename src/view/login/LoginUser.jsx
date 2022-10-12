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
        redirectRouter(this.props, '/page')
      }
    })
  }
  render() {
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='paper'>
        <div style={{ display: 'flex' }}>
          <div alignItems='center' justify='flex-start'>
            <Button onClick={() => redirectRouter(this.props, '/')}><ArrowBack/></Button>
          </div>
          <Typography component="h1" variant="h5" alignItems='center' justify='center'>
            Đăng nhập tài khoản
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
            style={{marginTop: '20px', marginBottom: '20px'}}
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Tạo tài khoản mới"}
                {/* {redirectRouter(this.props, '/register')} */}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
  }  
}
export default LoginUser