import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./styles.css";
import Home from "./pages/Home.js";
import Exercise from "./pages/Exercise";
import Membership from "./pages/Membership.js";
import Signup from "./pages/Signup.js";

export default function App() {   
    return(
            <Router>
              <div>      
                <Routes>
                  <Route path="/exercise" element={<Exercise />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </div>
            </Router>
          );
        }
        
        
render(<App />,document.getElementById("root"));