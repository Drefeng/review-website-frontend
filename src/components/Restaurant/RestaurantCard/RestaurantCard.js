import React from 'react';
import './RestaurantCard.css';
import { Card, CardTitle, CardText, } from 'reactstrap';
import StarRatings from 'react-star-ratings';
 

const RestaurantCard = (props) => {
    return (

        <Card body outline color="primary" className="text-center">
        <CardTitle>Restaurant: {props.name}</CardTitle>
        <CardText>Description: {props.description}</CardText>
        <CardText>Category: {props.category}</CardText>
        <iframe 
                            title="map"
                            width="270" 
                            height="270" 
                            id="gmap_canvas" 
                            src={"https://maps.google.com/maps?q=" + props.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
        </iframe>
        <br>

        </br>
        <CardText>Address: {props.address}, {props.postcode}</CardText>

        {/* <StarRatings
        starRatedColor="yellow"
        numberOfStars={5}
        name='rating'
        rating={parseFloat(props.rating)}
        /> */}
        

     
    </Card>

      
    )
};

export default RestaurantCard;