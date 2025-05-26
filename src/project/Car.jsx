import React from 'react'
import { Carousel, Container,Row,Col } from 'react-bootstrap'
import './Car.css'
import Cards from './Cards'
const Car = () => {
    return (
        <div className='mt-3'>
           
    <Container className="my-5">
  <Row className="justify-content-center">
    <Col md={7} className="carousel-container">
      <div className="carousel-design-left"></div>
      <div className="carousel-design-right"></div>
      
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            src="https://www.epicgardening.com/wp-content/uploads/2021/10/red-flower-dahlias.jpg"
            className="d-block w-100"
            alt="Dog 1"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="https://bouqs.com/blog/wp-content/uploads/2023/01/lotus-flower.jpg"
            className="d-block w-100"
            alt="Dog 2"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
            className="d-block w-100"
            alt="Dog 3"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
</Container>
<Cards/>
 </div>
    )
}

export default Car
