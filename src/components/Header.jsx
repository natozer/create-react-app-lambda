import React, { useRef} from "react";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import "../component_styles/AppHeader.css";

function Header({ isPlaying, toggleMusic, onContactClick}) {
  const headerRef = useRef(null);

  return (
    <header
      className="App-header"
      ref={headerRef}
    >
      <div>NATHANIEL ADDISON TOZER - FULL STACK WEB DEVELOPER </div>
      <nav>
        <div className="navlink" onClick={onContactClick}>
          CONTACT
        </div>
        <button onClick={toggleMusic}>
          {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
