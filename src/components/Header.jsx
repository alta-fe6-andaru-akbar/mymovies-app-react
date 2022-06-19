import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const CustomHeader = (props) => {
  const { handleDarkToggle } = useContext(ThemeContext);
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
      <button onClick={() => handleDarkToggle()}>Theme</button>
    </nav>
  );
};

export default CustomHeader;
