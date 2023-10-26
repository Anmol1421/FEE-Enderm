import React from 'react'
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/chail.jpg';
import image7 from '../images/E.png';
import image8 from '../images/login.avif';
import image9 from '../images/roof.jpg';
import Navbar from './navbar';
import '../Css/sell.css'

export default function Sell() {
  return (
    <>
  {/* <title>Sell Your Property</title>
  <link rel="stylesheet" type="text/css" href="sell.css" />
  <header>
    <h1>Sell Your Property</h1>
  </header>
  <nav>
    <ul>
      <li>
        <a href="main.html">Home</a>
      </li>
      <li>
        <a href="buy.html">Buy</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav> */}
  <section className="property-listing">
    <article className="property">
      <img src={image5} width="100%" alt="Your Property" />
      <h2>
        Name: <input type="text" placeholder="name your place" />
      </h2>
      <p>
        Details: <input type="text" placeholder="no. of bedroom and all" />
      </p>
      <p>
        Price: <input type="text" placeholder="Enter your price" />
      </p>
      <button>Sell Your Property</button>
    </article>
  </section>
  <footer>
    <p>© 2023 Real Estate</p>
  </footer>
</>

  )
}
