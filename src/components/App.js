import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Post from './Post/Post';

export default function App() {
  return (
    <div className='app-component'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/post/:id' element={ <Post /> } />
        <Route path='*' element={ <Home /> } />
      </Routes>
      <Footer />
    </div>
  );
}

