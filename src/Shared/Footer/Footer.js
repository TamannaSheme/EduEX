import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'> 

      <div className='container'>
              <div className="row">
          <div className="col-12 col-md-6 col-lg-4 about-container"> 
            <h3> Eduex </h3>
            <p> Learning online about science. Teaching tool for Diploma programme and Middles years programme of the International Baccalaureate. </p>
           </div>
          <div className="col-12 col-md-6 col-lg-4">  
          
            <h4> Quick Link </h4>
            <Link to='home'>  Home </Link>
            <Link to='services'> All Course</Link>
            <Link to='review'>  Reviews </Link>
            <Link to='about'>  About </Link>
            <Link to='blog'>  blog </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">

       <h4> Address </h4>
            <h5> 155/1 Dhanmondi </h5>
            <h5> Dhaka-1205 </h5>
            <h5> Bangladesh </h5>
          </div>

              </div>
        </div>


        </div>
    );
};

export default Footer;