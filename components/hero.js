"use server";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ data }) => {
  
  return (
    <main
      data-aos="fade"
      className=" hero flex min-w-screen font-poppin "
    >
      <div className="hero-content  flex flex-col text-center md:text-left py-12 md:py-20 px-4 md:px-30 lg:px-40 xl:px-60 ">
        <div className="hero-welcome-title md:text-xl capitalize font-semibold poppins">
          <h3>{data.heroStartTitle}</h3>
        </div>
        <div className="hero-tagline  text-[2.55rem]  md:text-6xl lg:text-7xl leading-[1.3] font-black md:w-4/5 xl:w-3/5 mt-10 capitalize">
          <h1>Your Trusted Offline <span className="text-gradient">Marketing</span> & <span className="text-gradient">Advertising</span> Partner.</h1>
        </div>
        <div className="hero-paragraph md:w-1/2 mt-8  md:text-md font-semibold">
          <h5>{data.heroParagraph}</h5>
        </div>
        <div className="hero-actions-buttons flex flex-col   items-center md:items-start md:flex-row font-semibold space-y-10 md:space-y-0 md:space-x-5 mt-12">
          <div className="get-quote">
            <Link
              href={"/contact"}
              className="hero-btn py-[16px] px-6 text-white shadow-sm shadow-theme transition-colors duration-500 hover:shadow-black hover:bg-black hover:text-white rounded-full"
            >
              Get a Free Quote
            </Link>
          </div>
          {/* <div className="learn-more">
            <Link
              href="#services-widget"
              className="border-2 border-theme py-3 hover:bg-black hover:border-black hover:text-white px-4 text-theme rounded-xl transition-colors duration-300"
            >
              Learn more
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hero-lottie absolute hidden xl:block top-28 right-24">
        <Image
          src="/assets/svgs/Marketing-consulting-cuate.svg"
          width={600}
          height={600}
          alt="hero-svg"
        />
      </div>
    </main>
  );
};

export default Hero;
