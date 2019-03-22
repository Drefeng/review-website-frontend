import React, { Component } from "react";
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
    );
  }
}
 
export default Home;