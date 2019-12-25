import React,{Component} from 'react';
import Content from './content.jsx';
import Navbar from './navbar.jsx';

class MainPage extends Component{
    render(){
        return (
        <React.Fragment className="row">
            <Content/>
        </React.Fragment>
        );
    }
}
export default MainPage;