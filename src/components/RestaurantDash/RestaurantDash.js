import React, { Component } from "react";
import Update from "../Userdash/Update";
import Tabs from "../Tabs/Tabs";

class RestaurantDash extends Component{
    render(){
        return(
            <div>
                <Tabs>
                <div label ='List your restaurants' />
                
                <div label ='Create new restaurant' />

                <div label ='Recent reviews for your restaurants' />

                <div label ='Update user info'>
                    <Update />
                </div>

            </Tabs>
            </div>
        );
    }
}

export default RestaurantDash;