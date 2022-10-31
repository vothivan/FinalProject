import {ROUTE, ROUTER_KEY} from './common/constant';

import Register from './view/login/Register';
import Login from './view/login/index';
import LoginUser from './view/login/LoginUser';
import Words from './view/words';
import Grammar from './view/grammar';
import Account from './view/account';
import Page from './view/page';
import LessonAll from './view/grammar/lesson_all';
const router = [
    {
        path: ROUTE.HOME,
        pathActive: ROUTE.HOME,
        key: ROUTER_KEY.PAGE_VIEW,
        component: Login,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.REGISTER,
        pathActive: ROUTE.REGISTER,
        key: ROUTER_KEY.PAGE_VIEW,
        component: Register,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.LOGIN,
        pathActive: ROUTE.LOGIN,
        key: ROUTER_KEY.PAGE_VIEW,
        component: LoginUser,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.PAGE,
        pathActive: ROUTE.PAGE,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: Page,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.WORD,
        pathActive: ROUTE.WORD,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: Words,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.GRAMMAR,
        pathActive: ROUTE.GRAMMAR,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: Grammar,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.GRAMMAR_ALL,
        pathActive: ROUTE.GRAMMAR_ALL,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: LessonAll,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.ACCOUNT,
        pathActive: ROUTE.ACCOUNT,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: Account,
        layout: ROUTE.LAYOUT,
    },
];

export default router;
