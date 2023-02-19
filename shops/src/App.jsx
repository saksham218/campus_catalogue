import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Shop_Order from './Pages/Shop_order';
import Home from './Pages/Home';
import ShopDetails from './Pages/ShopDetails';
// import ShopDetails2 from './Pages/ShopDetails2';
import ShopTimingandItem from './Pages/ShopTimingandItem';
import SignIn from './Pages/signin';
import Review from './Pages/Review';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/shop_order" element={<Shop_Order />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ShopDetails" element={<ShopDetails />} />
          {/* <Route exact path="/ShopDetails2" element={<ShopDetails2 />} /> */}
          <Route exact path="/ShopTimingandItem" element={<ShopTimingandItem />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/review" element={<Review/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
