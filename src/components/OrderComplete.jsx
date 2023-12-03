import { Link } from "react-router-dom";
import { bookifyLogo, EmailAnimated } from "../assets/images/index.js";

const OrderComplete = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Big Card Wrapper */}
      <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-md">
        {/* Order Complete Section */}
        <div className="mb-8 text-center">
          <img
            src={bookifyLogo}
            alt="Order Complete"
            className="w-48 h-48 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            Order Complete!
          </h1>
          <p className="text-lg text-gray-700">
            Thank you for your order. Your purchase is complete.
          </p>
        </div>

        {/* Email Verification Section */}
        <div className="text-center">
          <img
            src={EmailAnimated}
            alt="Email Sent"
            className="w-48 h-48 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Email Verification Sent
          </h1>
          <p className="text-lg text-gray-700">
            We have sent you an email for verification. Please check your inbox.
          </p>
        </div>

        {/* Return to Home Page Link */}
        <Link
          to="/"
          className="block text-center text-blue-500 underline hover:text-blue-700 transition mt-8"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default OrderComplete;
