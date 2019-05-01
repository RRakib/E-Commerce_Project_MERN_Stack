// Imports
import "./Login.css"
import axios from "axios"
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import React , {useState , useEffect} from "react"

const Login = (props) => {
        const [state , setState] = useState({
            email : "",
            password : ""
        })
        const [serverRes , setServerRes] = useState({
            error : "",
            type : null
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
            const loginData = {
                "email" : state.email,
                "password" : state.password,
            }

            // Resetting The Errors
            setServerRes({error : ""})

            // Axios Call
            axios.post("/user/login" , loginData)
                 .then(resData => {
                    props.type(resData.data.type)
                    setServerRes(resData.data)  
                })
                 .catch(err => console.log(err))

            // Resetting The Fields
            setState({
                email : "",
                password : ""
            })
            
        }
        useEffect(()=>{
            return(
            serverRes.type === "Admin"? props.history.push('/admin') : undefined
            )
        })
        // Return
        return(
            <div className="login">
            <h1>Login</h1>
            <p className="error" style={{display : serverRes.error? "block" : "none"}}>{serverRes.error? serverRes.error : null}</p>

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

const mapStateToProps = (state) => {
    return state
  }
const mapDispatchToProps = (dispatch) => {
    return{
        type : (type) => {dispatch({type : "LOGIN" , userType : type})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)