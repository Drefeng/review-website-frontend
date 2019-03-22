import React, { Component } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
 
class TopRestaurants extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      error: ''
    }
  }

  componentWillMount(){
      this.getData();
  }

  getData(){
    fetch('/restaurant/all', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer' + " " + localStorage.getItem('token')
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
      this.setState({error: 'YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE'})
  });
  }


  render() {

  console.log(localStorage.getItem('token'))
  return (
    <div>
      <h2>Restaurants</h2>
        <h1>{this.state.error}</h1>
        <RestaurantList restaurants={this.state.data} />
    </div>
  );
  }
  }
 
export default TopRestaurants;