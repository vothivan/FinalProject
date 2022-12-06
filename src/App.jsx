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
import { Button } from '@material-ui/core';
import { UseWalletProvider } from 'use-wallet';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const list_menu = ['/account', '/learn/word', '/learn/grammar']
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover_color_status: '/account',
        }
    }
    componentDidMount() {
    }
    chooseMenu = (item) => {
        this.setState({
            hover_color_status: item
        })
    }
    render() {
        const {hover_color_status} = this.state;
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
                                    <main style={{ height: '100%'}}>
                                        {this.props.mainPage}
                                    </main>
                                </div>
                                {/* <Grammar/> */}
                                {this.props.notNav === false &&
                                    <nav style={{ height: '72px', display: 'grid', borderTop: '1px solid rgb(242, 242, 242)', gridTemplateColumns: 'repeat(3, auto)', backgroundColor: '#fff' }}>
                                        {list_menu.map((item) => {
                                            return (
                                                <Button className='footer-nav' onClick={() => this.chooseMenu(item)}>
                                                    {item === '/account' ?
                                                        <Link className='footer-child' to={item}>
                                                            <HomeIcon style= {{color: item === hover_color_status ? '#f1762f' : 'black'}}/>
                                                            Home
                                                        </Link>
                                                        : (
                                                            item === '/learn/word' ?
                                                                <Link className='footer-child' to={item}>
                                                                    <MenuBookIcon style= {{color: item === hover_color_status ? '#f1762f' : 'black'}}/>
                                                                    Words
                                                                </Link>
                                                                :
                                                                <Link className='footer-child' to={item}>
                                                                    <LibraryAddCheckIcon style= {{color: item === hover_color_status ? '#f1762f' : 'black'}}/>
                                                                    Grammar
                                                                </Link>
                                                        )
                                                    }
                                                </Button>
                                            )

                                        })}
                                        {/* <Link className='footer-child' to={'/account'}>
                                            <Button key={'/account'} className='footer-nav' color={event.target.key ? 'primary' : 'secondary'} onClick={(event) => this.setState({})}>
                                                <HomeIcon />
                                                Home
                                            </Button>
                                        </Link>
                                        <Link className='footer-child' to={'/learn/word'}>
                                            <Button className='footer-nav'>
                                                <MenuBookIcon />
                                                Words
                                            </Button>
                                        </Link>
                                        <Link className='footer-child' to={'/learn/grammar'}>
                                            <Button className='footer-nav'>
                                                <LibraryAddCheckIcon />
                                                Grammar
                                            </Button>
                                        </Link> */}
                                    </nav>
                                }
                            </Card>
                        </Container>
                    </UseWalletProvider>
                </MuiThemeProvider>
            </React.Fragment >
        );
    }
}

export default App