import React, {useContext } from 'react';
import {Route , Redirect} from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const authcontext = useContext(AuthContext);
    const {isAuthenticated, loading} = authcontext;
    return (
        <Route
            {...rest}
            render = {props =>
            !isAuthenticated  ?( alert("You have to login to access the page"),
                <Redirect to="/login" />
                

              
            ): (
                <Component {...props} />
            )}

        />
    );
};

export default ProtectedRoute;