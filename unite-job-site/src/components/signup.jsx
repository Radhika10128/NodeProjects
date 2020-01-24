import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import "./login.css";
import {Link} from 'react-router-dom';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.gender = "";
    this.email = "";
    this.password = "";
    this.state = {
        usersadd: {
            name: '',
            gender: '',
            email: '',
            password: ''
        },
        redirectToResume: false
       
    }
    console.log("Component: Add book component ", "Method: constructor ", `props: ${JSON.stringify(this.props)}`);
  }
    
  handleGenderChange = event => {
    this.setState({usersadd: { ...this.state.usersadd, gender: event.target.value }});
  };

  handleEmailChange = event => {
    this.setState({usersadd: { ...this.state.usersadd, email: event.target.value }});
  };

  handlePasswordChange = event => {
    this.setState({usersadd: { ...this.state.usersadd, password: event.target.value }});
  };
  render() {
    if(this.state.redirectToResume) {
      return <Redirect to="resume"/>
    }
    return (
      <React.Fragment>
        <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
          <div class="wrapper wrapper--w780">
            <div class="card card-3">
              <div class="card-heading"></div>
              <div class="card-body">
                <center>
                <h2 class="title">Sign Up</h2>
                <form onSubmit={this.signup} >
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
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                        <option disabled="disabled" selected="selected">
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
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handlePasswordChange}
                      required
                    />
                  </div>
                  <div class="p-t-10">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
                <br /><br />
                                    <p>Already Registered? <Link to='login' style={{ color: 'blue' }}>Login</Link></p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  signup = (event) => {
    event.preventDefault();
    this.name = this.refs.name.value;
    /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
    so the setState is Asynchronous */
    this.setState({ usersadd: { ...this.state.usersadd, name: this.name } })
    setTimeout(() => {
        fetch('http://localhost:7000/users/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.usersadd)
        })
            .then(res => {
                if (res.ok) {
                  console.log("i am inside res.ok")
                  // console.log(res.json());
                    return res.json();
                }
            })
            .then(res => {
              console.log(res);
                // alert(`New User: ${JSON.stringify(res)} added successfully`);

                //kindly check if msg is user already exist
                if(res.msg == "User added successfully")
                this.setState({redirectToResume: true})
               else
                alert("User name already exists!!!");
                // this.props.history.push("/home");
            })
    })
}
}

export default SignUp;