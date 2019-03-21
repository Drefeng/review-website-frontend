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
import TopRestaurants from "./components/Restaurant/TopRestaurants";
import RecentReviews from "./components/RecentReviews/RecentReviews";
require('./styles.css');

class App extends Component{
   render(){
      return (
          <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Login/Register</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/userdash">User Dashboard</NavLink></li>
              <li><NavLink to="/top">Top Restaurants</NavLink></li>
              <li><NavLink to="/recent">Recent Reviews</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/userdash" component={Userdash}/>
              <Route path="/top" component={TopRestaurants}/>
              <Route path="/recent" component={RecentReviews}/>
            </div>
          </div>
          </HashRouter>
      );
   }
}

export default App;