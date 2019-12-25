import React, {Component} from 'react';
import './title.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

class Title extends Component{
    render() {
        return(
          <div>
            <center>
            <h1>Welcome To Library Portal, Chitkara University</h1>
            <Link to='homepage' class="btn btn-primary stretched-link">Homepage</Link>
            </center>
          </div>
        );
    }
}
export default Title;