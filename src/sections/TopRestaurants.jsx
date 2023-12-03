import { TopRestaurant } from "../components";
import { restaurantsData } from "../libs/common/index.js";

const TopRestaurants = () => {
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
        {restaurantsData.map((restaurant) => (
          <TopRestaurant key={restaurant.name} {...restaurant} />
        ))}
      </div>
    </section>
  );
};

export default TopRestaurants;
