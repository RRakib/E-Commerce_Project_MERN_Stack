import "./Sidebar.css"
import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const Sidebar = (props) => {


    const handleClick = () => {
        props.type(null)
        props.history.push("/login")
        }
     
    return(
        <div className="sidebar">
            <h1>Dashbord</h1>
            <hr />
            <p><Link to="/admin"> <i className="fas fa-columns"></i> Dashbord</Link></p>
            <p><Link to="/admin/add"><i className="fas fa-plus-circle"></i> Add Product</Link></p>
            <button onClick={handleClick}> <i className="fas fa-sign-out-alt"></i> LogOut</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        type : (type) => {dispatch({type : "LOGIN" , userType : type})}
    }
}

export default connect(null ,mapDispatchToProps)(Sidebar)