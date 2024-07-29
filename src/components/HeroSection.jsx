const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        ekilie
        <span className="bg-gradient-to-r from-green-500 to-cyan-900 text-transparent bg-clip-text">
          {" "}
          for a Smarter Workplace
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Elevate productivity and streamline your operations with Ekilie. Our unique tool enhances efficiency by precisely tracking worker attendance, ensuring seamless office management. Join Ekilie today to experience unparalleled workplace optimization.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
