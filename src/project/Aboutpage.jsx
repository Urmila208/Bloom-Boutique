import React from 'react';
import './Aboutpage.css'; // Make sure to create and import this CSS file

const Aboutpage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Blossom Boutique</strong> — where every petal tells a story! 
          We are passionate about providing the freshest, most beautiful flowers 
          for all occasions — whether it's a birthday, wedding, anniversary, or just because.
        </p>
        <p>
          Our journey began in 2010 with a small boutique and a big dream: 
          to spread happiness through the timeless beauty of flowers. 
          Today, we proudly serve thousands of customers, creating moments of joy and lasting memories.
        </p>
        <p>
          At Blossom, quality and customer satisfaction are at the heart of everything we do. 
          From handpicking the best blooms to carefully crafting each bouquet, 
          we ensure every order is special.
        </p>
        <button className="about-btn">Explore Our Collection</button>
      </div>
      {/* <div className="about-image"> */}
        {/* <img 
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
          alt="Flower Shop"
         /> */}
    
<div style={{ flex: 1 }}>
    <video
      src="but.mp4"
      controls
      autoPlay
      loop
      muted
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    ></video>
</div>
      </div>
    // </div>
  );
};

export default Aboutpage;
