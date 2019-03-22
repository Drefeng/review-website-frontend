import React, { Component } from "react";
import ReviewDash from "./ReviewDash/ReviewDash";
import OwnerDash from "./OwnerDash/OwnerDash";
import Tab from "../Tabs/Tab/Tab";
import Tabs from "../Tabs/Tabs";
import Update from "./Update";
import RecentCards from "../cardsItems/recentReviewsCard";
 
class Userdash extends Component {
  constructor(){
    super();
    this.state = {
      info: [],
      yourReviews: [],
  };
}

componentDidMount() {
  fetch('/user/' + localStorage.getItem('id'))
  .then(results =>{
    return results.json();
  }).then(data => {
    console.log(data);
    this.setState({info : data});
  }).catch(err => {
    console.log(err);
  });
}


getRecentReview(){
  fetch('/review/user/' + localStorage.getItem('id')).then(res => res.json())
  .then(data => {
      this.setState({
          yourReviews: data.rows
      })
  }).catch(err => {
    console.log(err);
});
}

render(){

  const reviews = this.state.yourReviews.map(item => (
      <RecentCards
         key={item.review_id}
         name={item.name}
description={item.review_text}
rating={item.rating}
updated={item.updated_at}
/>
  ));
  return(
      <Tabs>
          <div label ='List your reviews'>
              {reviews}
              
          </div>
          <div label ='Create new review'>

          </div>
      </Tabs>
  );
}
}
export default Userdash;