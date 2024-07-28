import React from "react";
import "../component_styles/SplashScreen.css";

function SplashScreen({ onEnterSite, buttonVisible, splashScreenRef }) {
  const renderTextWithSpan = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="vertical-stack">
        {char}
      </span>
    ));
  };

  return (
    <div className="splash-screen" ref={splashScreenRef}>
      <div className="splash-overlay" />
      <div className="splash-header">
        {renderTextWithSpan("NATHANIEL TOZER 2025 ")}
      </div>
      
      {buttonVisible && <button onClick={onEnterSite}>Enter Site</button>}
    </div>
  );
}

export default SplashScreen;
