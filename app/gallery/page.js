import { getImages, urlFor,  } from "@/sanity/sanity-utils";
import React from "react";
const page = async () => {
  const data = await getImages();
 console.log(data, 'hello')

  return (
    <div className=" px-8 my-10 md:px-30 lg:px-40 xl:px-60">
      {data.map((item) => {
        return (
          <div className="image-section">
            <div className="font-bold text-2xl my-8">
        <h4 className="theme-line flex flex-col uppercase">{item.sectionTitle}</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:gap-16">
            {item.images.map((image) => {
              console.log(image)
              return (
                <div className=" image w-full h-full max-h-80">
                  <img
                    className="h-full w-full object-cover object-center rounded-lg shadow-md transform duration-300 transition-all hover:scale-110 hover:shadow-lg"
                    src={urlFor(image).url()}
                  />
                </div>
              );
            })}
        </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
