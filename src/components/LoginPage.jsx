import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { bookifyLogo } from "../assets/images/index.js";
import Cookies from "js-cookie";
import { AUTH_SERVICE_LOGIN } from "../libs/common/index.js";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error message on input change
  };

  const handleLogin = async () => {
    try {
      console.log(AUTH_SERVICE_LOGIN);
      const response = await axios.post(
        AUTH_SERVICE_LOGIN,
        {
          email: credentials.email,
          password: credentials.password,
        },
        {
          withCredentials: true,
        },
      );

      // Access the cookies from the response headers
      const jwtToken = response.data;

      // Save the JWT token using js-cookie
      Cookies.set("Authentication", jwtToken);

      // Redirect to the home page upon successful login
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <a href="/">
        <img src={bookifyLogo} alt="Logo" className="w-48 h-48 mb-8" />
      </a>
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="mt-1 p-3 border rounded-md w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 p-3 border rounded-md w-full"
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-6 py-3 rounded-md w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
