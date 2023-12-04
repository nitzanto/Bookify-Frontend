import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  createReservationData,
  makeReservation,
  Nav,
  RESERVATIONS_SERVICE,
  restaurantsData,
  useAuthentication,
} from "../../libs/common/index.js";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();
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
      const reservationData = createReservationData(
        restaurant.id,
        selectedDate,
      );

      try {
        const invoiceId = await makeReservation(
          reservationData,
          RESERVATIONS_SERVICE,
          navigate,
        );

        navigate(`/order/${invoiceId}`);
        console.log("Reservation successful");
      } catch (error) {
        console.error("Error making reservation:", error);
      }
    }
  };

  if (!restaurant) {
    return <div></div>;
  }

  return (
    <>
      <Nav />
      <div className="relative p-4 md:p-8">
        <div className="max-w-full md:max-w-4xl mx-auto flex flex-col md:flex-row bg-white p-4 md:p-8 rounded-lg shadow-md">
          {/* Left side - Restaurant details */}
          <div className="flex-1 text-center md:text-left md:mr-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {restaurant.name}
            </h1>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-gray-600">{restaurant.description}</p>
            </div>

            <p className="text-gray-700">
              <span className="font-semibold">Location:</span>{" "}
              {restaurant.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Cuisine:</span>{" "}
              {restaurant.cuisine}
            </p>

            {/* Date selection */}
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">Available Dates:</span>
              </p>
              <ul className="mt-2 space-y-2">
                {restaurant.reservationDates.map((date) => (
                  <li
                    key={date.toISOString()}
                    className="p-2 md:p-4 bg-blue-50 rounded-md hover:shadow-md transition"
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
              className={`mt-4 px-6 py-3 bg-blue-500 text-white rounded ${
                isButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleReservation}
              disabled={!isButtonEnabled}
            >
              Reserve Table
            </button>
          </div>

          {/* Right side - Restaurant image in a card */}
          <div className="mt-4 md:mt-0 flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={restaurant.imgURL}
                alt={restaurant.name}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
