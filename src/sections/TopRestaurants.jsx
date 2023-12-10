import { TopRestaurant } from "../components";
import { useRestaurantsData } from "../libs/common/index.js";

const TopRestaurants = () => {
  const { data, loading, error } = useRestaurantsData();

  return (
    <section id="restaurants" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Reserve at our{" "}
          <span className="text-blue-500"> Top Restaurants </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Crafting Dining Experiences, Table by Table. 🥸
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {loading ? (
          // Render a loading animation while data is being fetched
          <div className="animate-pulse bg-gray-200 rounded-lg p-4">
            {/* Placeholder content for the loading animation */}
            <div className="h-8 bg-gray-300 mb-2 w-2/3"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        ) : error ? (
          // Render an error message if there's an error
          <p>Error fetching data: {error.message}</p>
        ) : (
          // Render the list of restaurants once data is available
          data.map((restaurant) => (
            <TopRestaurant key={restaurant.name} {...restaurant} />
          ))
        )}
      </div>
    </section>
  );
};

export default TopRestaurants;
