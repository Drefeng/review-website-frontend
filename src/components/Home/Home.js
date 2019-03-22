import React, { Component } from "react";
<<<<<<< HEAD
import { Container, Row, Col } from 'reactstrap';
 
class Home extends Component {
  render() {
    return (
      <Container>
      <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
      </Row>
      </Container>
=======
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
>>>>>>> 0b402132a71f02474f51d3cf4127fcf69092c381
    );
  }
}
 
export default Home;