import React, { Component } from "react";
import ReviewDash from "./ReviewDash/ReviewDash";
import OwnerDash from "./OwnerDash/OwnerDash";
import Tabs from "../Tabs/Tabs";
import Update from "./Update";
 
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
    return(
      <div>
                <Tabs>
                <div label ='List your reviews' />
                
                <div label ='Create new review' />

                <div label ='Update user info'>
                    <Update />
                </div>

            </Tabs>
            </div>
    )};
    
}

export default Userdash;