import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="pages/Home.js">
          Fortune Fitness
        </a>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exercise">
                Exercise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/membership">
                Membership
              </Link>

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
