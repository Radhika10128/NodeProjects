import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './login.css';
import { Redirect } from 'react-router-dom'
class LogIn extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }
    }
    render()
    {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />
        }
        return(    
            <React.Fragment>
           <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <center>
                    <h2 class="title">Login</h2>
                    <form method="POST">
                        
                        <div class="input-group">
                            <input class="input--style-3" ref="name" type="name" placeholder="Name" name="name" required/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="password" placeholder="Password" name="password" required/>
                        </div>
                        <div class="p-t-10">
                        <Link to="search" ref="password" className= "btn btn-primary">Submit</Link>
                        </div>
                    </form><br/><br/>
                    <p>Not Registered?<a>  Signup</a></p>
                    </center>
                </div>
            </div>
        </div>
    </div>

    
     </React.Fragment>
        )
    }
    _addUser = (event) => {
        event.preventDefault();
        let user = {
            name: this.refs.name.value,
            password: this.refs.password.value
        }

        fetch('http://localhost:7000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) return res.json()

            })
            .then(res => {
                console.log(`User added successfully: ${res}`)
                this.setState({ redirectToHome: true });
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export default LogIn;


