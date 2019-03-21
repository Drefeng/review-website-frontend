import React, { Component } from "react";
 
class Userdash extends Component {
  render() {
    if(/* user auth === 0 */ statement){
    return (
      <div>
        <h2>YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE</h2>
        
        <p>Please login first</p>
      </div>
    );
  }
  else if(/* user auth === 1 */ statement){
    if(/*user role === 0 */ statement){
    return (
      <div>

      </div>
    );
    }
    else{
      return (
        <div>

        </div>
      );
    }
  }
}
}
export default Userdash;