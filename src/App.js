import React from 'react';
// import { render } from "react-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Login from './Login'
import Register from './Register'

import Tabs from './Tabs';
require('./styles.css');

function App() {
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

const container = document.createElement('div');
document.body.appendChild(container);
export default App;