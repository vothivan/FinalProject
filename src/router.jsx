import {ROUTE} from './common/constant';

import Learn from './view/learn';
import Login from './view/login';
const router = [
    {
        path: ROUTE.LEARN,
        pathActive: ROUTE.LEARN,
        component: Learn,
    },
    {
        path: ROUTE.LOGIN,
        pathActive: ROUTE.LOGIN,
        component: Login,
    }
];

export default router;
