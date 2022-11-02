import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {   
    return(
            <Router>
              <div>
                <Navbar />        
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </Router>
    );
}  


render(<App />,document.getElementById("root"));