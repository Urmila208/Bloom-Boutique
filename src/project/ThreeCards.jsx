import React from 'react';
import ShopNav from './ShopNav';

const ThreeCards = () => {
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
    <ShopNav/>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="card-row">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
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
            src="https://m.media-amazon.com/images/I/61IzHdY1YSL.jpg"
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
            src="https://i.pinimg.com/736x/5a/7f/a9/5a7fa9a020ef94176d3b63f4663fea15.jpg"
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
            src="https://freshknots.in/wp-content/uploads/2023/03/lotus-Freshknots.png"
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
            src="https://i.pinimg.com/736x/4d/50/6c/4d506c5825262993e40e57ba1837cf28.jpg"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW4G3re0gxCdywYHAS9NTUbtkhut3C5YiHcocIqb4PQM98XzKuqSh0XZFadMZ2bwfokc&usqp=CAU"
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
            src="https://hips.hearstapps.com/hmg-prod/images/azalea-1508785048.jpg?crop=1.00xw:0.669xh;0,0.174xh&resize=980:*"
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
            src="https://images.fineartamerica.com/images/artworkimages/medium/1/pink-spring-beautiful-flowers-guido-montanes-castillo.jpg"
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
            src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=3840&auto=webp"
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

export default ThreeCards;
