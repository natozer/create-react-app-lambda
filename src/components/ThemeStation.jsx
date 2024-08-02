import React, { useState } from "react";
import "../component_styles/ThemeStation.css";

const themes = [
  {
    name: "Cyberpunk",
    primary: "var(--icey-blue)",
    secondary: "var(--burgundy)",
    tertiary: "var(--aqua)",
  },
  {
    name: "Miramichi Gothic",
    primary: "var(--white)",
    secondary: "var(--main-black)",
    tertiary: "var(--white)", 
  },
  {
    name: "Purple Haze",
    primary: "#a0d2eb",
    secondary: "var(--purpleish-black)",
    tertiary: "#f8e58c",
  },
];

const ThemeStation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    document.documentElement.style.setProperty("--tertiary-color", theme.tertiary);

    const event = new CustomEvent("themeChange");
    window.dispatchEvent(event);
  };

  return (
    <div
      className={`ThemeStation ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <ul>
          {themes.map((theme, index) => (
            <li key={index} onClick={() => handleThemeChange(theme)}>
              {theme.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="ThemeStationIcon">Theme Theatre ☰</div>
      )}
    </div>
  );
};

export default ThemeStation;
