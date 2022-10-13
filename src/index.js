import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Login from './view/login/index';
import Layout from './view/layout';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    // <React.StrictMode>
        <BrowserRouter>
            {/* <App></App> */}
            {/* <Login/> */}
            {/* <Layout/> */}
            <Route path="/" render={(props) => <Layout {...props} />} />
        </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root'),
);
