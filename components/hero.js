"use server";

import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ data }) => {
  
  return (
    <main
      data-aos="fade"
      className=" hero relative flex min-w-screen font-poppin min-h-[80vh] flex-col justify-center"
    >
      <div className="hero-content  flex flex-col text-center  justify-around md:text-center lg:text-left py-12 md:py-20 px-4 md:px-12 ">
        <div className="info-container">

        <div className="hero-welcome-title md:text-xl capitalize font-semibold poppins">
          <h3>{data.heroStartTitle}</h3>
        </div>
        <div className="hero-tagline  text-[2.55rem]  md:text-7xl lg:text-8xl xl:text-[4.6rem] leading-[1.3] font-black md:w-full xl:w-1/2 mt-10 capitalize">
          <h1>Your Trusted Offline <span className="text-gradient">Marketing</span> & <span className="text-gradient">Advertising</span> Partner.</h1>
        </div>
        <div className="hero-paragraph lg:w-1/2 mt-8  md:text-md font-semibold">
          <h5>{data.heroParagraph}</h5>
        </div>
        </div>

        <div className="hero-actions-buttons flex justify-center lg:justify-start  items-center  lg:items-start md:flex-row font-semibold space-y-10 md:space-y-0 md:space-x-5 mt-12">
          <div className="get-quote">
            <Link
              href={"/contact"}
              className="hero-btn py-[16px] px-6 text-white shadow-sm shadow-theme transition-colors duration-500 hover:shadow-black hover:bg-black hover:text-white rounded-full"
            >
              Get a Free Quote
            </Link>
          </div>
          
        </div>
        <div className="scroll-down md:hidden box-border  absolute bottom-0 w-[90vw]  m-auto flex justify-center">
          <a href={'#services-widget'}><FontAwesomeIcon icon={faAngleDown} fontSize={20} /></a>
        </div>
      </div>
      
      <div className="hero-lottie absolute hidden xl:block -translate-y-14 top-28 right-24">
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
