import React from "react";
import "../component_styles/Footer.css";
import { ReactComponent as DownIcon } from "../assets/down.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-title">
          CONTACT ME
         <DownIcon/>
        </div>
      
      <div className="footer-content">
        <a href="mailto:natozer@gmail.com">natozer@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
