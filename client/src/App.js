// Imports
import './App.css';
import React from 'react';
import Nav from "./Component/Nav/Nav"
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"
import Admin from "./Component/Admin/Admin"
import Register from "./Component/Register/Register"
import {BrowserRouter , Route , Switch} from "react-router-dom"
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navBar">
          <Nav />
        </div>
        <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/admin" component={Admin} type="User"/>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
