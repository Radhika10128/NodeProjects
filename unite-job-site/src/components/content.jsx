import React, { Component } from "react";
import "./content.css";
import LogIn from "./logIn";
import { Route } from "react-router-dom";
import Footer from "./footer";
import SignUp from "./signup";
import Resume from "./resume";
import Navbar from "./navbar";
import Search from "./search";
import Postjob from "./postjob";
import { Link } from "react-router-dom";
import FindPeople from "./findPeople";
import Suggested from "./suggested";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  state = {
    usersadd: [],
    postsadd: [],
    resumeadd: []
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navbar />
              {/*image with title*/}
              <div className="main">
              <div className="banner">
                <div class="banner-img">
                  <img src="https://i.pinimg.com/originals/58/dc/b7/58dcb754d5d18e65df19b6b37c99a431.jpg" />
                </div>
                <div class="banner-title">
                  <h3>FIND EXPERIENCED EMPLOYEES</h3>
                  <h3>FIND JOBS YOU LOVE</h3>
                </div>
              </div>

              {/*Find People*/}
              <div class="Find">
                <div class="container">
                  <div class="Find_People">
                    <div class="title-style text-center">
                      <h1>FIND PEOPLE</h1>
                    </div>
                    <h5>
                      Are you a recruiter or employer looking to hire employees?
                      Search for employees, resumes, and post jobs on one of the
                      top JOB recruiting sites today!
                    </h5>
                  </div>
                  <center>
                    <form class="Input">
                      <div class="col-xs-4">
                        <label for="ex3"></label>
                        <input
                          class="form-control"
                          placeholder="First Name"
                          id="ex3"
                          type="text"
                        />
                      </div>
                      <div class="col-xs-4">
                        <label for="ex3"></label>
                        <input
                          class="form-control"
                          placeholder="Last Name"
                          id="ex3"
                          type="text"
                        />
                      </div>
                      <br />
                      <Link to="findpeople" className="btn btn-primary">
                        Search People
                      </Link>
                    </form>
                  </center>
                </div>
              </div>

              {/*Resume And Jobs*/}
              <div>
                <div class="row field">
                  <div class="col-sm-6 demo6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <center>
                      <h2>Post your Resume</h2>
                      <br />
                      <button class="btn btn-lg resume">Add Resume</button>
                    </center>
                    <br />
                    <br />
                    <br />
                  </div>
                  <div class="col-sm-6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Find Jobs According</h2>
                    <h2>to your field</h2>
                    <br />
                    <input type="text" placeholder="Enter your field" />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <br />

              {/*Specifications*/}
              <div class="Find">
                <div class="container">
                  <div class="Find_People">
                    <div class="title-style text-center">
                      <h1>Specifications</h1>
                    </div>
                  </div>
                  <center>
                    <button class="button demo5">Sales</button>
                    <button class="button demo5">Java</button>
                    <button class="button demo5">C++</button>
                    <button class="button demo5">C</button>
                    <button class="button demo5">Computer Networking</button>
                    <button class="button demo5">Database Management</button>
                    <button class="button demo5">Operating System</button>
                    <button class="button demo5">Data Structures</button>
                    <button class="button demo5">
                      Artificial Intelligence
                    </button>
                    <button class="button demo5">Machine Learning</button>
                    <br />
                    <br />
                    <button class="button demo5">Data Science</button>
                    <button class="button demo5">Python</button>
                    <button class="button demo5">Game Designing</button>
                    <button class="button demo5">Cyber Security</button>
                    <button class="button demo5">Web Development</button>
                    <br />
                    <br />
                    <br />

                    <input type="text" placeholder="Enter Specifications" /><Link to="homepage">Link</Link>
                  </center>
                </div>
              </div>
              <Footer />
            </div>
            </div>
          )}
        />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/resume" render={() => <Resume />} />
        <Route exact path="/search" render={() => <Search />} />
        <Route exact path="/postjob" render={() => <Postjob />} />
        <Route exact path="/findpeople" render={() => <FindPeople />} />
        <Route exact path="/homepage" render={(props) => <Suggested postsadd={this.state.postsadd} fetchpostsaddList={this.fetchpostsaddList} />} />
      </div>
    );
  }
  fetchpostsaddList = () => {
    fetch("http://localhost:7000/postjob")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ postsadd: res });
        console.log(this.state.postsadd);
      })
      .catch(res => {
        console.log(`The error is : ${JSON.stringify(res)}`)
      })
  }
}
export default Content;
