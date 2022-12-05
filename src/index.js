import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './view/layout';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, {persistor} from './store/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
            <BrowserRouter>
                <Route path="/" render={(props) => <Layout {...props} />} />
            </BrowserRouter>,
        </PersistGate>
    </Provider>,
        
    document.getElementById('root'),
);
