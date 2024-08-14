import { useState } from 'react';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/signin/signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Where is my buddy?</h1>
      <Routes>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </>
  )
}

export default App;
