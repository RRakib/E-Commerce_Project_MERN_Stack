// Imports
import React from "react"
import {Route , Redirect} from "react-router-dom"

// Functional Component
const PrivateRoute = ({component : Component ,type, ...rest}) => {
    return(
        <React.Fragment>
            <Route {...rest} render={props => (
                type === "Admin"? 
                    <Component {...props}/> : 
                    <Redirect to="/login" />
            )} />
        </React.Fragment>
    )
}

// Exports
export default PrivateRoute;