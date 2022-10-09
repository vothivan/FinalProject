import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Card } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import Words from './view/words';
import Grammar from './view/grammar';
import Account from './view/account';
import './App.css';
export default function App() {
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
                        maxWidth: '430px'
                    }}
                >
                    <div style={{ height: '100%', overflow: 'hidden auto', padding: '25px 0px 20px' }}>
                        <Switch>
                            <Route exact path="/"><Words /></Route>
                            <Route path="/words" ><Words /></Route>
                            <Route path="/grammar"><Grammar /></Route>
                            <Route path="/account"><Account /></Route>
                        </Switch>
                    </div>
                    <nav style={{ height: '72px', display: 'grid', borderTop: '1px solid rgb(242, 242, 242)', gridTemplateColumns: 'repeat(4, auto)', backgroundColor: '#fff' }}>
                        <Link className='footer-child' to="/">Home</Link>
                        <Link className='footer-child' to="/words">Words</Link>
                        <Link className='footer-child' to="/grammar">Grammar</Link>
                        <Link className='footer-child' to="/account">Account</Link>
                    </nav>
                </Card>
            </Container>
        </React.Fragment>
    );
}