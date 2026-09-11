import Logo2 from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-20 py-22 flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">Build Your Ideal</h1>
        <h1 className="text-5xl font-bold font-sans">
          <span
            className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] 
          to-[#7C3AED] bg-clip-text text-transparent"
          >
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-sm mt-4 max-w-md">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br /> next project.
        </p>
        <div className="flex gap-3 mt-5 py-10">
          <button
            className="w-[165px] h-[40px] bg-gradient-to-r from-[#F97316] 
          via-[#EC4899] to-[#7C3AED] text-white text-xs rounded-md"
          >
            Explore Technologies
          </button>

          <button
            className="w-[168px] h-[40px] border-2 border-gray-200
           text-gray-600 text-xs rounded-md"
          >
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={Logo2} alt="Development Stack" className="w-80" />
      </div>
    </div>
  );
};

export default Banner;
