import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../src/components/signin';

const App = () => {
  return (
    <>
      <p>Where is my buddy?</p>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
