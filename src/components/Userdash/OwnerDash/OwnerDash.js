import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";

class OwnerDash extends Component{
    render(){
        return(
            <Tabs>
                <div>See all restaurants</div>
                
                <div>Create new restaurant</div>

                <div>Update user info</div>
            </Tabs>
        );
    }
}

export default OwnerDash;