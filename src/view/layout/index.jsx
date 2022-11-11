import React, { Component } from 'react';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import router from '../../router';
import Login from '../login';
import App from '../../App';
import { ROUTER_KEY } from '../../common/constant';

class Layout extends Component {

    /**
   * get router
   * @param {router} r
   * @return {Route} Route
   */
    getRouter = (r) => {
        return r.map((prop, key) => {
            const currentRoute = this.getCurrentRoute();
            if (_.isEmpty(currentRoute)) return null;
            if (!prop.subMenu || !currentRoute) {
                return <Route exact path={prop.path} render={(props) => <prop.component {...props} />} key={key} />;
            } else {
                return <Route exact path={currentRoute.path} render={(props) => <currentRoute.component {...props} />} key={key} />;
            }
        });
    };

    /**
     * getCurrentRoute
     * @return {String}
     */
    getCurrentRoute = () => {
        for (let i = 0; i < router.length; i++) {
            const route = router[i];
            if (route.pathActive === '/') {
                if (window.location.pathname === route.pathActive) {
                    return route;
                }
            } else {
                if (route.path.endsWith('id') && window.location.pathname.startsWith(route.pathActive)) {    
                    return route;
                } else {
                    if (window.location.pathname.startsWith(route.pathActive)) {
                        return route;
                    }
                }
            }
        }
        return [];
    };

    render() {
        const currentRoute = this.getCurrentRoute();

        return (
            <div>
                {currentRoute.key === ROUTER_KEY.PAGE_VIEW ?
                    (window.location.pathname === '/' ?
                        <Route path='/' render={(props) => <Login {...props} />} /> :
                        <Switch currentRoute={currentRoute}>
                            {this.getRouter(router)}
                        </Switch>
                    ) :
                    (
                        <div>
                            <App
                                notNav={currentRoute.key === ROUTER_KEY.PAGE_NOT_NAV ? true : false}
                                mainPage={
                                    <Switch currentRoute={currentRoute}>
                                        {this.getRouter(router)}
                                    </Switch>
                                }
                            />
                        </div>
                    )
                }

            </div>
        )
    }
}
export default Layout;