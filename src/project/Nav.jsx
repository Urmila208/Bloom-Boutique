import { Link } from 'react-router-dom';
import './Nav.css'; // Optional for custom styles
import Homepage from './Homepage';

const Nav = () => {
  return (
    <>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-success" href="#">
          🌸 Bloom Boutique
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
             <Link className="nav-link nav-hover" to="/home">Home</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link nav-hover" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link nav-hover" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/serv">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/login">Login</Link>
            </li>
          </ul>
          <button className="btn btn-success ms-3">Order Now</button>
        </div>
      </div>
      
    </nav>
    </>
  );
};

export default Nav;

































// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Nav.css'; // Optional for custom styles

// const Nav = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//       <div className="container">
//         <Link className="navbar-brand fw-bold text-success" to="/">
//           🌸 Bloom Boutique
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link nav-hover" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link nav-hover" to="/shop">Shop</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link nav-hover" to="/about">About Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link nav-hover" to="/contact">Contact</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link nav-hover" to="/login">Login</Link>
//             </li>
//           </ul>
//           <Link to="/order">
//             <button className="btn btn-success ms-3">Order Now</button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
