import React from "react";
const Hero = () => {
  return (
    <main className=" hero relative font-poppin min-h-screen">
      <div className="hero-overlay absolute h-full  w-full"></div>
      <div className="hero-content relative z-40 flex flex-col text-center md:text-left py-36 px-4 md:px-30 lg:px-40 xl:px-60 text-white ">
        <div className="hero-welcome-title md:text-xl uppercase">
          <p>welcome to DSP enterprises</p>
        </div>
        <div className="hero-tagline text-4xl md:text-6xl leading-[1.2] font-bold md:w-4/5 xl:w-3/5 mt-10 capitalize">
          <p>Amplify your brand's voice with our strategic marketing.</p>
        </div>
        <div className="hero-paragraph md:w-1/2 mt-8  md:text-md font-semibold">
          <p>
            Welcome to our dsp enterprises! We create powerful campaigns that
            connect your brand with your audience. From print to events, we
            deliver results.
          </p>
        </div>
        <div className="hero-actions-buttons flex flex-col  items-center md:items-start md:flex-row font-semibold space-y-10 md:space-y-0 md:space-x-10 mt-10">
          <div className="get-quote">
            <a
              href="#"
              className="bg-[#3535de] py-3 px-5  transition-colors duration-500 hover:bg-slate-50 hover:text-black rounded-md"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="learn-more">
            <a href="#services-widget" className="text-white hover:text-gray-300 transition-colors duration-300">Learn more</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
