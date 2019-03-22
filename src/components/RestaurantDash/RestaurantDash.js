import React, { Component } from "react";
import Update from "../Userdash/Update";
import Tabs from "../Tabs/Tabs";
import Reviews from './resturantdashcomp/recentOwnerReviews'
import Restaurant from './resturantdashcomp/OwnerRestaurant'
import CreateRestaurant from './resturantdashcomp/CreateRestaurant'

class RestaurantDash extends Component{
    render(){
        return(
            <div>
                <Tabs>
                <div label ='List your restaurants' >
                <Restaurant/>
                </div>
                
                <div label ='Create new restaurant' > 
                   <CreateRestaurant/>
                </div>

                <div label ='Recent reviews for your restaurants' >
                <Reviews/>
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