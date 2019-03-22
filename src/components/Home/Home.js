import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import RecentCards from '../cardsItems/recentReviewsCard'
import RestaurantCard from '../cardsItems/ResturantCards'
 
class Home extends Component {
  constructor(){
    super()
    this.state = {
      allReviews: [],
      popularRes: [],
      restaurant:[],
      searchText: ''
  };
  
  }
  
  componentDidMount() {
    this.getRecentReview();
    this.getPopular();
    this.getRestaurant();
  }
  
  getRecentReview(){
    fetch('/review/recentreviews').then(res => res.json())
    .then(data => {
        this.setState({
            allReviews: data.rows
        })
    }).catch(err => {
      console.log(err);
});
  }

  getPopular(){
    fetch('/restaurant/popular').then(res => res.json())
    .then(data => {
        this.setState({
            popularRes: data.rows
        })
    }).catch(err => {
      console.log(err);
    });
  }

  getRestaurant(){
    fetch('/restaurant/all').then(res => res.json())
    .then(data => {
      console.log(data.rows);
        this.setState({
          restaurant: data.rows
        })
    }).catch(err => {
      console.log(err);
    });
  }

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value }, () => {
        if (this.state.searchText) {
            const filter = this.state.restaurant.filter(el => {
                return el.name.toLowerCase().includes(this.state.searchText.toLowerCase()) || el.category.toLowerCase().includes(this.state.searchText.toLowerCase())
            });
            this.setState({ restaurant: filter });
        } else {
            this.getRestaurant();
        }
    });

}

  render() {

    const reviews = this.state.allReviews.map(item => (
      <RecentCards
          key={item.review_id}
          name={item.name}
          description={item.review_text}
          rating={item.rating}
          updated={item.updated_at}
      />
  ));


  const popular = this.state.popularRes.map(item => (
    <RestaurantCard
        key={item.restaurant_id}
        name={item.name}
        description={item.description}
        category={item.category}
        address={item.address}
        postcode={item.postcode}
        rating={item.avgrating}
    />
));

const search = this.state.restaurant.map(item => (
  <RestaurantCard
  key={item.restaurant_id}
  name={item.name}
  description={item.description}
  category={item.category}
  address={item.address}
  postcode={item.postcode}
  rating={item.avgrating}
/>
));
    
      

    return (
      <Container>
      <div>
        <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearchChange} value={this.state.searchText} />
        <Row>
          {search}
        </Row>
      </div>

      <div>
        <h1 className="text-center">Recent reviews</h1>
        <Row>
            {reviews}
        </Row>
      </div>
      <div>
      <h1 className="text-center">Top 5 restaurants</h1>
        <Row>
            {popular}
        </Row>
      </div>


      </Container>
    );
  }
}
 
export default Home;