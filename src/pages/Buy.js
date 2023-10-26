import React from 'react'
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import Navbar from './navbar';
import '../Css/rent.css'

export default function Buy() {
  return (
   <>
  <section className="property-listing">
    <article className="property">
      <img src={image1} width="100%" alt="Property 1" />
      <h2>Luxury Villa</h2>
      <p>3 bedrooms, 3 bathrooms</p>
      <p>$50,000</p>
      <button>View Details</button>
    </article>
    <article className="property">
      <img src={image2} width="100%" alt="Property 2" />
      <h2>Beautiful Appartment</h2>
      <p>5 bedrooms, 5 bathrooms</p>
      <p>$52,000</p>
      <button>View Details</button>
    </article>
    <article className="property">
      <img src={image3} width="100%" alt="Property 3" />
      <h2>Villa</h2>
      <p>5 bedrooms, 5 bathrooms</p>
      <p>$30,000</p>
      <button>View Details</button>
    </article>
    <article className="property">
      <img src={image4} width="100%" alt="Property 3" />
      <h2>House</h2>
      <p>4 bedrooms, 3 bathrooms</p>
      <p>$45,000</p>
      <button>View Details</button>
    </article>
  </section>
</>
  )
}
