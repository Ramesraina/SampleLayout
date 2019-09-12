import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/home';
import Dashboard from '../views/dashboard';

export const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Dashboard} /> 
            <Route path={'/home'} component={Home} />
            <Route path={'*'} render={() => <Redirect to="/" />} />
        </Switch>
    );
};
