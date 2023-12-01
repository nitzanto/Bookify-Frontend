import { kitchens } from "../constants";
import { Kitchen } from "../components";

const Kitchens = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Choose your favorite <span className="text-blue-500"> Kitchen </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Reserve Your Culinary Adventure! 😎
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {kitchens.map((kitchen) => (
          <Kitchen key={kitchen.name} {...kitchen} />
        ))}
      </div>
    </section>
  );
};

export default Kitchens;
