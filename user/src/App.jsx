// import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
// import PrivateRoute from './components/private_route';
// import Home from './pages/Home';
import React from 'react';
import Forgot_password from './pages/ForgotPassword';
import OpeningPage from './Pages/OpeningPage';
import Desktop17 from './Pages/Desktop17';
import SplashScreen from './Pages/SplashScreen';
import Desktop9 from './Pages/Desktop9';
import Desktop8 from './Pages/Desktop8';
import Wireframe1 from './Pages/Wireframe1';
import SignIn from './pages/Signup';
import Desktop_5 from './Pages/Desktop-5';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/recovery" element={< Forgot_password/>} />
          <Route exact path="/" element={<Wireframe1/>} />
          <Route exact path="/d" element={<OpeningPage/>} />
          <Route exact path="/a" element={<Desktop17/>} />
          <Route exact path="/l" element={<SplashScreen/>} />
          <Route exact path="/b" element={<Desktop9/>} />
          <Route exact path="/c" element={<Desktop8/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/z" element={<Desktop_5/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
