import React, { Component } from "react";
import ReviewDash from "./ReviewDash/ReviewDash";
import OwnerDash from "./OwnerDash/OwnerDash";
 
class Userdash extends Component {
  render() {
    if(localStorage.length === 0){
    return (
      <div>
        <h2>YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE</h2>
        
        <p>Please login first</p>
      </div>
    );
  }
  else{
    return(
      <div>
        <h2>Welcome</h2>

        <p>You are now logged in</p>
      </div>
    );
  }
}
}

export default Userdash;