import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={"/"} render={(props) => <App {...props} />} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);