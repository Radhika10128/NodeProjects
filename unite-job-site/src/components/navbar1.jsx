import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from ".././logo1.png";
import { Link } from "react-router-dom";

class Navbar1 extends Component {
  render() {
    return (
      <React.Fragment>
       <div className="row">
              <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                  <div className="navbar-brand ml-12 pl-14">
                  <img src={logo1} alt="pic" width="80px" height="40px"></img>
                      </div>
                      <div className="navbar-nav">
                      <a><Link to='search'>Home</Link></a>
                      </div>
                      <div className="navbar-nav">
                      <a><Link to='postjob'>Post Job</Link></a>
                      </div>
                      <div className="navbar-nav">
                      <a>Profile</a>
                      </div>
                      <div className="navbar-nav">
                      <a><Link to='message'>Message</Link></a>
                      </div>
                      <div className="navbar-nav">
                      <a><Link to='jobs'>Jobs</Link></a>
                      </div>
                  </nav>
              </div>
          </div >
      </React.Fragment>
    );
  }
}
export default Navbar1;
