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
      <h1 className="fs">FULL STACK</h1>
      <h2 className="wd">ATELIER EXAVIL</h2>
      <h2 className="fst">WEB DEVELOPMENT</h2>
      <button onClick={onEnterSite}>Enter Site</button>
    </div>
  );
}

export default SplashScreen;
