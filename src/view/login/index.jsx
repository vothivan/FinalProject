import React, { Component } from 'react';
import { Card, Container, CssBaseline, Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import './style.css';
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            status: '',
        }
    }

    /**
     * onClickRedirect
     */
    onClickRedirect = (check) => {
        check ? window.location.replace(`/register`) : window.location.replace(`/login`);
    }

    /**
     * render
     * @returns 
     */
    render() {
        const props = this.props;
        console.log(props);
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='sm'>
                    <Card
                        style={{
                            height: '90vh',
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
                                <img className='image' src='https://web.letmespeak.org/static/media/welcome.e401ce2cc62f60a8e599bcbb26504c74.svg' alt='' />
                                <h1 className='header'>Chào mừng đến với thế giới của Let Me Speak</h1>
                                <span className='header-child'>Bạn sẽ bắt đầu học tiếng Anh hôm nay!</span>
                                <div className='button'>
                                    <Button className='button-child' onClick={() => redirectRouter(this.props, '/register')}>Tôi là người mới</Button>
                                    <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child' onClick={() => redirectRouter(this.props, '/login')}>Tôi đã có tài khoản</Button></div>
                                </div>
                            </div>
                        }

                    </Card>
                </Container>
            </React.Fragment>
        )
    }
}
export default Login;