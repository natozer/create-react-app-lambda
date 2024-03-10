import React from 'react';
import './Header.css'; 
import MenuIcon from './assets/menu.svg'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="name">
          <h1>Atelier Exavil</h1>
        </div>
        <div className="menu-icon">
          <img src={MenuIcon} alt="Menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
