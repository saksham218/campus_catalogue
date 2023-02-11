// import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Register from './pages/Register';
import PrivateRoute from './components/private_route';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/register">
                        <Signup/>
                    </Route>
                    <Route path="/reset">
                        <ForgotPassword />
                    </Route>
                    <PrivateRoute path="/">
                        <Home />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
