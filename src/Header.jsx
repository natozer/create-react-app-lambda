import React, { useState } from 'react';
import './Header.css'; 
import MenuIcon from './assets/menu.svg'; 

const Header = ({onMenuClick}) => {


  return (
      <header>
        <div className="header-content">
          <div className="name">
            <h1>ATELIER EXAVIL</h1>
          </div>
          <div className="menu-icon" onClick={onMenuClick}>
            <img src={MenuIcon} alt="Menu" />
          </div>
        </div>
      </header>
  );
}

export default Header;