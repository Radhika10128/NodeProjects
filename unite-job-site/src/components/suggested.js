import React,{Component} from 'react';
import Navbar1 from './navbar1';
import './hello.css';

class Suggested extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.componentName = "Suggested"
    }

    componentDidMount() {
        this.props.fetchpostsaddList();
    }
   render(){
       return(
           <div>
               <Navbar1/><br/><br/><br/>
               <div class="suggested" style={{height: 350, border: "5px solid black"}}>
                   <center>
                   <h1 style={{fontSize: 70, color: "Black"}}><b>HOT JOBS</b></h1>
                   </center>
                   <br/><br/>
               </div>
               <br/><br/>
                {
                    this.props.postsadd ? this.props.postsadd.map(posts => 
                            <center>
                        <div style={{border:"3px solid black", background: "#E8E8E8", width:740}}>
                            <center>
                             <left> <img src="https://png.pngtree.com/template/20190611/ourlarge/pngtree-company-name-logo-design-for-recruitmentsearchfindhuman-re-image_211024.jpg" width="300" height="180"/></left> 
                            <h4 style={{color: "black"}}><b>Company Name:</b> {posts.name}</h4>
                            <h4 style={{color: "black"}}><b>Location:</b> {posts.location}</h4>
                            <h4 style={{color: "black"}}><b>Title:</b> {posts.title}</h4>
                            <h4 style={{color: "black"}}><b>Type:</b> {posts.type}</h4>
                            <h4 style={{color: "black"}}><b>Skills Required:</b> {posts.skills}</h4>
                            </center>
                            <br/>
                        </div>
                        <br/>
                        </center>
                    ) : ''
                }
            </div>
       )
   }

}
export default Suggested;