import React from 'react'
import './Serv.css'
const Serv = () => {
  return (
    <div className="home-container">
      
    {/* Left side - Image */}
    <div className="home-image">
      <img 
        src="https://i.pinimg.com/originals/20/24/e7/2024e7a37791122039d4704d1cbab979.jpg" 
        alt="Home Flower" 
      />
    </div>

    {/* Right side - Text */}
    <div className="home-text">
      <h1>We Provide Services</h1>
      <p>
        Discover the freshest and most beautiful flowers for every occasion. 
        We deliver love, beauty, and joy to your doorstep. 
        Explore our collection now!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam porro dolorem repellat, commodi ratione laboriosam, neque dolor facere corrupti blanditiis rerum doloribus ipsum est eum recusandae aliquam facilis deserunt debitis.
      </p>
      <button className="home-btn">Read More</button>
    </div>

  </div>
  )
}

export default Serv
