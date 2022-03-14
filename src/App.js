import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Team from "./team";
import Contact from "./contact";
import About from "./about";
const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/team"} element={<Team />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/about"} element={<About />} />
    </Routes>
  );
};

export default App;
