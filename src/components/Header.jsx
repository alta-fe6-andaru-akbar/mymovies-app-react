import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/MoviesContext";
import { FaSun, FaMoon } from "react-icons/fa";

const CustomHeader = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };
  // const CustomHeader = (props) => {
  //   const { handleDarkToggle } = useContext(ThemeContext);
  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-zinc-800 flex justify-between items-center">
      <div className="flex gap-4">
        <p className="text-white">ANMOVIE</p>
        <Link to="/">
          <button className="text-white">Home</button>
        </Link>
        <Link to="/favourite">
          <button className="text-white">Favourite</button>
        </Link>
      </div>
      {theme === "dark" ? (
        <FaSun
          className="w-8 h-8 text-white"
          onClick={() => handleThemeChange("light")}
        />
      ) : (
        <FaMoon
          className="w-8 h-8 text-white"
          onClick={() => handleThemeChange("dark")}
        />
      )}
    </nav>
  );
};

export default CustomHeader;
