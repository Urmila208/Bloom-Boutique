// components/FlowerCard.js
import React from 'react';
import './FlowerCard.css'; // Optional separate CSS

const FlowerCard = ({ image, name, price }) => {
  return (
    <div className="flower-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>price : {price}$</p>
      <button>Shop Now</button>
    </div>
  );
};

export default FlowerCard;
