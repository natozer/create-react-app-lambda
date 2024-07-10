import React, { useRef } from "react";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import { renderTextWithSpan } from "../utils";
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

  return (
    <div className="header-container">
      <header className="App-header" ref={headerRef}>
        <div className="header-left">
          {renderTextWithSpan("NATHANIEL TOZER 2024 ", "vertical-stack")}
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
