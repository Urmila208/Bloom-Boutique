import React from 'react';
import './Foot.css'; // We'll still use this for extra styles

const Foot = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* Company Address */}
        <div className="footer-section">
          <h4>Our Shop</h4>
          <p>
            707, Skywalk the Element<br />
            Jagatpur Road Gota, Ahmedabad 382424<br />
            Email: info@builupeng.com<br />
            Phone: +91 89097 67890
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Builtup Technologies. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Foot;
