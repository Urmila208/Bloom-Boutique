import React from 'react';

const Birthday = () => {
  const styles = `
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f2f5;
      margin: 0;
      padding: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .card-row {
      display: flex;
      gap: 24px;
      max-width: 960px;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    .card {
      background: #ffffff; 
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      flex: 1 1 30%;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      height:320px;
    }
    .card:hover {
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      transform: translateY(-6px);
    }
    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover; 
      user-select: none;
    }
    .card-content {
      padding: 10px 12px;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      
    }
    .card-content > div {
      flex: 1; 
      color: #fff;
      padding: 12px 10px;
      border-radius: 10px;
      text-align: center;  
      user-select: none; 
      transition: background-color 0.3s ease;
    }
  
    
    .shop-button {
      background-color: #28a745;
      border: none;
      color: white;
      font-weight: 700;
      padding: 10px 0;
      text-align: center;
      font-size: 1.1rem; 
      cursor: pointer;
      transition: background-color 0.3s ease;
      user-select: none;  
    }
    .shop-button:hover {
      background-color: #1e7e34;
    }
    @media (max-width: 700px) {
      .card-row {
        flex-direction: column;
        align-items: center;
      }
      .card {
        max-width: 100%;
        width: 80%;
        margin-bottom: 20px;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="card-row">
        <div className="card">
          <img
            src="https://api.floraindia.com/upload/FoD7XBLNzM1736590003000.webp"
            alt="Item 1"
          />
          <div className="card-content">

            <h3>lotus flowers</h3>

            <p><b>price : 20$</b></p>

          </div>
          <button className="shop-button">Shop Now</button>
        </div>
        <div className="card">
          <img
            src="https://www.toyflorist.com/cdn/shop/collections/IMG_2167.jpg?v=1734139212&width=750"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://www.floristique.sg/cdn/shop/files/Burgundy-2a-358164_301x377.jpg"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZcTjg6DKc08a15zGEzd0f4ZceQl3AvnDf8g&s"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://www.shutterstock.com/image-photo/beautiful-bouquet-tulip-flowers-happy-260nw-2416575587.jpg"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKdyt7hzMh93OUrCv2QDz5X34I_64XeLfzWbPDV7DjwYsIf_qRU-PEAMhwIhCWB8DDBg&usqp=CAU"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>
        <div className="card">
          <img
            src="https://www.redflowersngifts.com/cdn/shop/products/birthdayflowers4.jpg?v=1665219174"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://i.pinimg.com/564x/28/af/00/28af00ddd5c72abf585d3bea5bd14c8f.jpg"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

        <div className="card">
          <img
            src="https://i.pinimg.com/564x/07/59/02/07590223e7d51f698df4901d9a08a2e3.jpg"
            alt="Item 2"
          />
          <div className="card-content">
            <h3>lotus flowers</h3>
            <p><b>price : 20$</b></p>
          </div>
          <button className="shop-button">Shop Now</button>
        </div>

      </div>
    </>
  );
};

export default Birthday;
