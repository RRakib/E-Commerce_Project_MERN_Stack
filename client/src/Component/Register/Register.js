// Imports
import axios from "axios"
import React , {useState} from "react"
import { Link } from "react-router-dom"

const Register = () => {
        const [state, setState] = useState({
            name : "",
            email : "",
            password : ""
        })
        const [serverRes , setServerRes] = useState({
            error : "",
            success : ""
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
            const regData = {
                "name" : state.name,
                "email" : state.email,
                "password" : state.password
            }
            axios.post("/user/register" , regData)
                 .then(resData => setServerRes(resData.data))
                 .catch(err => console.log("Error! " + err))
            
            setServerRes({
                name : "",
                email : "",
                password : ""
            })
        }

        console.log({state})
        return(
            <div className="login">
            <h1>Register</h1>
            <p className="error" style={{display : serverRes.error? "block" : "none"}}>{serverRes.error? serverRes.error : null}</p>
            <p className="success" style={{display : serverRes.success? "block" : "none"}}>{serverRes.success? serverRes.success : null}</p>
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
                <br />
                <p>Already Registered ? <Link to="/login"> Login</Link> </p>
            </div>
        )
    }

export default Register