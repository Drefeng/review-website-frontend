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

    if(localStorage.length === 0){
    return (
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
}

export default Userdash;