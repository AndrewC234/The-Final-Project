import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./styles.css";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";

import Membership from "./pages/Membership";
import Payment from "./pages/Payment";
import Blog from "./pages/BlogHome";
import Signup from "./pages/Signup";

export default function App() {   
    return(
            <Router>
              <div>        
                <Routes>
                  <Route path="/exercise" element={<Exercise />} />
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