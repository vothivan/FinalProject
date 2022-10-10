import {ROUTE} from './common/constant';

import Register from './view/login/Register';
import Login from './view/login/index';
import LoginUser from './view/login/LoginUser';
import App from './App';
const router = [
    {
        path: ROUTE.HOME,
        pathActive: ROUTE.HOME,
        component: Login,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.REGISTER,
        pathActive: ROUTE.REGISTER,
        component: Register,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.LOGIN,
        pathActive: ROUTE.LOGIN,
        component: LoginUser,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.PAGE,
        pathActive: ROUTE.PAGE,
        component: App,
        layout: ROUTE.LAYOUT,
    },
];

export default router;
