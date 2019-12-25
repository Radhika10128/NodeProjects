import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from ".././logo1.png";
import { Link } from "react-router-dom";

class Navbar1 extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
          <a class="navbar-brand" href="#">
            <img src={logo1} alt="pic" width="120px" height="50px"></img>
          </a>

          <form class="form-inline" action="/action_page.php">
            <div id="SearchBar">
              {" "}
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                width="200px"
              />
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  {" "}
                  <span class="glyphicon glyphicon-home">Home</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  {" "}
                  <span class="glyphicon glyphicon-user">Network</span>
                </span>
              </a>
            </li>

            <li class="nav-item">
              <a>
                <Link to="SearchJobs">
                  <span>
                    {" "}
                    <span class="glyphicon glyphicon-briefcase">Find Jobs</span>
                  </span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  {" "}
                  <span class="glyphicon glyphicon-comment">Messages</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span> | </span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  {" "}
                  <span class="glyphicon glyphicon-bookmark">BookMarks</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  {" "}
                  <span class="glyphicon glyphicon-question-sign">
                    NOtification
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar1;
