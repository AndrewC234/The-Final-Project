import React from "react"; 
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css"

// import "./App.css";
import Home from "../pages/Home.js";
import Membership from "../pages/Membership.js";
import About from "./pages/About.js";
import Payment from "./pages/Payment.js";
import Blog from "./pages/BlogHome.js";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/membership" component={Membership} />
          <Route path="/payment" component={Payment}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </Router>
    );
  }
}

export default App;
