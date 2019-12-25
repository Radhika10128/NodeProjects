import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <table className="table footer">
        <tr>
          <td>
            <h1>Unite</h1>
            Professional Website
            <br />
            <h4>Chitkara University,Punjab Campus</h4>
            <h4>Chandigarh-Rajpura Highway</h4>
          </td>
          <td>
            <h3>COMPANY</h3>
            <h4>About us</h4>
            <h4>Carrers</h4>
            <h4>Privacy Policy</h4>
            <h4>Contact Us</h4>
          </td>
          <td>
            <h3>TASKS</h3>
            <h4>Upload Resume</h4>
            <h4>Find Jobs</h4>
            <h4>Find Employees</h4>
          </td>
        </tr>
      </table>
    );
  }
}
export default Footer;
