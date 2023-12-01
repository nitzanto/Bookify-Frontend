import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../data/index.js";
import NavMain from "./NavMain.jsx";

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
    <>
      <NavMain />
      <div className="relative p-8">
        <div className="max-w-3xl mx-auto flex bg-white p-8 rounded-lg shadow-md">
          {/* Left side - Restaurant details */}
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold mb-4">{restaurant.name}</h1>
            <p className="text-gray-600 mb-6">{restaurant.description}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span>{" "}
              {restaurant.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Cuisine:</span>{" "}
              {restaurant.cuisine}
            </p>
            {/* Add more details as needed */}
          </div>

          {/* Right side - Restaurant image in a card */}
          <div className="flex-shrink-0 ml-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={restaurant.imgURL}
                alt={restaurant.name}
                className="w-96 h-96 object-cover" // Adjust width and height here
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
