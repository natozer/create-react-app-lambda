import React from "react";
import "./Header.css";
import { ReactComponent as MuteIcon } from "./assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "./assets/unmute.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";

const Header = ({ isPlaying, toggleMusic, onMenuClick }) => {
  return (
    <header>
      <h1>Atelier Exavil</h1>
      <div className="buttonContainer">
        <button onClick={toggleMusic}>
          {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
        </button>
        <button onClick={onMenuClick}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
