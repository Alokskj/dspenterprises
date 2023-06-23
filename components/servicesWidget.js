import {
  faCommentDots,
  faObjectUngroup,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const ServicesWidget = ({ data }) => {
  return (
    <div
      data-aos="fade"
      data-aos-anchor-placement="top"
      data-aos-delay="50"
      data-aos-duration="1000"
      className=" h-full p-4 md:mt-20 w-full flex items-start flex-col md:flex-row"
    >
      <div
        data-aos="fade"
        data-aos-delay="150"
        className="section-title flex md:justify-center text-[#3535de] md:w-2/3 poppins uppercase font-semibold "
      >
        <h3 className="text-gradient">{data?.section1StartTitle}</h3>
      </div>
      <div data-aos="fade" data-aos-delay="150" className="section-content">
        <div className="services-title-paragraph">
          <div className="services-main-title font-bold text-3xl md:text-6xl md:w-3/5 mt-4 mb-4 md:mt-0 capitalize">
            <h2 className="wwd-text">Full-Service Brand Marketing Solution</h2>
          </div>
          <div className="services-paragraph text-gray-500 md:my-8 md:w-4/5">
            <p>{data.section1Paragraph}</p>
          </div>
        </div>
        <div className="keyfeatures grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-20 gap-4 md:gap-10">
          <Link
            href={`/feature/${data.section1FeatureItem1?.page?.slug.current}`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="600"
              className="feature transition-all duration-500  hover:bg-stone-50  hover:shadow-xl p-4 rounded-xl"
            >
              <div className="svg">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  color="var(--primary-color)"
                  size="2xl"
                />
              </div>
              <div className="title text-2xl font-bold my-2">
                <h2>{data.section1FeatureItem1.title}</h2>
              </div>
              <div className="paragraph text-gray-500">
                <p>{data.section1FeatureItem1.paragraph}</p>
              </div>
            </div>
          </Link>
          <Link
            href={`/feature/${data.section1FeatureItem2?.page?.slug.current}`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              className="feature transition-all duration-500 hover:bg-stone-50 hover:shadow-xl p-4 rounded-xl"
            >
              <div className="svg">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="var(--primary-color)"
                  size="2xl"
                />
              </div>
              <div className="title text-2xl font-bold my-2">
                <h2>{data.section1FeatureItem2.title}</h2>
              </div>
              <div className="paragraph text-gray-500">
                <p>{data.section1FeatureItem2.paragraph}</p>
              </div>
            </div>
          </Link>
          <Link
            href={`/feature/${data.section1FeatureItem3?.page?.slug.current}`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="600"
              className="feature transition-all duration-500 hover:bg-stone-50 hover:shadow-xl p-4 rounded-xl"
            >
              <div className="svg">
                <FontAwesomeIcon
                  icon={faObjectUngroup}
                  color="var(--primary-color)"
                  size="2xl"
                />
              </div>
              <div className="title text-2xl font-bold my-2">
                <h2>{data.section1FeatureItem3.title}</h2>
              </div>
              <div className="paragraph text-gray-500">
                <p>{data.section1FeatureItem3.paragraph}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesWidget;
