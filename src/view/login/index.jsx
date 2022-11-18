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
                                <img className='image' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/313199148_1949018905301733_8909389498709606620_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=C6c1p8hjJE4AX-QMdjL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRRSIlocV7uqiSeL5bKT9k76eWsWlThe_ulXCsdKbmK9w&oe=639EB0EC' alt='' />
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