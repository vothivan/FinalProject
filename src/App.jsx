import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Card } from '@material-ui/core';
import {Link } from 'react-router-dom';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
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
                            // backgroundColor: '#e1bec3',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            maxWidth: '430px'
                        }}
                    >
                        <div style={{ height: '100%', overflow: 'hidden auto', padding: '25px 0px 20px' }}>
                            <main>
                                {this.props.mainPage}
                            </main>
                        </div>

                        {/* <Grammar/> */}
                        <nav style={{ height: '72px', display: 'grid', borderTop: '1px solid rgb(242, 242, 242)', gridTemplateColumns: 'repeat(4, auto)', backgroundColor: '#fff' }}>
                            <Link className='footer-child' to={'/page'}>Home</Link>
                            <Link className='footer-child' to={'/learn/word'}>Words</Link>
                            <Link className='footer-child' to={'/learn/grammar'}>Grammar</Link>
                            <Link className='footer-child' to={'/account'}>Account</Link>
                        </nav>
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default App