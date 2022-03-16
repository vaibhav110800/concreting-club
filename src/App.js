import "./App.css";
import "./App2.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Work from "./work";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/Services"} element={<Services />} />
      <Route path={"/our-work"} element={<Work />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  );
};

export default App;
