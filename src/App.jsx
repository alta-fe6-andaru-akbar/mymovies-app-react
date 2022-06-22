import React, { useState, useMemo, useEffect } from "react";
import "./styles/App.css";
import Homepage from "./pages/Homepage2";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favourite";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeContext } from "./context/MoviesContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={background}>
      <Layout title="WELCOME">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favourite" element={<Favorite />} />
        </Routes>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
