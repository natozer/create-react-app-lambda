import React, { useState } from "react";
import "../component_styles/ThemeStation.css";

const themes = [
  {
    name: "Millenial Gray",
    primary: "var(--millenial-gray)",
    secondary: "var(--pure-black)",
  },
  {
    name: "Cyberpunk",
    primary: "var(--icey-blue)",
    secondary: "var(--burgundy)",
  },
  { name: "Flamingo", primary: "var(--pink)", secondary: "var(--teal)" },
  {
    name: "Miramichi Gothic",
    primary: "var(--white)",
    secondary: "var(--main-black)",
  },
];

const ThemeStation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.secondary
    );

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
