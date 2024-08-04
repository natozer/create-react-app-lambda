import React, { useState } from "react";
import "../component_styles/ThemeStation.css";
import bassDrop from "../assets/bass_drop.mp3"; 

const themes = [
  {
    name: "default",
    primary: "var(--icey-blue)",
    secondary: "var(--burgundy)",
    tertiary: "var(--aqua)",
  },
  {
    name: "Miramichi",
    primary: "var(--main-black)",
    secondary: "var(--main-gray)",
    tertiary: "var(--main-gray)",
  },
  {
    name: "Cyberpunk",
    primary: "var(--another-blue)",
    secondary: "var(--purpleish-black)",
    tertiary: "var(--main-black)",
  },
];

const ThemeStation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0].name);

  const handleThemeChange = (theme) => {

    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    document.documentElement.style.setProperty("--tertiary-color", theme.tertiary);

    const event = new CustomEvent("themeChange", { detail: theme });
    window.dispatchEvent(event);
    setActiveTheme(theme.name);

    const audio = new Audio(bassDrop);
    audio.play();
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
