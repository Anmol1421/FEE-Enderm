import React from 'react';
import image7 from '../images/E.png'
import '../Css/navbar.css'

const Navbar = () => {
  return (
    <header style={{backgroundColor:'#121b25'}}>
      <a href="#" className="logo">
        <img src={image7} width="100%" alt="My logo" />
      </a>
      <ul className="navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/buy">Buy</a>
        </li>
        <li>
          <a href="/sell">Sell</a>
        </li>
        <li>
          <a href="/rent">Rent</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;