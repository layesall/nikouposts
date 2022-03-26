import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <header className='navbar-component'>
      <Link to='/' className='nav-brand'>Nikou<span className='nav-posts'>Posts</span></Link>
      <nav className='nav-links'>
        <Link to='/' className='link-item'>Home</Link>
      </nav>
    </header>
  );
}
