import React from 'react';
import './App.css';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from '../pages/Verify';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="signin" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="verify" element={<Verify />} />
          <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
