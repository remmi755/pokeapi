import * as React from "react";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [lightMode, setLightMode] = useState<boolean>(true);

  useEffect(() => {
    const isLightMode = localStorage.getItem("lightMode") === "true";
    setLightMode(isLightMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
    if (lightMode) {
      localStorage.setItem("lightMode", "lightMode");
    }
  }, [lightMode]);

  const toggleDarkMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full ${
        lightMode ? "bg-gray-800" : "bg-yellow-400"
      } ${
        lightMode ? "text-white" : "text-gray-900"
      } transition-colors duration-200`}
    >
      {lightMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
