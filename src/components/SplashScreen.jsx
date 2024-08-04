import React from "react";
import "../component_styles/SplashScreen.css";
import { renderTextWithSpan } from "../utils";

function SplashScreen({ onEnterSite, buttonVisible, splashScreenRef }) {
  return (
    <div className="splash-screen" ref={splashScreenRef}>
      <div className="splash-overlay" />
      <div className="splash-header">
        {renderTextWithSpan("NATHANIEL TOZER 2025", "vertical-stack")}
      </div>
      {buttonVisible && <button onClick={onEnterSite}>Enter Site</button>}
    </div>
  );
}

export default SplashScreen;
