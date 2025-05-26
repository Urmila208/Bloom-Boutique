import React from 'react';
import './Valentinse.css'; // Make sure this CSS file is imported

import FlowerCard from './FlowerCard';
const ValentinsDay = () => {
  return (
    <div className="container">
      <h1>"Every love story is beautiful, but ours is my favorite."</h1>
     <h2 className="valentine-message">Just pick up one flower for your love 🌹</h2>
      <div className="box"></div>
     <div className="valentine-row">
  <div className="valentine-box d-flex">
    <span className="valentine-text">Love isn’t just something you say, it’s something you do. ❤️</span>
  </div>

  <div className="valentine-box d-flex">
    <span className="valentine-text">Happy Valentine’s Day ❤️</span>
  </div>

  <div className="valentine-box d-flex">
    <span className="valentine-text">In your smile, I see something more beautiful than the stars. ❤️</span>
  </div>
   </div>
  {/* ✅ Flower Cards Section */}
      <div className="flower-card-grid">
        <FlowerCard
          image="https://i5.walmartimages.com/asr/1e0e705d-5d7e-4d66-b097-154e0d57de20_1.8b97509e999445226c2726fc2a5dbae1.jpeg"
          name="Red Rose"
          price={20}
        />
        <FlowerCard
          image="https://www.flowersinthewoods.com.au/cdn/shop/products/image_c5186ebc-d195-4cf3-82e2-6e1aa8b1996e_1024x1024.jpg?v=1686096217"
          name="Hibiscus"
          price={25}
        />
        <FlowerCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl41JYz-uTdS92hhwGz3iHK__r4q2KCzgwww&s"
          name="Lotus"
          price={30}
        />
         <FlowerCard
          image="https://images.stockcake.com/public/6/d/d/6ddda5aa-a378-4a67-9e2e-9927363d5581_large/dewy-red-rose-stockcake.jpg"
          name="Lotus"
          price={30}
        />
         <FlowerCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK8VX-ZTLvWOb63snyFghul_F8eMCfAuCjA&s"
          name="Lotus"
          price={30}
        />
          <FlowerCard
          image="https://rukminim2.flixcart.com/image/850/1000/l3lx8cw0/plant-sapling/3/i/i/no-perennial-yes-yellow-rose-flower-plant-1-midnight-morning-original-imagep4pqr42xbm4.jpeg?q=90&crop=false"
          name="Lotus"
          price={30}
        />
          <FlowerCard
          image="https://rukminim2.flixcart.com/image/850/1000/l3lx8cw0/plant-sapling/4/p/o/no-perennial-yes-violate-rose-live-plant-1-midnight-morning-original-imagep4ewpsy5zzy.jpeg?q=20&crop=false"
          name="Lotus"
          price={30}
        />
          <FlowerCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdPN5ofkKX1CEQHoPjQ0Mxk0XOgcn2MSdgA&s"
          name="Lotus"
          price={30}
        />
        
      </div>
   

    </div>
    
  );
};

export default ValentinsDay;
