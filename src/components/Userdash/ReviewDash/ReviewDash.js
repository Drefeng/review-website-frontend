import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";
class ReviewDash extends Component{
    render(){
        return(
            <Tabs>
                <div>See all reviews</div>
                
                <div>Add new review</div>

                <div>Update user info</div>
            </Tabs>
        );
    }
}

export default ReviewDash;