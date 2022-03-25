import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home/Home'
import Navbar from './Navbar/Navbar';

export default function App() {
  return (
    <div className='app-component'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
}

