import React from 'react';
//import './search.css';
const Detail = ({Company,Location, title, type,how}) => {
    return (
        <center>
        <div className="Main"> 
<div className="card text-center " style={{height:380}}>
  <div className="card-header">
   <b>Company Name: </b> <h2>{Company}</h2>
  </div>
  <div className="card-body card-height">
    <h4 className="location"><b>Location:</b> {Location} </h4> 
    <h4 className="job-title"><b>Job Title: </b>{title}</h4>
    <h4 className="job-type"><b>Job Type: </b> {type} </h4>
  </div>
  <div className="card-footer text-muted">
   <a><div dangerouslySetInnerHTML={{__html: how}} /></a>
  </div>
  </div><br/><br/>
  </div>
  </center>
  );
}
export default Detail;