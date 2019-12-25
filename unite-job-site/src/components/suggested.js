import React,{Component} from 'react';
import Detail from './detail.js';

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
                {
                    this.props.postsadd ? this.props.postsadd.map(posts => 
                       <Detail
                        Company={posts.name}
                        Location={posts.location}
                        title={posts.title}
                        type={posts.type}
                        how={posts.skills}
                       />
                    ) : ''
                }
            </div>
       )
   }

}
export default Suggested;