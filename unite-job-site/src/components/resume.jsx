import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


class Resume extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.age = "";
    this.gender = "";
    this.email = "";
    this.nationality = "";
    this.equalification = "";
    this.pqualification = "";
    this.experience = "";
    this.achievements = "";
    this.hobbies = "";
    this.state = {
      resumeadd: {
        name: '',
        age: '',
        gender: '',
        email: '',
        nationality: '',
        equalification: '',
        pqualification: '',
        experience: '',
        achievements: '',
        hobbies: ''
      },
      redirectToSearch: false

    }
    console.log("Component: Add book component ", "Method: constructor ", `props: ${JSON.stringify(this.props)}`);
  }
  handleAgeChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, age: event.target.value } });
  };

  handleGenderChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, gender: event.target.value } });
  };

  handleEmailChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, email: event.target.value } });
  };

  handleNationalityChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, nationality: event.target.value } });
  };

  handleEqualificationChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, equalification: event.target.value } });
  };

  handlePQualificationChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, pqualification: event.target.value } });
  };

  handleExperienceChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, experience: event.target.value } });
  };

  handleAchievementsChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, achievements: event.target.value } });
  };

  handleHobbiesChange = event => {
    this.setState({ resumeadd: { ...this.state.resumeadd, hobbies: event.target.value } });
  };

  render() {
    if (this.state.redirectToSearch) {
      return <Redirect to="Search" />
    }
    return (
      <React.Fragment>
        <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
          <div class="wrapper wrapper--w780">
            <div class="card card-3">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Enter Details</h2>
                <form onSubmit={this.resume}>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      ref="name"
                      placeholder="Name"
                      ref="name"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Age"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleAgeChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select name="gender" value={this.state.gender}
                        onChange={this.handleGenderChange}>
                        <option disabled="disabled" selected="selected" >
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleEmailChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Nationality"
                      value={this.state.nationality}
                      name="nationality"
                      onChange={this.handleNationalityChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Education Qualification"
                      value={this.state.equalification}
                      name="equalification"
                      onChange={this.handleEqualificationChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Professional Qualification"
                      value={this.state.pqualification}
                      name="pqualification"
                      onChange={this.handlePqualificationChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Working Experience"
                      value={this.state.experience}
                      name="experience"
                      onChange={this.handleExperienceChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Achievements"
                      value={this.state.achievements}
                      name="achievements"
                      onChange={this.handleAchievementsChange}
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      class="input--style-3"
                      type="text"
                      placeholder="Hobbies"
                      value={this.state.hobbies}
                      name="hobbies"
                      onChange={this.handleHobbiesChange}
                      required
                    />
                  </div>
                  <div class="p-t-10">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  resume = (event) => {
    event.preventDefault();
    this.name = this.refs.name.value;
    /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
    so the setState is Asynchronous */
    this.setState({ usersadd: { ...this.state.resumeadd, name: this.name } })
    setTimeout(() => {
      fetch('http://localhost:7000/resume/addResume', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.resumeadd)
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => {
          alert(`New User: ${JSON.stringify(res)} added successfully`);
          this.setState({ redirectToSearch: true })

          // this.props.history.push("/home");
        })
    })
  }
}
export default Resume;
