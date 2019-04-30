// Imports
import "./Login.css"
import React , {Component} from "react"
import { Link } from "react-router-dom"

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }
    render(){
        return(
            <div className="login">
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name = "email"
                        type = "text"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        placeholder = "Please insert an email"
                    />
                    <br />
                    <input 
                        name = "password"
                        type = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                        placeholder = "Please insert password"
                    />
                    <br />
                    <button>Login</button>
                </form>
                <p>Don't Have An Account? <Link to="/register">Register</Link> </p>
            </div>
        )
    }
}

export default Login