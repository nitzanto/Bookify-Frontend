import { Link } from "react-router-dom";
import { NotFoundAnimated } from "../../../assets/images/index.js";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for does not exist.
      </p>
      <img
        src={NotFoundAnimated}
        alt="404 page"
        className="max-w-md w-full mb-6"
      />
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-700 transition"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
