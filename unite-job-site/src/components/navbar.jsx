import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from ".././logo1.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <img src={logo1} alt="pic" width="120px" height="50px"></img>
            </div>
            <div className="nav navbar-right">
              <Link to="signup" className="btn btn-dark">
                SignUp
              </Link>
              <Link to="login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
