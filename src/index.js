import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './view/layout';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <Route path="/" render={(props) => <Layout {...props} />} />
        </BrowserRouter>,
    document.getElementById('root'),
);
