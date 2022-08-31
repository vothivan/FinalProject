import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom';
import learn from './view/learn/index';
// import Login from './view/login/index';
import Login from './view/login/index';

const App = () => (
    <MuiThemeProvider>
        <Switch>
            {/* <Route exact path="/" component={learn}/> */}
            <Route exact path="/" component={Login}/>
        </Switch>
    </MuiThemeProvider>
);

export default App;
