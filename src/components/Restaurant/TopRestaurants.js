import React, { Component } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
 
class TopRestaurants extends Component {
constructor(props){
  super(props);
  this.state = {
    data: []
  }
}

componentWillMount(){
    fetch('https://review-website-api.herokuapp.com/restaurant', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=> {
            return res.json();
    })
    .then(data => {
      let restaurant = data.rows.map((res) => {
        return(res)
      })
      this.setState({data: restaurant}, function(){
        console.log(this.state.data);
      }.bind(this))
    })
    
    .catch(err => {
        console.log(err);
        alert('error logging in please try again');
    });
}


render() {
console.log(this.state.data.description);
return (
  <div>
    <h2>Restaurants</h2>
      <RestaurantList restaurants={this.state.data} />
  </div>
);
}
}
 
export default TopRestaurants;