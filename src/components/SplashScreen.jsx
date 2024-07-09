import React from "react";
import "../component_styles/SplashScreen.css";

function SplashScreen({ onEnterSite }) {
  const renderTextWithSpan = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="vertical-stack">
        {char}
      </span>
    ));
  };

  return (
    <div className="splash-screen">
      <div className="splash-header">
        {" "}
        {renderTextWithSpan("NATHANIEL TOZER 2024 ")}
      </div>
      <button onClick={onEnterSite}>Enter Site</button>
    </div>
  );
}

export default SplashScreen;
