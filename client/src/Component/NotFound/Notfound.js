import "./Notfound.css"
import React from "react"
import NF from "../../Image/source.gif"
import { Link } from "react-router-dom"

const Notfound = () => {
    return(
        <div>
            <img src={NF} alt="Not Found" />
            <div className="notf">
                <h1>404</h1>
            </div>
            <div className="bF">
                <h2>Looks Like You Are Lost</h2>
                <p>The page you are looking for don't exist</p>
                <button><Link to="/">Go Home</Link></button>
            </div>
        </div>
    )
}

export default Notfound