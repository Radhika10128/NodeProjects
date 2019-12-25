import React, { Component} from 'react';
import MainPage from './components/mainPage';
import Hello from './components/hello';

class App extends Component{
      render(){
        return (
        <div className="container-fluid">
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