import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './view/login/index';
import Layout from './view/layout';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <App></App> */}
            {/* <Login/> */}
            <Layout/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
