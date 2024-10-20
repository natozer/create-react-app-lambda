import React from "react";
import "../component_styles/SplashScreen.css";

function SplashScreen({ onEnterSite, buttonVisible, splashScreenRef }) {
  return (
    <div className="splash-screen" ref={splashScreenRef}>
      {buttonVisible && <button onClick={onEnterSite}>Enter Site</button>}
    </div>
  );
}

export default SplashScreen;
