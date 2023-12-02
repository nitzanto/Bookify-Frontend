import React, { useState } from "react";
import axios from "axios";
import { bookifyLogo } from "../assets/images/index.js";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error message on input change
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://34.160.44.153/auth/login",
        credentials,
        {
          withCredentials: true,
        },
      );

      console.log("Login successful:", response.data);
      // Handle successful login (e.g., store token in local storage)
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle failed login
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={bookifyLogo} alt="Logo" className="w-48 h-48 mb-8" />

      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
