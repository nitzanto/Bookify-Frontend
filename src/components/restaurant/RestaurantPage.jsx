import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Nav,
  RESERVATIONS_SERVICE,
  restaurantsData,
  showLoadingAlert,
  useAuthentication,
} from "../../libs/common/index.js";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();
  let invoiceId;

  const { isLoggedIn } = useAuthentication();

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

  const handleReservation = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Not Logged In",
        text: "You must be logged in to make a reservation.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then((result) => {
        // If the user clicks on "Login", navigate to the login page
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const reservationData = {
        startDate: "02-01-2021",
        endDate: "02-01-2023",
        charge: {
          amount: 199,
          card: {
            cvc: "413",
            exp_month: 12,
            exp_year: 2027,
            number: "4242 4242 4242 4242",
          },
        },
      };

      try {
        const jwtToken = Cookies.get("Authentication");
        const loadingAlert = showLoadingAlert();
        const response = await axios.post(
          RESERVATIONS_SERVICE,
          reservationData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authentication: `${jwtToken}`,
            },
          },
        );

        invoiceId = response.data.invoiceId;
        loadingAlert.close();
        navigate(`/order/${invoiceId}`);
        console.log("Reservation successful");
      } catch (error) {
        console.error("Reservation error:", error);
      }
    }
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
