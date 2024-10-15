import React, { useState, useRef } from "react";
import "../component_styles/ThemeStation.css";
import bassDrop from "../assets/bass_drop.mp3";

const themes = [
  {
    name: "Pretty Nice Day", 
    primary: "silver",
    secondary: "#173d6b",
    tertiary: "var(--another-blue)",
    heroshadow: "gold",
  },
  {
    name: "Miramichi Grey", 
    primary: "var(--main-gray)",
    secondary: "var(--main-black)",
    tertiary: "var(--main-gray)",
    heroshadow: "gold",
  }
];

const ThemeStation = () => {
  const [activeTheme, setActiveTheme] = useState(themes[0]); 
  const audioRef = useRef(new Audio(bassDrop));

  const handleThemeChange = () => {
    const nextTheme = activeTheme.name === "Pretty Nice Day" ? themes[1] : themes[0];

    document.documentElement.style.setProperty("--primary-color", nextTheme.primary);
    document.documentElement.style.setProperty("--secondary-color", nextTheme.secondary);
    document.documentElement.style.setProperty("--tertiary-color", nextTheme.tertiary);
    document.documentElement.style.setProperty("--hero-shadow", nextTheme.heroshadow);

    const event = new CustomEvent("themeChange", { detail: nextTheme });
    window.dispatchEvent(event);
    setActiveTheme(nextTheme);
    
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <button className="ThemeStation" onClick={handleThemeChange}>
      {activeTheme.name === "Pretty Nice Day" ? 1 : 8}
    </button>
  );
};

export default ThemeStation;
