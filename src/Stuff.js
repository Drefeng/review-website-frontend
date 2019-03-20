import React, { Component } from "react";
import Tabs from './Tabs';
import Login from './Login'
import Register from './Register'

class Stuff extends Component {
  render() {
    return (
        <div>
          <h1>Login or Register</h1>
         <Tabs>
          <div label="Login">
            <Login />
          </div>
          <div label="Register">
            <Register />
          </div>
         </Tabs>
        </div>
      );
  }
}
 
export default Stuff;