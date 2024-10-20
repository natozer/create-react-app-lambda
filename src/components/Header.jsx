import React, { useRef } from "react";
import { renderTextWithSpan } from "../utils";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
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

function Header({ isPlaying, toggleMusic }) {
  const headerRef = useRef(null);

  return (
      <header className="App-header" ref={headerRef}>
        <div className="header-left">
          {renderTextWithSpan("Nathaniel Tozer 2025 ✹ ", "vertical-stack")}
        </div>
        <div className="header-right">
          <MusicVisualizer isPlaying={isPlaying} />
          <ToggleButton isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <a href="mailto:natozer@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </header>
  );
}

export default Header;
