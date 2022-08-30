import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom';
import Test from './view/learn/index';

const App = () => (
    <MuiThemeProvider>
        <Switch>
            <Route exact path="/" component={Test}/>
        </Switch>
    </MuiThemeProvider>
);

export default App;
