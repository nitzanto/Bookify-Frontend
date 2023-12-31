import { Button, statistics } from "../libs/common/index.js";
import { arrowRight } from "../assets/icons";
import { bookify3d } from "../assets/images/index.js";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 text-blue-500 pr-10">
            Bookify
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-7 mb-14 sm:max-w-sm">
          Flavors Reserved, Moments Served –{" "}
          <span className="text-blue-500 font-bold">Bookify</span> Your Table
          Today.
        </p>

        <a href="#restaurants">
          <Button label="Book now" iconURL={arrowRight} />
        </a>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bookify3d}
          alt="Bookify Logo 3D"
          width={368}
          height={368}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
