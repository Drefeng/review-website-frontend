import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import StarRatings from 'react-star-ratings';
 

const RestaurantCard = (props) => {

    return (
    <Card body outline color="primary" className="text-center">
        <CardTitle>Restaurant: {props.name}</CardTitle>
        <CardText>Description: {props.description}</CardText>
        <CardText>Category: {props.category}</CardText>
        <CardText>Address: {props.address}, {props.postcode}</CardText>

        <StarRatings
        starRatedColor="yellow"
        numberOfStars={5}
        name='rating'
        rating={parseFloat(props.rating)}
        >
        </StarRatings>

     
    </Card>
    )

};

export default RestaurantCard;
