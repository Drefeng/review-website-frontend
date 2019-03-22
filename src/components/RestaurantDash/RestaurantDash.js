import React, { Component } from "react";
import Update from "../Userdash/Update";
import Tabs from "../Tabs/Tabs";
import Reviews from './resturantdashcomp/recentOwnerReviews'

class RestaurantDash extends Component{
    render(){
        return(
            <div>
                <Tabs>
                <div label ='List your restaurants' />
                
                <div label ='Create new restaurant' />

                <div label ='Recent reviews for your restaurants' >
                <Reviews></Reviews>
                </div>

                <div label ='Update user info'>


                    <Update />
                </div>


            </Tabs>
            </div>
        );
    }
}

export default RestaurantDash;