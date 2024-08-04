import React from "react";
import "../component_styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <span className="footer-title">
          CONTACT ME
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path fill="var(--primary-color)" d="M12 15l-8-8h16l-8 8z" />
          </svg>
        </span>
      
      <div className="footer-content">
        <a href="mailto:natozer@gmail.com">natozer@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
