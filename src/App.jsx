import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SettingsIcon from '@material-ui/icons/Settings';
import './App.css';
import bsc from '@binance-chain/bsc-use-wallet'
import { UseWalletProvider } from 'use-wallet';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <UseWalletProvider connectors={{
                        portis: { dAppId: 'my-dapp-id-learn-to-earn' }
                    }} >
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
                                    boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px',
                                }}
                            >
                                <div style={{ height: '100%', overflow: 'hidden auto', padding: '25px 0px 20px' }}>
                                    <main>
                                        {this.props.mainPage}
                                    </main>
                                </div>

                                {/* <Grammar/> */}
                                {this.props.notNav === false &&
                                    <nav style={{ height: '72px', display: 'grid', borderTop: '1px solid rgb(242, 242, 242)', gridTemplateColumns: 'repeat(3, auto)', backgroundColor: '#fff' }}>
                                        <Link className='footer-child' to={'/account'}>
                                            <div className='footer-nav'>
                                                <HomeIcon />
                                                Home
                                            </div>
                                        </Link>
                                        <Link className='footer-child' to={'/learn/word'}>
                                            <div className='footer-nav'>
                                                <MenuBookIcon />
                                                Words
                                            </div>
                                        </Link>
                                        <Link className='footer-child' to={'/learn/grammar'}>
                                            <div className='footer-nav'>
                                                <LibraryAddCheckIcon />
                                                Grammar
                                            </div>
                                        </Link>
                                        {/* <Link className='footer-child' to={'/page'}>
                                    <div className='footer-nav'>
                                        <SettingsIcon />
                                        <span>Setting</span>
                                    </div>
                                </Link> */}
                                    </nav>
                                }
                            </Card>
                        </Container>
                    </UseWalletProvider>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App