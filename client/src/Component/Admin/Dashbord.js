import "./Dashbord.css"
import React from "react"
import Home from "./Home/Home"
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
                        <Route path="/dashbordHome" exact component={Home} />
                        <Route path="/add" component={Admin} />
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default Dashbord;