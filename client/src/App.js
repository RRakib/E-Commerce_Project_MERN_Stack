// Imports
import './App.css';
import React from 'react';
import { connect } from "react-redux"
import Nav from "./Component/Nav/Nav"
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"
import Dashbord from "./Component/Admin/Dashbord"
import Contact from "./Component/Contact/Contact"
import Register from "./Component/Register/Register"
import {BrowserRouter , Route , Switch} from "react-router-dom"
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute"

function App(props) {
  return (
    <BrowserRouter>
      <div className="App" style={{display : props.userReducer.userType === "Admin"? "block" : "grid"}}>
        <div className="navBar" style={{display : props.userReducer.userType === "Admin"? "none" : "block"}}>
          <Nav />
        </div>
        <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/admin" component={Dashbord} type={props.userReducer.userType}/>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Map State To Props
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
