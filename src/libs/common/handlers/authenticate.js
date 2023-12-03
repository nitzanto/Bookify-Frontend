import axios from "axios";
import Cookies from "js-cookie";
import { AUTH_SERVICE_LOGIN } from "../constants/index.js";

export const authenticate = async (credentials) => {
  try {
    const response = await axios.post(AUTH_SERVICE_LOGIN, credentials, {
      withCredentials: true,
    });

    // Access the cookies from the response headers
    const jwtToken = response.data;

    // Save the JWT token using js-cookie
    Cookies.set("Authentication", jwtToken);

    return true; // Authentication successful
  } catch (error) {
    console.error(error);
    return false; // Authentication failed
  }
};
