import React from 'react'
import './Homepage.css';
import Nav from './Nav';
import Car from './Car';
import Aboutpage from './Aboutpage';
import Serv from './Serv';
import Foot from './Foot';
const Homepage = () => {
  return (
    <>
    
    <div>

  <div className="landing-container">
  <div className="side-images">
    <img className="img img1" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg" alt="Flower 1" />
    <img className="img img2" src="https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg" alt="Flower 2" />
    <img className="img img3" src="https://i.pinimg.com/236x/c6/7b/f1/c67bf10d292f10a7eca8e51b668348b7.jpg" alt="Flower 3" />
  </div>

  <div className="main-text">
    <h1>Welcome to Bloom Boutique</h1>
    <p>Fresh Flowers Delivered With Love</p>
      <a href="#"  className="btn btn-success mx-4">Get Started</a>
  </div>
</div>

</div>
<Car/>
<Aboutpage/>
<Serv/>
<Foot/>
    </>
  )
}

export default Homepage
