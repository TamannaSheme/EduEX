import React from 'react';
import { Carousel } from 'react-bootstrap';
import Choice from '../../AllPages/Choice/Choice';
import Reviews from '../../AllPages/Reviews/Reviews';
import Services from '../../AllPages/Services/Services';
import baner1 from '../../images/baner-01.jpeg';
import baner2 from '../../images/baner-02.jpeg';
import baner3 from '../../images/baner-03.jpeg';
import baner4 from '../../images/baner-04.jpeg';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Carousel>
  <Carousel.Item>
    <img
      className=" d-block w-100 baner-img"
      src={baner1}
      alt="First slide"
    />
   
    <Carousel.Caption>
      <h3> For every student,
every classroom.
Real results </h3>
      <p> We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" d-block w-100 baner-img"
      src={baner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3> Radical talent transformation is here </h3>
      <p> Changing lives, businesses, and nations through talent transformation in digital technologies. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 baner-img"
      src={baner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3> Start learning from
the world’s best institutions </h3>
      <p> 
Propel your career, get a degree, or expand your knowledge at any level. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 baner-img"
      src={baner4}
      alt="fouth slide"
    />

     <Carousel.Caption>
      <h3> Short online courses </h3>
      <p> Choose from hundreds of online courses from top universities and specialist organisations.</p>
    </Carousel.Caption>
   </Carousel.Item>
   </Carousel>
    
      <Services></Services>
      <Choice></Choice>
      <Reviews></Reviews>
     
        </div>
    );
};

export default Home;