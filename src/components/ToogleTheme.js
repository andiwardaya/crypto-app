import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ThemeContext } from "../context/ThemeContext";

const ToogleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme === "dark" ? (
        <div
          className="cursor-pointer flex items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="w-10 ">
            <SunIcon />
          </div>
          <p>Light Mode</p>
        </div>
      ) : (
        <div
          className="cursor-pointer flex items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="w-10">
            <MoonIcon />
          </div>
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
};

export default ToogleTheme;
