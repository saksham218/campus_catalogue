// import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
// import PrivateRoute from './components/private_route';
// import Home from './pages/Home';
import React from 'react';
import Forgot_password from './pages/ForgotPassword';
import OpeningPage from './Pages/OpeningPage';
import personalizeShops from './Pages/personalizeShops';
import SplashScreen from './Pages/SplashScreen';
import shopMenu from './Pages/shopMenu1';
// import shopCatalogue from './Pages/shopCatalogue';
import Home from './Pages/Home';
import SignIn from './pages/Signup';
import DropPage from './Pages/DropPage';
import ShoppingCart from './Pages/ShoppingCart';
// import Review from './Pages/Review_page';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/recovery" element={<Forgot_password/>} />
          <Route exact path="/" element={<Home/>} />
           <Route exact path="/d" element={<OpeningPage/>} />
          <Route exact path="/personalizeShops" element={<personalizeShops/> } />
          <Route exact path="/Splash" element={<SplashScreen/>} />
          <Route exact path="/shopMenu" element={<shopMenu/>}  />
          {/* <Route exact path='/ShopCatalogue/:id' element={<shopCatalogue />} /> */}
          <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
          <Route exact path="/print" element={<DropPage/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          {/* <Route exact path="/review" element={<Review/>} /> */}
        </Routes>
       </Router>
     </div>
  );
}

export default App;
