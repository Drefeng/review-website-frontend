import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";
import RecentCards from "../../cardsItems/recentReviewsCard";
class ReviewDash extends Component{
    
    constructor(){
        super()
        this.state = {
            yourReviews: [],
        };

    }

    getRecentReview(){
        fetch('https://review-website-api.herokuapp.com/review/user/' + localStorage.getItem('id')).then(res => res.json())
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
  ));
                </div>
                <div label ='Create new review'>

                </div>
            </Tabs>
        );
    }
}

export default ReviewDash;