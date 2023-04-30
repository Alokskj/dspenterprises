"use client";
import {
  faCommentDots,
  faObjectUngroup,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ServicesWidget = () => {
  const animationTranstiton = {duration : 0.2, type: 'tween'}
  const animationVariants = {
    hidden: { opacity : 0 ,y : 100 },
    visible: { opacity : 1 ,y : 0 },
  };
  return (
    <div className=" h-full p-4 md:mt-20 w-full flex items-start flex-col md:flex-row">
      <div className="section-title flex md:justify-center text-[#3535de] md:w-2/3 poppins uppercase font-semibold ">
        <p>what we do</p>
      </div>
      <div className="section-content">
        <div className="services-title-paragraph">
          <div className="services-main-title font-bold text-3xl md:text-6xl md:w-3/5 mt-4 mb-4 md:mt-0 capitalize">
            <p>full-service internet marketing solutions</p>
          </div>
          <div className="services-paragraph text-gray-500 md:my-8 md:w-4/5">
            <p>
              We offer a wide range of marketing services to help businesses
              succeed in today's competitive environment.
              <span className="hidden md:inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis atque deserunt voluptates quod incidunt exercitationem ratione ut totam consectetur.</span>
            </p>
          </div>
        </div>
        <div  className="keyfeatures grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-20 gap-4 md:gap-10">
          <motion.div
            variants={animationVariants}
            initial='hidden'
            whileInView='visible'
            transition={animationTranstiton}
            
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
              <p>Consulting</p>
            </div>
            <div className="paragraph text-gray-500">
              <p>Pretium accumsan in ipsum convallis pellentesque metus</p>
            </div>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial='hidden'
            whileInView='visible'
            transition={animationTranstiton}
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
              <p>Marketing</p>
            </div>
            <div className="paragraph text-gray-500">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, at?
              </p>
            </div>
          </motion.div>
          <motion.div
             variants={animationVariants}
             initial='hidden'
             whileInView='visible'
             transition={animationTranstiton}
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
              <p>Design</p>
            </div>
            <div className="paragraph text-gray-500">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWidget;
