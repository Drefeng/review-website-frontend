import React, { Component } from "react";
import Tabs from '../Tabs/Tabs';
import Login from './Login/Login'
import Register from './Register/Register'

class LogReg extends Component {
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
 
export default LogReg;