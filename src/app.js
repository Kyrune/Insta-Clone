import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './helpers/protected-routes';
// import IsUserLoggedIn from './helpers/is-user-logged-in';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import * as ROUTES from './constants/routes';

// Lazy page - not imported until user hits it.
const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy (() => import ('./pages/login'));
const SignUp = lazy (() => import ('./pages/signup'));
const Profile = lazy (() => import ('./pages/profile'));
const NotFound = lazy (() => import ('./pages/not-found'));

export default function App() {
    const { user } = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        {/* <IsUserLoggedIn
                            user={user} 
                            loggedInPath={ROUTES.DASHBOARD} 
                            path={ROUTES.LOGIN}
                        >
                            <Login />
                        </IsUserLoggedIn>
                        
                        <IsUserLoggedIn
                            user={user} 
                            loggedInPath={ROUTES.DASHBOARD} 
                            path={ROUTES.SIGN_UP}
                        >
                            <SignUp />
                        </IsUserLoggedIn> */}
                        <Route path={ROUTES.PROFILE} component={Profile} />
                        <Route path={ROUTES.LOGIN} component={Login} />
                        <Route path={ROUTES.SIGN_UP} component={SignUp} />
                        <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
                            <Dashboard />
                        </ProtectedRoute>
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}
