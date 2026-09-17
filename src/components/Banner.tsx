import HeroImg from "../assets/banner-stack.png";
import { GRADIENT_TEXT, GRADIENT_BG } from "../utils/theme";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row  lg:max-w-[85%] sm:max-w-[90%] items-center gap-20">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl md:font-extrabold font-bold lg:font-extrabold leading-tight">
          Build Your Ideal <br />
          <span className={GRADIENT_TEXT}>Development Stack</span>
        </h1>

        <p className="mt-4 text-base-content/70 max-w-xl mx-auto lg:mx-0 md:text-[18px]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the perfect stack that fits your
          next project.
        </p>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2">
          <button
            className={`btn border-none text-white rounded-md md:px-6 md:py-4 sm:px-14 sm:py-7 ${GRADIENT_BG}`}
          >
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-md md:px-6 md:py-4 sm:px-14 sm:py-7">Learn More</button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={HeroImg}
          alt="Development stack illustration"
          className="max-w-[80%] h-42 w-55 scale-230 lg:h-90 lg:w-auto md:h-100 md:w-auto md:scale-140 sm:scale-160 sm:h-70 sm:w-auto sm:max-w-xl"
        />
      </div>
    </div>
  );
};

export default Banner;