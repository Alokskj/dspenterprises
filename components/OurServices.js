import {
  faBullhorn,
  faChartLine,
  faDisplay,
  faGift,
  faGlobe,
  faNetworkWired,
  faPalette,
  faPrint,
  faShop,
  faSignHanging,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const OurServices = ({ data }) => {
  
  return (
    <div
      data-aos="fade"
      className="services service relative min-h-screen  pt-8 flex flex-col items-center  px-4 md:px-30 lg:px-40 xl:px-60"
    >
      <div className="section-title  text-center text-lg poppins font-semibold text-theme uppercase mb-5">
        <h3 className="text-gradient">{data.section2StartTitle}</h3>
      </div>
      <div className="section-title-paragraph text-center items-center space-y-3">
        <h2 className="text-3xl md:text-5xl  font-bold ">
          {data.section2MainTitle}
        </h2>
        <p className="text-gray-500 text-xs md:test-sm md:w-2/3 m-auto">
          {data.section2Paragraph}
        </p>
      </div>
      <div className="features grid grid-cols-1 md:grid-cols-2 my-8  gap-4 ">
      <Link
            href={`/feature/${data.section2FeatureItem1?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faShop}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem1.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg ">
            <p>{data.section2FeatureItem1.paragraph}</p>
          </div>
        </div>
        </Link>
        <Link
            href={`/feature/${data.section2FeatureItem2?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faSignHanging}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem2.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg">
            <p>{data.section2FeatureItem2.paragraph}</p>
          </div>
        </div>
        </Link>
        <Link
            href={`/feature/${data.section2FeatureItem3?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faPrint}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem3.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg">
            <p>{data.section2FeatureItem3.paragraph}</p>
          </div>
        </div>
        </Link>
        <Link
            href={`/feature/${data.section2FeatureItem4?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faGift}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem4.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg">
            <p>
            {data.section2FeatureItem4.paragraph}
            </p>
          </div>
        </div>
        </Link>
        <Link
            href={`/feature/${data.section2FeatureItem5?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faDisplay}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem5.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg">
            <p>
            {data.section2FeatureItem5.paragraph}
            </p>
          </div>
        </div>
        </Link>
        <Link
            href={`/feature/${data.section2FeatureItem6?.page?.slug.current}`}
          >
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl"
        >
          <div className="svg">
            <FontAwesomeIcon
              icon={faPalette}
              size="xl"
              color="var(--primary-color)"
            />
          </div>
          <div className="title text-xl md:text-2xl font-bold capitalize">
            <h2>{data.section2FeatureItem6.title}</h2>
          </div>
          <div className="paragraph text-gray-500 text-sm md:text-lg">
            <p>
            {data.section2FeatureItem6.paragraph}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
