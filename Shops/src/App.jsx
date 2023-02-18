import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Shop_Order from './Pages/Shop_order';
import Desktop22 from './Pages/Desktop22';
import Desktop23 from './Pages/Desktop23';
import Desktop24 from './Pages/Desktop24';
import Desktop25 from './Pages/Desktop25';
import SignIn from './Pages/signin';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/e" element={<Shop_Order />} />
          <Route exact path="/a" element={<Desktop22 />} />
          <Route exact path="/b" element={<Desktop23 />} />
          <Route exact path="/c" element={<Desktop24 />} />
          <Route exact path="/d" element={<Desktop25 />} />
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
