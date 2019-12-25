import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 offset-1">
              <div className="row">
            <span>Radhika</span>
            </div>
            <div classNames="row">
                <span>Kartik</span>
            </div>
          </div>
          <div className="col-md-3 offset-1 border">
            <span>Shivam</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
