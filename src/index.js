import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Membership from "./pages/Membership";
import Payment from "./pages/Payment";
import Blog from "./pages/BlogHome";
import Signup from "./pages/Signup";

export default function App() {   
    return(
            <Router>
              <div>        
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/membership" element={<Membership/>} />
                  <Route path="/payment" element={<Payment/>} />
                  <Route path="/]blog" element={<Blog/>} />
                  <Route path="/signup" element={<Signup/>} />


                </Routes>
              </div>
            </Router>
    );
}  


render(<App />,document.getElementById("root"));