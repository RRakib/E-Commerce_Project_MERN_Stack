import "./Dashbord.css"
import React from "react"
import Admin from "./Admin/Admin"
import Sidebar from "./Sidebar/Sidebar"
import { BrowserRouter , Switch , Route} from "react-router-dom"


const Dashbord = () => {
    return(
        <BrowserRouter>
            <div className="dashbord">
                <div>
                    <Sidebar />
                </div>
                    <Switch>
                        <Route path="/admin" exact component={Admin} />
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default Dashbord;