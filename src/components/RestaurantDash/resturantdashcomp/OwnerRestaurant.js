import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import RestaurantCard from "../../cardsItems/ResturantCards";
 
class RecentReviews extends Component {
  constructor(props){
    super(props)
    this.state = {
      ownerRestaurants: [],
  };
  }
  
  componentDidMount() {
    this.ownerRestaurants();
  }

  componenWillMount(){
    this.ownerRestaurants();
  }
  
  
  ownerRestaurants = () =>{
    fetch('https://review-website-api.herokuapp.com/restaurant/user/' + localStorage.getItem('id'), {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
             'Accept': 'application/json',
             'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }})
    .then(res => res.json())
    .then(data => {
        this.setState({
          ownerRestaurants: data.rows
        })
    }).catch(err => {
      console.log(err);
});
}


  render() {
    const restaurants = this.state.ownerRestaurants.map(item => (
      <RestaurantCard
          key={item.restaurant_id}
          name={item.name}
          description={item.description}
          category={item.category}
          address={item.address}
          rating={item.rating}
      />
  ));

    return (
      <Container>
      <div>
        <h1 className="text-center">Your Restaurants</h1>
        <Row>
            {restaurants}
        </Row>
      </div>
      </Container>
    );
  }
}
 
export default RecentReviews;