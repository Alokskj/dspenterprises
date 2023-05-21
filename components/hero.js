"use server";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ data }) => {
  return (
    <main
      data-aos="fade"
      className=" hero flex min-w-screen font-poppin min-h-screen"
    >
      <div className="hero-content  flex flex-col text-center md:text-left py-16 md:py-24 px-4 md:px-30 lg:px-40 xl:px-60 ">
        <div className="hero-welcome-title md:text-xl capitalize font-semibold poppins">
          <p>{data.heroStartTitle}</p>
        </div>
        <div className="hero-tagline  text-[2.8rem] md:text-6xl leading-[1.1] font-bold md:w-4/5 xl:w-3/5 mt-10 capitalize">
          <p>{data.heroMainTitle}</p>
        </div>
        <div className="hero-paragraph md:w-1/2 mt-8  md:text-md font-semibold">
          <p>{data.heroParagraph}</p>
        </div>
        <div className="hero-actions-buttons flex flex-col  items-center md:items-start md:flex-row font-semibold space-y-10 md:space-y-0 md:space-x-5 mt-10">
          <div className="get-quote">
            <Link
              href={"/contact"}
              className="bg-[#3535de] py-3 px-5 text-white shadow-sm shadow-theme transition-colors duration-500 hover:shadow-black hover:bg-black hover:text-white rounded-md"
            >
              Get a Free Quote
            </Link>
          </div>
          <div className="learn-more">
            <a
              href="#services-widget"
              className="border-2 border-theme py-3 hover:bg-black hover:border-black hover:text-white px-4 text-theme rounded-xl transition-colors duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="hero-lottie absolute hidden xl:block top-28 right-24">
        <Image
          src="/assets/svgs/Marketing-consulting-cuate.svg"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
};

export default Hero;
