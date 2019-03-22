import React from 'react';
import './RestaurantCard.css';
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <h4 className="card-title">{props.name}</h4>
                    <div className="mapouter">
                    <div className="gmap_canvas">
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
                    </div>
                    </div>
                    <p className="card-title">{props.review}</p>
                    <Link to= {{ pathname: '/edit/' + props.id }} className="btn btn-primary">Edit</Link>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;