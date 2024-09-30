// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS



const Navbar = () => {
  return (
    <nav className="navbar">
     <div className='container align-items-baseline'>
     <div className="logo-container">
        <img src="./sanju.svg" alt=""  className='sitelogo'/>
      </div>
    
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/WhatIDo">What I Do</Link></li>
        <li><Link to="/Resume">My Resume</Link></li>
        <li><Link to="/">Portfolio</Link></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
   









