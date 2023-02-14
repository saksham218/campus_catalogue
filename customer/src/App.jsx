// import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
// import PrivateRoute from './components/private_route';
// import Home from './pages/Home';
import React from 'react';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/recovery-password" element={< ForgotPassword/>} />
          <Route exact path="/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
