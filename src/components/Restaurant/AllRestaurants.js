import React, { Component } from "react";
import { Container, Row } from 'reactstrap';
import RestaurantCard from '../cardsItems/ResturantCards'
import RecentCards from '../cardsItems/recentReviewsCard'
 
class TopRestaurants extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: [],
      reviews:[],
      searchText: ''
    }
  }

  componentWillMount(){
      this.getData();
      this.getReveiws();
  }

  // getData(){
  //   fetch('/restaurant/all', {
  //     method: 'GET',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization' : 'Bearer' + " " + localStorage.getItem('token')
  //     }
  // })
  // .then((res)=> {
  //         return res.json();
  // })
  // .then(data => {
  //   let restaurant = data.rows.map((res) => {
  //     return(res)
  //   })
  //   this.setState({data: restaurant}, function(){
  //     console.log(this.state.data);
  //   }.bind(this))
  // })

  // .catch(err => {
  //     console.log(err);
  //     this.setState({error: 'YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE'})
  // });
  // }


  getData(){
    fetch('https://review-website-api.herokuapp.com/restaurant/all').then(res => res.json())
    .then(data => {
        this.setState({
          restaurant: data.rows
        })
        console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  getReveiws(){
    fetch('https://review-website-api.herokuapp.com/review/revres').then(res => res.json())
    .then(data => {
        this.setState({
          reviews: data.rows
        })
        console.log(data);
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
            this.getData();
        }
    });

}


  render() {

    const reviews = this.state.reviews.map(item => (
      <RecentCards
          key={item.review_id}
          name={item.name}
          description={item.review_text}
          rating={item.rating}
          updated={item.updated_at}
      />
  ));


  const restaurant = this.state.restaurant.map(item => (
    <RestaurantCard
        key={item.restaurant_id}
        name={item.name}
        description={item.description}
        category={item.category}
        address={item.address}
        postcode={item.postcode}
        rating={item.avgrating}
    />));


  return (
 

 <Container>
      <div>
        <h1 className="text-center">All restaurants</h1>
        <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearchChange} value={this.state.searchText} />
        <br></br>
        <Row>
        {restaurant}
        </Row>
      </div>
      <div>
      <h1 className="text-center">All Reviews</h1>
      <Row>
        {reviews}
        </Row>
      </div>
  </Container>
  );
  }
  }
 
export default TopRestaurants;