import React, { Component} from 'react';
import Chat from './Chat/Chat';
import Join from './Join/Join';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar1 from './navbar1';

class Message extends Component{
      render(){
        return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
                <Navbar1/>
                <Router>
                <Route path="/message" exact component={Join}/>
                <Route path="/chat" component={Chat}/>
                </Router>
            </div>
          </div>
        </div>
        )
      }
}
export default Message;