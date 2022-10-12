import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Component } from 'react';
import { redirectRouter } from '../../utils/common';
import api from '../../service/api';
import { ArrowBack } from '@material-ui/icons';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      email: '',
      password: '',
    }
  };

  handleChangeChecked = (event) => {
    this.setState({
      isChecked: event.target.checked
    })
  }

  onClickRegister = () => {
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
          <div style={{display: 'flex'}}>
            <div alignItems='center' justify='flex-start'>
              <Button onClick={() => redirectRouter(this.props, '/')}><ArrowBack /></Button>
            </div>
            <Typography component="h1" variant="h5" alignItems='center' justify='center'>
              Tài khoản mới
            </Typography>
          </div>
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
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={this.state.isChecked}
                onChange={(event) => this.handleChangeChecked(event)}
              />}
            label="Tôi đồng ý với Điều kiện sử dụng và chính sách quyền riêng tư"
            style={{marginTop: '20px', marginBottom: '20px'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            disabled={!this.state.isChecked}
            onClick={() => this.onClickRegister()}
          >
            Tạo tài khoản
          </Button>
        </div>
      </Container>
    );
  }
}
export default Register