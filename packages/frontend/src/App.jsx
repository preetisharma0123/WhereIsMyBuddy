import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/auth/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
