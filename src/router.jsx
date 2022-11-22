import {ROUTE, ROUTER_KEY} from './common/constant';

import Register from './view/login/Register';
import Login from './view/login/index';
import LoginUser from './view/login/LoginUser';
import Words from './view/words';
import Grammar from './view/grammar';
import Account from './view/account';
import BuyEnergy from './view/setting/buyEnergy';
import TransferMoney from './view/setting/transferMoney';
import PayIn from './view/setting/payIn';
import LessonAll from './view/grammar/lesson_all';
import ListWord from './view/words/list-word';
import SeeAll from './view/words/seeAll';
import SelectCharacter from './view/account/setting';
import LearnWords from './view/words/learn';
import LearnGrammar from './view/grammar/learn';
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
        path: ROUTE.BUY_ENERGY,
        pathActive: ROUTE.BUY_ENERGY,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: BuyEnergy,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.PAY_IN,
        pathActive: ROUTE.PAY_IN,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: PayIn,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.TRANSFER_MONEY,
        pathActive: ROUTE.TRANSFER_MONEY,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: TransferMoney,
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
        path: ROUTE.LIST_WORD + '/:id',
        pathActive: ROUTE.LIST_WORD,
        key: ROUTER_KEY.PAGE_NOT_NAV,
        component: ListWord,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.LEARN_WORD+ '/:id',
        pathActive: ROUTE.LEARN_WORD,
        key: ROUTER_KEY.PAGE_NOT_NAV,
        component: LearnWords,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.SEE_ALL + '/:id',
        pathActive: ROUTE.SEE_ALL,
        key: ROUTER_KEY.PAGE_NOT_NAV,
        component: SeeAll,
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
        path: ROUTE.GRAMMAR_ALL + '/:id',
        pathActive: ROUTE.GRAMMAR_ALL,
        key: ROUTER_KEY.PAGE_NOT_NAV,
        component: LessonAll,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.LEARN_GRAMMAR,
        pathActive: ROUTE.LEARN_GRAMMAR,
        key: ROUTER_KEY.PAGE_NOT_NAV,
        component: LearnGrammar,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.ACCOUNT,
        pathActive: ROUTE.ACCOUNT,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: Account,
        layout: ROUTE.LAYOUT,
    },
    {
        path: ROUTE.SELECT_CHARACTER,
        pathActive: ROUTE.SELECT_CHARACTER,
        key: ROUTER_KEY.PAGE_LAYOUT,
        component: SelectCharacter,
        layout: ROUTE.LAYOUT,
    },
];

export default router;
