import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

function RestaurantList(props){
	const res = props.restaurants;
    const listRestaurants = res.map((res) =>
	        <RestaurantCard
	        	key = {res.restaurant_id}
	        	id = {res.restaurant_id}
		        name = {res.name}
				address = {res.address}
				review = {res.description}
		    />
	        );

    return (
    	<div className="row">
			{listRestaurants}
		</div>
    	);
}

export default RestaurantList;