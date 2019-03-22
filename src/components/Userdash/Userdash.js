import React, { Component } from "react";
import ReviewDash from "./ReviewDash/ReviewDash";
import OwnerDash from "./OwnerDash/OwnerDash";
 
class Userdash extends Component {
  constructor(){
    super();
    this.state = {
      info: []
  };
}

componentDidMount() {
  fetch('/user/' + localStorage.getItem('id'))
  .then(results =>{
    return results.json();
  }).then(data => {
    console.log(data);
    this.setState({info : data});
  }).catch(err => {
    console.log(err);
  });
}

  render() {

    let userData = this.state.info.map( userinfo =>(
      <div>
          <p>{userinfo.user_id}</p>
          <p>{userinfo.email}</p>
      </div>
      ));
    let username = this.state.info.map( users => (
      <div>
        <p>{users.username}</p>
      </div>
    ));
    let role = this.state.info.map( roles => (
      <div>
        <p>{roles.role}</p>
      </div>
    ))
      
    if(JSON.parse(localStorage.getItem('role')) === 0){
    return (
      <div>
        <h2>Welcome</h2>
        <p>{username}</p>
        <div>
          <ReviewDash />
        </div>
        <p>You are now logged in as {username} (reviewer)</p>
      </div>
    );
  }
  else if(JSON.parse(localStorage.getItem('role')) === 1){
    return(
      <div>
        <h2>Welcome</h2>
        <p>{username}</p>
        <div>
          <OwnerDash />
        </div>
        <p>You are now logged in as {username} (owner)</p>
      </div>
    );
  }
}
}

export default Userdash;