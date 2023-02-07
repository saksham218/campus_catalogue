import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                return localStorage.getItem('admin_token') !== null ? children : <Redirect to="/login" />;
            }}
        />
    );
}

export default PrivateRoute;
