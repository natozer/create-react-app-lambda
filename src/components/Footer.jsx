import React from "react";
import "../component_styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <p>CONTACT ME</p>
        </div>
        <div className="footer-item">
          <a href="mailto:natozer@gmail.com">natozer@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
