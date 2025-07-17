import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "../components/about";
import Project from "../components/project";
import Navbar from "../components/navbar";
import Home from "../components/home";
import Footer from "../components/footer";
import "../App.css";

function AppRouter() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default AppRouter;
