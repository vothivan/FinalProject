import React, { Component } from 'react';
import { Card, Container, CssBaseline, Button } from '@material-ui/core';
import { redirectRouter } from '../../utils/common';
import './style.css';
class Login extends Component {
    constructor(props) {
        super(props);
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
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='sm'>
                    <Card
                        style={{
                            height: '90vh',
                            margin: '24px',
                            borderRadius: '20px',
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
                                <h1 className='header-child'>TryYourHard</h1>
                                <h1 className='header-child'>Learn to earn</h1>
                                <span className='header-child'>Learning English is very easy with TryYourHard</span>
                                <div className='button'>
                                    <Button className='button-child' style={{width: '100%', borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', fontSize: '18px'}} onClick={() => redirectRouter(this.props, '/register')}>Tôi là người mới</Button>
                                    <div style={{ width: '100%', margin: '16px 0px 0px' }}><Button className='button-child' style={{fontWeight: 'bold', width: '100%', borderRadius: '20px', textTransform: 'none', fontSize: '18px'}} onClick={() => redirectRouter(this.props, '/login')}>Tôi đã có tài khoản</Button></div>
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