import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Card, Container, CssBaseline, Button } from '@material-ui/core';
import Register from './Register';
import LoginUser from './LoginUser';
import './style.css';
import { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
        }
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='sm'>
                    <Card
                        style={{
                            height: '100vh',
                            margin: '24px',
                            borderRadius: '20px',
                            backgroundColor: '#e1bec3',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            maxWidth: '430px',
                            position: 'relative',
                        }}
                    >
                        {this.state.status === '' &&
                            <div className='total'>
                                <img className='image' src='https://web.letmespeak.org/static/media/welcome.e401ce2cc62f60a8e599bcbb26504c74.svg' />
                                <h1 className='header'>Chào mừng đến với thế giới của Let Me Speak</h1>
                                <span className='header-child'>Bạn sẽ bắt đầu học tiếng Anh hôm nay!</span>
                                <div className='button'>
                                    <Button className='button-child'><Link to='/register'>Tôi là người mới</Link></Button>
                                    <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child'><Link to='/login'>Tôi đã có tài khoản</Link></Button></div>
                                </div>
                                <Switch>
                                    <Route exact path='/register'><Register /></Route>
                                    <Route path='/login'><LoginUser /></Route>
                                </Switch>
                            </div>
                        }

                    </Card>
                </Container>
            </React.Fragment>
        )
    }
}
export default Login;