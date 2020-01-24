import React, { Component } from "react";
import './profile.css';
class Profile extends Component {
  render() {
    return (
      <React.Fragment>

        <div class="card1">
          <img src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png" alt="John" height="10%" width="100%" />
          <h1>John Doe</h1>
          <p class="title1">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div >
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </div>
          <p><button class="button1">Contact</button></p>
        </div>
      </React.Fragment>
    )
  }
}
export default Profile;
