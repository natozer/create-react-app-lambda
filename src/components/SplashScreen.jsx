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
      <h1 className="fs">Coming in 2025</h1>
      <h2 className="wd">Nathaniel Tozer</h2>
      <h2 className="fst">Work in progress</h2>
    </div>
  );
}

export default SplashScreen;
