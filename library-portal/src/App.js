import React, { Component} from 'react';
import Navbar from './components/navbar';
import MainPage from './components/mainPage'
import AddBook from './components/addBook';
import Profile from './components/profile'

class App extends Component{
      render(){
        return (
        <div className="container">
          <div className="row">
            <div className="col">
               {/* <Navbar/> */}
            </div>
          </div>
          <div className="row">
            <div className="col">
               <MainPage/>
            </div>
          </div>
        </div>
        )
      }
}
export default App;