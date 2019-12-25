import React from "react";
import './jobs.css';
import {Link} from 'react-router-dom';
const Jobs = () => (
  <>
     <div className="d-flex flex-column">
     <div className="d-flex flex1">
     <Link to = "signup" className= "mr-auto f1">Track My Jobs</Link>
     <Link to = "signup" className= "f2">Career Interests</Link>
     <Link to = "signup" className= "f3">Post a Job</Link>
    </div><br/>
      <div className="d-flex flex2">
      <div className="d-flex flex-column">
          <h2>Search Your Dream Job</h2>
          <input type="text" className="form-control" id="search" placeholder="Search Jobs" required/><br/>
          <input type="text" className="form-control" id="location" placeholder="Enter Location" required/><br/>
     </div>
    </div><br/>
      <div className="d-flex flex3">
      <div class="container-fluid">
     <div class="row">
      <div class="col-md ">1 of 4</div>
      <div class="col-md ">2 of 4</div>
      <div class="col-md ">3 of 4</div>
      <div class="col-md ">4 of 4</div>
    </div>  
  </div>
      
      </div><br/>
    </div>
  </>
);

export default Jobs;