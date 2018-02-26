import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {routerActions} from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';
import {
    App,
    NotFound,
    Homepage,
    Sofia,
    Varna
} from 'containers';
import getRoutesUtils from 'utils/routes';

// eslint-disable-next-line import/no-dynamic-require
/*
 if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));
 */

export default store => {
    const {
        permissionsComponent
    } = getRoutesUtils(store);

    /* Permissions */
    const isAuthenticated = UserAuthWrapper({
        authSelector: state => state.auth.user,
        redirectAction: routerActions.replace,
        wrapperDisplayName: 'UserIsAuthenticated'
    });

    const isNotAuthenticated = UserAuthWrapper({
        authSelector: state => state.auth.user,
        redirectAction: routerActions.replace,
        wrapperDisplayName: 'UserIsNotAuthenticated',
        predicate: user => !user,
        failureRedirectPath: '/',
        allowRedirectBack: false
    });

    return (
        <Route path="/" component={App}>
            {/* Home (main) route */}
            <IndexRoute component={Homepage}/>
            <Route path="sofia" component={Sofia}/>
            <Route path="varna" component={Varna}/>
            {/* Catch all route */}
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    );
    /**
     * Please keep routes in alphabetical order
     */
};
