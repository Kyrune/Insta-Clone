import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Redirects user to log in screen if not logged in
export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}