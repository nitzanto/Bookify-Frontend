import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bookifyLogo } from "../../assets/images/index.js";
import { authenticate, testUser } from "../../libs/common/index.js";

const Login = () => {
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

  const handleTestUser = () => {
    setCredentials(testUser);
  };

  const handleLogin = async () => {
    const isAuthenticated = await authenticate(credentials);

    if (isAuthenticated) {
      navigate("/");
    } else {
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
        <div className="flex space-x-4">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex-1"
          >
            Login
          </button>
          <button
            onClick={handleTestUser}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex-1"
          >
            Test User
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Are you new?{" "}
            <Link className="text-blue-500 underline" to="/signup">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
