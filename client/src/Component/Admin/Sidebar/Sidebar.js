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
            <h1>AdminPanel</h1>
            <p><Link to="/admin/dashbord">Dashbord</Link></p>
            <p><Link to="/admin/add">Add Product</Link></p>
            <button onClick={handleClick}>LogOut</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        type : (type) => {dispatch({type : "LOGIN" , userType : type})}
    }
}

export default connect(null ,mapDispatchToProps)(Sidebar)