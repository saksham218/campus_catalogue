import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Shop_Order from './Pages/Shop_order';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop_Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
