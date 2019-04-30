// Imports
import React , {useState} from "react"

// Functional Component
const Admin = () => {
    return(
        <div>
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
        </div>
    )
}

// Exports
export default Admin