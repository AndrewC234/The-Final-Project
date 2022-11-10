import React from "react"; 
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home.js";
import Exercise from "./pages/Exercise.js";
import Membership from "./pages/Membership.js";
import Signup from "./pages/Signup.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/membership" component={Membership} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
