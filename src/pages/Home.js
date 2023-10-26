import React from 'react'
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image7 from '../images/E.png';
import '../Css/main.css';

export default function Home() {
  return (
    <>

  <section className="home"> 
    <div className="home-text">
      <h1>Your Peace Place, Your Home Awaits You!</h1>
      <p>{/*-------------*/}</p>
      <div className="h-search">
        <form action="">
          <input
            type="search"
            placeholder="Search by location..."
            className="search - input"
          />
          <input type="submit" defaultValue="Search" />
        </form>
      </div>
    </div>
    <div className="images/home-img" >
      <img src={image1} />
    </div>
  </section>
  <section className="property" >
    <div className="center-left">
      <h2>Popular Residance</h2>
    </div>
    <div className="property-content">
      <div className="row">
        <img src={image2} />
        <h5>The Khyber Resort, Gulmarg</h5>
        <p>The Palace Road, Chail, Himachal Pradesh</p>
        <p>6 Bed</p>
        
         
  
      </div>
      <div className="row">
        <img src={image3}  />
        <h5>Wildflower Hall, Himachal Pradesh</h5>
        <p>The Wildflower Palace , Himachal Pradesh</p>
        <p>6 Bed</p>
        
      </div>
      <div className="row">
        <img src={image4}  />
        <h5>Nandadevi Estate, Binsar</h5>
        <p>The Nandadevi Estate Palace, Binsar</p>
        <p>6 Bed</p>
        
      </div>
    </div>
    <div className="center-btn">
      <a href="#">View All Properties</a>
    </div>
  </section>
  <section className="about">
    <div className="about-img" >
      <img src={image5}  />
    </div>
    <div className="about-text" >
      <h2>We Help People To Find Homes</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        laborum similique dicta reprehenderit est explicabo esse nostrum iusto
        possimus fugit ea quo, tenetur alias cupiditate. Recusandae asperiores
        eaque quaerat. Ipsa?
      </p>
      <a href="#" className="btn">
        Get In Touch
      </a>
    </div>
  </section>
  <section className="Subscribe" >
    <div className="Subscribe-content">
      <h2>Let's Simply Began With Reesse</h2>
      <p>{/*-----------*/}</p>
      <a href="#" className="btn">
        Get Started
      </a>
    </div>
  </section>
  {/*CONTACT*/}
  <section className="contact" >
    <div className="contact-content">
      <img src={image7} alt="Contact Image" />
    </div>
    <div className="contact-content">
      <h4>Contact Information</h4>
      <p>Phone: +123-456-7890</p>
      <p>Email: info@reese.com</p>
      <p>Address: 123 Main St, City</p>
      <div className="icons">
        <a href="#">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#">
          <i className="bx bxl-linkedin-square" />
        </a>
      </div>
    </div>
  </section>
  {/*-JAVASCRIPT*/}
</>

  )
}
