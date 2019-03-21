import React, { Component } from "react";
import RestaurantList from "../Restaurant/RestaurantList/RestaurantList";

 
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: [],
  };
}

/* componentWillMount(){

  fetch('https://review-website-api.herokuapp.com/restaurant')
  .then(data => data.json())
      .then((data) => { this.setState({ restaurants: data }) 
    }); 

} */


render() {
  return (
    <div>
        Test
      </div>
    );
  }
}
 
export default Home;