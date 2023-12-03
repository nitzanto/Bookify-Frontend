import { star } from "../../assets/icons/index.js";
import { Link } from "react-router-dom";

const TopRestaurant = ({ imgURL, name, description, rating, id }) => {
  const restaurantPageURL = `/restaurant/${id}`;

  return (
    <Link to={restaurantPageURL}>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img src={imgURL} alt={name} className="w-full h-auto object-cover" />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-center font-palanquin mb-2">
            {name}
          </h3>
          <p className="text-sm text-center text-gray-700 leading-snug">
            {description}
          </p>
          <div className="flex justify-center items-center gap-2.5 mt-3">
            <img
              src={star}
              alt="rating star"
              width={24}
              height={24}
              className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopRestaurant;
