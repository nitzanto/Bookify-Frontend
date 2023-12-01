import { diningTogether } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Discover <span className="text-blue-500">Exceptional Dining</span>{" "}
          Experiences
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Indulge in premium reservations that combine the essence of exquisite
          cuisine and unparalleled ambiance.{" "}
          <span className="text-blue-500">Bookify</span> is your gateway to
          elevated dining, promising you an extraordinary blend of quality
          service, culinary innovation, and a dash of sophistication.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center transition-transform transform hover:scale-105">
        <img
          src={diningTogether}
          alt="product detail"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
