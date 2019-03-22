import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import RecentCards from '../../cardsItems/recentReviewsCard'
 
class RecentReviews extends Component {
  constructor(props){
    super(props)
    this.state = {
      ownerReviews: [],
  };
  }
  
  componentDidMount() {
    this.ownerReviews();
  }

  componenWillMount(){
    this.ownerReviews();
  }
  
  
  ownerReviews = () =>{
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
          ownerReviews: data.rows
        })
    }).catch(err => {
      console.log(err);
});
}


  render() {

    console.log(this.state.ownerReviews.rating);

    const reviews = this.state.ownerReviews.map(item => (
      <RecentCards
          key={item.review_id}
          name={item.name}
          description={item.review_text}
          rating={item.rating}
          updated={item.updated_at}
      />
  ));

    return (
      <Container>
      <div>
        <h1 className="text-center">Recent reviews</h1>
        <Row>
            {reviews}
        </Row>
      </div>
      </Container>
    );
  }
}
 
export default RecentReviews;