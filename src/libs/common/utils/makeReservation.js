import axios from "axios";
import Cookies from "js-cookie";
import { showLoadingAlert } from "../alerts/index.js";

export const makeReservation = async (
  reservationData,
  reservationEndpoint,
  navigate,
) => {
  try {
    const jwtToken = Cookies.get("Authentication");
    const loadingAlert = showLoadingAlert();
    const response = await axios.post(reservationEndpoint, reservationData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authentication: `${jwtToken}`,
      },
    });

    loadingAlert.close();
    return response.data.invoiceId;
  } catch (error) {
    console.error("Reservation error:", error);
  }
};
