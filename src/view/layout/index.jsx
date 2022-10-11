import React, { Component } from 'react';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import router from '../../router';
import Login from '../login';

class Layout extends Component {

    componentDidMount() {
        // const currentRoute = this.getCurrentRoute();
        console.log(window.location.pathname);
    }

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
            if (window.location.pathname.includes(route.pathActive)) {
                return route;
            }
        }
        return [];
    };

    render() {
        const currentRoute = this.getCurrentRoute();
        return (
            <div>
                {window.location.pathname === '/' ?
                    <Route path='/' render={(props) => <Login {...props}/>}/>:
                    <Switch currentRoute={currentRoute}>
                        {this.getRouter(router)}
                    </Switch>
                }

            </div>
        )
    }
}
export default Layout;