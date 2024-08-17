import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/signin';

function App() {
  return (
    <Router>
      <h1>Where is my buddy?</h1>
      <Routes>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
