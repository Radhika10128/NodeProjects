import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './postjob.css';
import Navbar1 from './navbar1';

class Postjob extends Component{

  constructor(props) {
    super(props);
    this.name = "";
    this.title = "";
    this.type = "";
    this.location = "";
    this.description = "";
    this.state = {
        usersadd: {
            name: '',
            title: '',
            type: '',
            location: '',
            description: ''
        }
    }
    console.log("Component: Add book component ", "Method: constructor ", `props: ${JSON.stringify(this.props)}`);
  }
    
  handletitleChange = event => {
    this.setState({postsadd: { ...this.state.postsadd,title : event.target.value }});
  };

  handletypeChange = event => {
    this.setState({postsadd: { ...this.state.postsadd, type: event.target.value }});
  };

  handlelocationChange = event => {
    this.setState({postsadd: { ...this.state.postsadd, location: event.target.value }});
  };

  handledescriptionChange = event => {
    this.setState({postsadd: { ...this.state.postsadd, description: event.target.value }});
  };

 render(){
     return (
       <div>
      <Navbar1/>

<hr/>

<div className="main">
    <center>
    <div class="background">
  <div class="transbox">
    <p>Post a Job</p>
  </div>
</div>
<br/><br/>
<br/>
    </center>

    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6 d1">
    <center>
        <p>UNITE JOBS</p>
        <br/><br/>
        
    <form onSubmit={this.postjob}>
        <input type="text" class="form-control" id="inputEmail" placeholder="Company-Name" ref="name" required/><br/><br/>
        <input type="text" class="form-control" id="inputPassword" name="title" placeholder="Job Title" value={this.state.title} onChange={this.handletitleChange}/><br/><br/>
        <h4>Job Type</h4>
        <select name="type" value={this.state.type} onChange={this.handletypeChange}>
                        <option disabled="disabled" selected="selected">
                          Job Type
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                      </select><br/><br/>
        <input type="text" class="form-control" id="inputPassword" placeholder="Location" value={this.state.location} onChange={this.handlelocationChange}/><br/><br/>
        <textarea cols="30" rows="8" placeholder="Description" value={this.state.description} onChange={this.handledescriptionChange}></textarea><br/><br/>
    <button type="submit" class="btn btn-primary">Post</button>
    </form>
</center>
    </div>
    <div class="col-sm-3"></div>
  </div>

</div>
<br/><br/>
</div>
     )
 }
 postjob = (event) => {
  event.preventDefault();
  this.name = this.refs.name.value;
  /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
  so the setState is Asynchronous */
  this.setState({ postsadd: { ...this.state.postsadd, name: this.name } })
  setTimeout(() => {
      fetch('http://localhost:7000/postjob/addJob', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.postsadd)
      })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
          })
          .then(res => {
              alert(`New User: ${JSON.stringify(res)} added successfully`);
             
             
              // this.props.history.push("/home");
          })
  })
}
}
export default Postjob;