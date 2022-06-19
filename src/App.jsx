import React, { Component } from "react";
import "./styles/App.css";
import Homepage from "./pages/Homepage2";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favourite";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <Layout title="WELCOME">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favourite" element={<Favorite />} />
        </Routes>
      </Layout>
    );
  }
}
