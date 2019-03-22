import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
 

const RecentCards = (props) => {

    return (
    <Card body outline color="primary" className="text-center">
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <StarRatings
        starRatedColor="yellow"
        numberOfStars={5}
        name='rating'
        rating={parseInt(props.rating)}
        >
        </StarRatings>
        <CardText>
            <small className="text-muted">{props.updated}</small>
        </CardText>
     
    </Card>
    )

};

export default RecentCards;
