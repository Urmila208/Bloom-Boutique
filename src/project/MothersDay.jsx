import React from 'react';

import './Mothersday.css';
import { Carousel, Container,Row,Col } from 'react-bootstrap'
const MothersDay = () => {
  return (
    <div className="fathers-day-container">
      <h1 className="fathers-day-heading">Happy Mother's Day 💙</h1>
     
<Container className="my-5">
  <Row className="justify-content-center">
    <Col md={7} className="carousel-container">
      <div className="carousel-design-left"></div>
      <div className="carousel-design-right"></div>
      
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2025-05/11/full/1746930281-1206.png?im=FitAndFill=(826,465)"
            className="d-block w-100"
            alt="Dog 1"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
  </Carousel.Item>

   <Carousel.Item interval={500}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6su5uHMOEhz1nsWT0BWjcm6Wv8EAPKkaAqEvDdeR5CzBFAFbATsq4Gz9Ac8RLiz1vRR4&usqp=CAU"
            className="d-block w-100"
            alt="Dog 1"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
  </Carousel.Item>

   <Carousel.Item interval={500}>
          <img
            src="https://media.assettype.com/freepressjournal/2025-05-10/odazt2ab/9.jpg"
            className="d-block w-100"
            alt="Dog 1"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
  </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
</Container>


      <div className="flower-card-grid">
        {['Rose', 'Sunflower', 'Orchid','lotus'].map((flower, index) => (
          <div className="flower-card animated-card" key={index} style={{ animationDelay: `${index * 0.3}s` }}>
            <img src={`/images/${flower.toLowerCase()}.jpg`} alt={flower} className="flower-img" />
            <h3>{flower}</h3>
            <p>Price: ${20 + index * 5}</p>
            <button className="shop-btn">Shop Now</button>
          </div>
        ))}
      </div>
      <div className="flower-card-grid">
        {['Rose', 'Sunflower', 'Orchid','lotus'].map((flower, index) => (
          <div className="flower-card animated-card" key={index} style={{ animationDelay: `${index * 0.3}s` }}>
            <img src={`/images/${flower.toLowerCase()}.jpg`} alt={flower} className="flower-img" />
            <h3>{flower}</h3>
            <p>Price: ${20 + index * 5}</p>
            <button className="shop-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MothersDay;
