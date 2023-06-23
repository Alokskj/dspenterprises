import ImageSlider from "@/components/utilities/ImageSlider";
import { getFeaturePage, urlFor } from "@/sanity/sanity-utils";
import React from "react";

export async function generateMetadata({ params, searchParams }) {
  const product = await getFeaturePage(params.slug);
  return { title: product[0].title };
}

const FeaturePage = async ({ params }) => {
  const { slug } = params;
  const info = await getFeaturePage(slug);

  const data = info[0];

  return (
    <div className="min-h-screen justify-between flex mb-8 px-4 md:px-30 lg:px-40 xl:px-60">
        
      <div className="flex flex-col w-full md:w-3/5">
        <div className="font-bold text-2xl my-8">
          <h4 className="theme-line flex flex-col gap-2">{data?.title}</h4>
        </div>
        <div className="paragraphs md:pr-8 flex flex-col gap-10">
          <div className="paragraph-1 ">
            <p>{data?.paragraph1}</p>
          </div>
          <div className="images md:hidden">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:gap-16">
              {data?.images.map((image) => {
                return (
                  <div className=" image w-full h-full max-h-96">
                    <img
                      className="h-full w-full object-cover object-center rounded-lg shadow-md transform duration-300 transition-all hover:scale-110 hover:shadow-lg"
                      src={urlFor(image).url()}
                      alt="feature image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {data.paragraph2 && 
            <div className="paragraph-2">
              <p>{data.paragraph2}</p>
            </div>
            }
            {data.paragraph3 && 
            <div className="paragraph-3">
              <p>{data.paragraph3}</p>
            </div>
      }
        </div>
      </div>
      <div className="feaute hidden md:flex w-2/5 image mt-20  flex-col h-full">
       <ImageSlider image={data.images}/>
      </div>
    </div>
  );
};

export default FeaturePage;
