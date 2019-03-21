import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
 
class TopRestaurants extends Component {

render() {
const title = 'Top Rated Restaurants';
const restaurants = [
  { id: 1, name: "SteakShack", address: "Bergstien 16" },
  { id: 2, name: "Burgerbase", address: "Drammensveien 5" },
  { id: 3, name: "Snack Attack", address: "Waldemar Thranesgate 44" },
  { id: 4, name: "Blargh", address: "Sørkedalsveien 3" }
];

return (
  <div>
    <h2>{title}</h2>
      <RestaurantList restaurants={restaurants} />
  </div>
);
}
}
 
export default TopRestaurants;