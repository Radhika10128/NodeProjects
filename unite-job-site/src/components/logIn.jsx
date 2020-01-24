import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './login.css';
import { Redirect } from 'react-router-dom'
class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToSearch: false
        }
    }
    render() {
        if (this.state.redirectToSearch) {
            return <Redirect to='search' />
        }
        return (
            <React.Fragment>
                <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w780">
                        <div class="card card-3">
                            <div class="card-heading"></div>
                            <div class="card-body">
                                <center>
                                    <h2 class="title">Login</h2>
                                    <form onSubmit={this.auth}>

                                        <div class="input-group">
                                            <input type="text" ref="userName" class="input--style-3" placeholder="User Name" required />
                                        </div>
                                        <div class="input-group">
                                            <input type="password" ref="password" class="input--style-3" placeholder="Password" required />
                                        </div>
                                        <div class="p-t-10">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form><br /><br />
                                    <p>Not Registered? <Link to='signup' style={{ color: 'blue' }}>Signup</Link></p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
    auth = (event) => {
        event.preventDefault();
        let user = {
            name: this.refs.userName.value,
            password: this.refs.password.value
        }
        console.log(JSON.stringify(user));

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
                this.setState({ redirectToSearch: true });
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export default LogIn;


