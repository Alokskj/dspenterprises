"use client";
import React from "react";


import Image from "next/image";
const page = () => {
  const imageCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:gap-16 px-8 my-10 md:px-30 lg:px-40 xl:px-60">
      {imageCount.map((count) => {
        return (
          <div className="image w-full h-full max-h-80">
            <img
              className="h-full w-full object-cover object-center rounded-lg shadow-md transform duration-300 transition-all hover:scale-110 hover:shadow-lg"
              src={`/assets/images/gallery/${count}.jpeg`}
              // height={100}
              // width={100}
              // quality={100}
            />
          </div>
        );
      })}
    </div>
  );
};

export default page;
