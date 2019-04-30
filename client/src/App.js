// Imports
import './App.css';
import React from 'react';
import Nav from "./Component/Nav/Nav"
import Home from "./Component/Home/Home"
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register"
import {BrowserRouter , Route , Switch} from "react-router-dom"

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
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
