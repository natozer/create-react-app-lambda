import React, { useState, useRef } from "react";
import "../component_styles/ThemeStation.css";
import bassDrop from "../assets/bass_drop.mp3";

const themes = [
  {
    name: "Miramichi Grey",
    primary: "var(--main-black)",
    secondary: "var(--main-gray)",
    tertiary: "var(--main-gray)",
    heroshadow: "blue"
  },
  {
    name: "Pretty Nice Day",
    primary: "#ffcc00",
    secondary: "#265b93",
    tertiary: "var(--another-blue)",
    heroshadow: "#ffcc00",
  },
  
];

const ThemeStation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[1].name);
  const audioRef = useRef(new Audio(bassDrop));

  const handleThemeChange = (theme) => {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    document.documentElement.style.setProperty("--tertiary-color", theme.tertiary);
    document.documentElement.style.setProperty("--hero-shadow", theme.heroshadow);


    const event = new CustomEvent("themeChange", { detail: theme });
    window.dispatchEvent(event);
    setActiveTheme(theme.name);
    audioRef.current.currentTime = 0;

    audioRef.current.play();
  };

  return (
    <div
      className={`ThemeStation ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <ul>
          {themes.map((theme, index) => (
            <li
              key={index}
              onClick={() => handleThemeChange(theme)}
              className={theme.name === activeTheme ? "active" : ""}
            >
              {theme.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="ThemeStationIcon">Theme Playground ☰</div>
      )}
    </div>
  );
};

export default ThemeStation;
