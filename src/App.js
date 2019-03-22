import React, { Component, Fragment } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import LogReg from "./components/LogReg/LogReg";
import "./index.css";
import Userdash from "./components/Userdash/Userdash";
import TopRestaurants from "./components/Restaurant/TopRestaurants";
import RecentReviews from "./components/RecentReviews/RecentReviews";
import RestaurantDash from "./components/RestaurantDash/RestaurantDash";
import Logout from "./components/Logout/Logout";
require("./styles.css");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '0',
      token: ''
    };
  }

  handleChanged = (role, token) => {
    this.setState(() => ({role, token}));
  }

  componentDidMount() {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    console.log(role);
    this.setState(() => ({role, token}));
  }

  render() {
    let nav = (
      <Fragment>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/stuff">Login/Register</NavLink>
        </li>
      </Fragment>
    );

    if (parseInt(this.state.role) === 2) {
      nav = (
        <Fragment>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/resturantDash">Restaurant Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/top">Top Restaurants</NavLink>
          </li>
          <li>
            <NavLink to="/recent">Recent Reviews</NavLink>
          </li>
          <li>
            <NavLink className="navbar-right" to="/logout">
              Logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else if (parseInt(this.state.role) === 1) {
      nav = (
        <Fragment>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/userdash">User Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/top">Top Restaurants</NavLink>
          </li>
          <li>
            <NavLink to="/recent">Recent Reviews</NavLink>
          </li>
          <li>
            <NavLink className="navbar-right" to="/logout">
              Logout
            </NavLink>
          </li>
        </Fragment>
      );
    }

    return (
      <HashRouter>
        <div>
          <h1>Review Website</h1>
          <ul className="header">{nav}</ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" render={(props) => <LogReg {...props} roleChange={this.handleChanged} />} />
            <Route path="/userdash" component={Userdash} />
            <Route path="/top" component={TopRestaurants} />
            <Route path="/recent" component={RecentReviews} />
            <Route path="/restaurantDash" component={RestaurantDash} />
            <Route path="/logout" component={Logout} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
