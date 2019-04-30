// Imports
import React , {useState} from "react"
import { Link } from "react-router-dom"

const Register = () => {
        const [state, setState] = useState( {
            name : "",
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

        console.log({state})
        return(
            <div className="login">
            <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name = "name"
                        type = "text"
                        value = {state.name}
                        onChange = {handleChange}
                        placeholder = "Please insert your name"
                    />
                    <br />
                    <input 
                        name = "email"
                        type = "text"
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
                    <button>Register</button>
                </form>
                <p>Already Registered ? <Link to="/login"> Login</Link> </p>
            </div>
        )
    }

export default Register