import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ShopNav.css';
import { Link } from 'react-router-dom';
const ShopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3">
      <div className="container">
        
        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Logo */}
        <a className="navbar-brand mx-auto fw-bold" href="#" style={{ fontSize: '22px', letterSpacing: '2px',color: 'green'  }}>
       
        </a>

        {/* Right Side Icons */}
        <div className="nav-icons d-flex align-items-center gap-3 order-lg-last">
          <i className="bi bi-person" style={{ fontSize: "20px", color: "black" }}></i>
          <i className="bi bi-cart" style={{ fontSize: "20px", color: "black" }}></i>
        </div>

        {/* Center Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">

            {/* Shop by Collections Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="collectionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop By Collections
              </a>
              <ul className="dropdown-menu" aria-labelledby="collectionsDropdown">
                <li><a className="dropdown-item" href="#">New Collection</a></li>
                <li><a className="dropdown-item" href="#">Flowers In A Box</a></li>
                <li><a className="dropdown-item" href="#">Flowers In A Vase</a></li>
                <li><a className="dropdown-item" href="#">Bunches</a></li>
                <li><a className="dropdown-item" href="#">Luxury</a></li>
              </ul>
            </li>

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/home">Home</Link>
            </li>

            {/* Shop by Occasions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="occasionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop By Occasions
              </a>
              <ul className="dropdown-menu" aria-labelledby="occasionsDropdown">
               
                <li> <Link className="dropdown-item" to="/bday">Birthday Flowers</Link></li>
                
                <li><Link className="dropdown-item" to="/vday"> Valentine's Day Special</Link></li>
                <li><Link className="dropdown-item" to="/fday"> Father's Day</Link></li>
                <li><Link className="dropdown-item" to="/mday">Mother's Day </Link></li>
             
              
                
              </ul>
            </li>

            {/* Floral Decor */}
            <li className="nav-item">
              <a className="nav-link" href="#">Floral Decor</a>
            </li>

           

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ShopNav;
