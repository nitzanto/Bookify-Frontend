import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../data/index.js";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Find the restaurant with the matching id
    const foundRestaurant = restaurantsData.find((item) => item.id === id);

    // Set the found restaurant in the state
    setRestaurant(foundRestaurant);
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <p>Location: {restaurant.location}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      {/* Render other details about the restaurant */}
    </div>
  );
};

export default RestaurantPage;
