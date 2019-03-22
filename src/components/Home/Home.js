import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import RecentCards from '../cardsItems/recentReviewsCard'
import RestaurantCard from '../cardsItems/ResturantCards'
 
class Home extends Component {
  constructor(){
    super()
    this.state = {
      allReviews: [],
      popularRes: []
  };
  
  }
  
  componentDidMount() {
    this.getRecentReview();
    this.getPopular();
  }
  
  getRecentReview(){
    fetch('https://review-website-api.herokuapp.com/review/recentreviews').then(res => res.json())
    .then(data => {
        this.setState({
            allReviews: data.rows
        })
    }).catch(err => {
      console.log(err);
});
  }

  getPopular(){
    fetch('https://review-website-api.herokuapp.com/restaurant/popular').then(res => res.json())
    .then(data => {
        this.setState({
            popularRes: data.rows
        })
    }).catch(err => {
      console.log(err);
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

    
    
    return (
      <Container>
      <div>
        <Row>
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