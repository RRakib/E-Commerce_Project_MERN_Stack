// Imports
import "./Login.css"
import React , {useState} from "react"
import { Link } from "react-router-dom"

const Login = () => {
        const [state , setState] = useState({
            email : "",
            password : ""
        })

        const handleChange = e => {
            const {name , value} = e.target
            setState((prevState) => ({
                ...prevState,
                [name] : value
            }))
        }
        const handleSubmit = e => {
            e.preventDefault();
        }
        console.log(state)  
        return(
            <div className="login">
            <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name = "email"
                        type = "email"
                        value = {state.email}
                        onChange = {handleChange}
                        placeholder = "Please insert an email"
                    />
                    <br />
                    <input 
                        name = "password"
                        type = "password"
                        value = {state.password}
                        onChange = {handleChange}
                        placeholder = "Please insert password"
                    />
                    <br />
                    <button>Login</button>
                </form>
                <p>Don't Have An Account? <Link to="/register"> Register</Link> </p>
            </div>
        )
}

export default Login