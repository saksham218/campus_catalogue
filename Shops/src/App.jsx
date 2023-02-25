import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from "react";

import Shop_Order from './Pages/Shop_order';
import Home from './Pages/Home';
import ShopDetails from './Pages/ShopDetails';
// import ShopDetails2 from './Pages/ShopDetails2';
import ShopTimingandItem from './Pages/ShopTimingandItem';
import SignIn from './Pages/signin';
import WaitingApproval from './Pages/WaitingApproval';
import { Backend_URL,getShop } from "../apis/api";
function App() {
  const [shop, setShop] = useState({
    basic_info: {
      name: '',
      image: '',
      phone: '',
      email: '',
    },
  });
  useEffect(() => {
    getShop().then((res) => {
      if (res.data.shop) {
        setShop(res.data.shop);
        console.log(res.data.shop);
      }
    }).catch((err) => {
      console.log(err.response.status, err.response.data);
      if (err.response.status === 401) {
        localStorage.removeItem("shop_token");
        window.location.href = "/signin";
      }
    })
  }, [])
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/shop_order" element={<Shop_Order shop={shop}/>} />
          <Route exact path="/" element={<Home shop={shop}/>} />
          <Route exact path="/ShopDetails" element={<ShopDetails />} />
          {/* <Route exact path="/ShopDetails2" element={<ShopDetails2 />} /> */}
          <Route exact path="/ShopTimingandItem" element={<ShopTimingandItem shop={shop}/>} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/shop-not-approved" element={<WaitingApproval />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
