// Imports
import React , {Component} from "react"
import { Link } from "react-router-dom"

class Register extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            email : "",
            password : ""
        }
    }
    render(){
        return(
            <div className="login">
            <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name = "name"
                        type = "text"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        placeholder = "Please insert your name"
                    />
                    <br />
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
                    <button>Register</button>
                </form>
                <p>Already Registered?<Link to="/login">Login</Link> </p>
            </div>
        )
    }
}

export default Register