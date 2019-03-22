import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} 
from "react-router-dom";
import Home from "./components/Home/Home";
import Stuff from "./components/LogReg/LogReg";
import Contact from "./components/Contact/Contact";
import "./index.css";
import Userdash from "./components/Userdash/Userdash";
import AllRestaurants from "./components/Restaurant/AllRestaurants";
import RecentReviews from "./components/RecentReviews/RecentReviews";
import Logout from "./components/Logout/Logout";
require('./styles.css');

class App extends Component{
  constructor(props){
    super(props);
    console.log()
  }

   render(){
      return (
          <HashRouter>
            <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/userdash">User Dashboard</NavLink></li>
              <li><NavLink to="/top">All Restaurants</NavLink></li>
              <li><NavLink to="/recent">Recent Reviews</NavLink></li>
              <li><NavLink className="navbar-right" to="/logout">Logout</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/userdash" component={Userdash}/>
              <Route path="/top" component={AllRestaurants}/>
              <Route path="/recent" component={RecentReviews}/>
              <Route path="/logout" component={Logout}/>
            </div>
          </div>
          </HashRouter>
      );
   }
}

export default App;