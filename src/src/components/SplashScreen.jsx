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
          <div className="splash-overlay"/>

      <div className="splash-header">
        {" "}
        {renderTextWithSpan("NATHANIEL TOZER 2024 ")}
      </div>
      <h2>FULL STACK</h2>
      <h1>NATHANIEL TOZER</h1>
      <h2>WEB DEVELOPER</h2>  
     
      <button onClick={onEnterSite}>Enter Site</button>
    </div>
  );
}

export default SplashScreen;
