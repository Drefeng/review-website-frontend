import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";
class ReviewDash extends Component{
    
    render(){
        return(
            <Tabs>
                <div label ='List your reviews' />
                
                <div label ='Create new review' />
            </Tabs>
        );
    }
}

export default ReviewDash;