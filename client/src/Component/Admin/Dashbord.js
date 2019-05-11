import "./Dashbord.css"
import React from "react"
import Home from "./Home/Home"
import Admin from "./Admin/Admin"
import Sidebar from "./Sidebar/Sidebar"
import { BrowserRouter , Switch , Route} from "react-router-dom"


const Dashbord = (props) => {
    return(
        <BrowserRouter>
            <div className="dashbord">
                <div>
                    <Sidebar history={props.history}/>
                </div>
                    <Switch>
                        <Route path="/admin" exact component={Home} />
                        <Route path="/admin/add" component={Admin} />
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default Dashbord;