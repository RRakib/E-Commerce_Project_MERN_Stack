// Imports
import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <React.Fragment>
            <p> <Link to="/">Home</Link> </p>
            <br />
            <p> <Link to="/login">Login</Link> </p>
            <br />
            <br />
            <p> <Link to="/register">Register</Link> </p>
        </React.Fragment>
    )
}

export default Nav;