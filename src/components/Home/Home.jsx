import React from 'react';
import Posts from '../Posts/Posts';
import './Home.css';

export default function Home() {
  return (
    <div className='home-component'>
      <div className='home-banner'>
        <h2>Welcome</h2>
        <h1>Get the last posts...</h1>
      </div>
      <Posts />
    </div>
  );
}
