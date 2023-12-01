import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      // Simulating fetching data from an API
      const response = await fetch(`/api/restaurants/${id}`);
      const data = await response.json();
      setRestaurant(data);
    };

    fetchRestaurantData();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      {/* Render other details about the restaurant */}
    </div>
  );
};

export default RestaurantPage;
