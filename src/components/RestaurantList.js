import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList(props){
	const restaurants = props.restaurants;
    const listRestaurants = restaurants.map((res) =>
	        <RestaurantCard
	        	key = {res.id}
	        	id = {res.id}
		        name = {res.name}
		        address = {res.address} 
		    />
	        );

    return (
    	<div className="row">
			{listRestaurants}
		</div>
    	);
}

export default RestaurantList;