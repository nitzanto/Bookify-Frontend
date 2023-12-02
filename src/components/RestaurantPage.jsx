import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../data/restaurantsData.js";
import Nav from "./Nav.jsx";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Find the restaurant with the matching id
    const foundRestaurant = restaurantsData.find((item) => item.id === id);

    // Set the found restaurant in the state
    setRestaurant(foundRestaurant);
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsButtonEnabled(true);
  };

  const handleReservation = () => {
    // Perform reservation logic using selectedDate
    // For now, just log the selected date to the console
    console.log("Reservation for:", selectedDate);
    // You can add more reservation handling logic here
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
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

            {/* Date selection */}
            <div className="mt-6">
              <p className="text-gray-700">
                <span className="font-semibold">Available Dates:</span>
              </p>
              <ul className="mt-2 space-y-2">
                {restaurant.reservationDates.map((date) => (
                  <li
                    key={date.toISOString()}
                    className="p-4 bg-blue-50 rounded-md hover:shadow-md transition"
                  >
                    <span
                      className={`font-semibold ${
                        selectedDate === date ? "text-blue-500" : ""
                      }`}
                      onClick={() => handleDateChange(date)}
                    >
                      {date.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reservation button */}
            <button
              className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${
                isButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleReservation}
              disabled={!isButtonEnabled}
            >
              Reserve Table
            </button>
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
