import React, { useRef } from "react";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import "../component_styles/AppHeader.css";

function MusicVisualizer({ isPlaying }) {
  return (
    <div className={`visualizer ${isPlaying ? "playing" : ""}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bar"></div>
      ))}
    </div>
  );
}

function ToggleButton({ isPlaying, toggleMusic }) {
  return (
    <button onClick={toggleMusic} aria-label={isPlaying ? "Mute" : "Unmute"}>
      {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
    </button>
  );
}

function Header({ isPlaying, toggleMusic, onContactClick }) {
  const headerRef = useRef(null);
  const text = "NATHANIEL ADDISON TOZER // FULL STACK WEB DEVELOPER // CREATIVE DESIGNER";

  return (
    <div className="header-container">
      <header className="App-header" ref={headerRef}>
        <div className="header-left">
          {text.split('').map((char, index) => (
            <span key={index} className="yellow-letter">
              {char}
            </span>
          ))}
        </div>
        <div className="header-right">
          <MusicVisualizer isPlaying={isPlaying} />
          <ToggleButton isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <div className="navlink" onClick={onContactClick} role="button" tabIndex="0">
            CONTACT
          </div>
        </div>
      </header>
    </div>
  );
  
}

export default Header;
