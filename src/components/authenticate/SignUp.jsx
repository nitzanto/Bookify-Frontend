import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { bookifyLogo } from "../../assets/images/index.js";
import { authenticate, USER_SERVICE } from "../../libs/common/index.js";
import zxcvbn from "zxcvbn";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [passwordStrength, setPasswordStrength] = useState(0); // State for password strength

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setCredentials({ ...credentials, [e.target.name]: newPassword });
    setErrorMessage(""); // Clear error message on input change
    setPasswordStrength(zxcvbn(newPassword).score); // Update password strength
  };

  const handleSignUp = async () => {
    const passwordScore = zxcvbn(credentials.password);

    if (passwordScore.score < 2) {
      setErrorMessage("Please choose a stronger password.");
      return;
    }

    try {
      const response = await axios.post(USER_SERVICE, credentials, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      await authenticate();
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <a href="/">
        <img src={bookifyLogo} alt="Logo" className="w-48 h-48 mb-8" />
      </a>
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
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
          {credentials.password && (
            <p
              className={`text-sm ${
                passwordStrength === 4 ? "text-green-500" : "text-red-500"
              } mt-2`}
            >
              Password Strength: {passwordStrength === 4 ? "Strong" : "Weak"}
            </p>
          )}
        </div>
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}
        <div className="flex space-x-4">
          <button
            onClick={handleSignUp}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex-1"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
