import React from 'react';
import './FathersDay.css';

const FathersDay = () => {
  return (
    <div className="fathers-day-container">
      <h1 className="fathers-day-heading">Happy Father's Day 💙</h1>
      <p className="fathers-day-subtext">Celebrate Dad with the perfect bloom 🌼</p>

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

export default FathersDay;
