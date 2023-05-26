import TestimonialWidget from "@/components/utilities/TestimonialWidget";
import AddReviewButton from "@/components/utilities/buttons/AddReviewButton";
import { getHomeInfo, getReviews, urlFor } from "@/sanity/sanity-utils";
import React from "react";
export const metadata = {
  title: "Reviews",
};
const Review = async () => {
  const data = await getReviews()
  
  return (
    <div className=" relative justify-between flex flex-col gap-3 lg:gap-5 mb-8 px-4 md:px-30 lg:px-40 xl:px-60">
      <div className="add review-button">
        <AddReviewButton />
      </div>
      <div className="font-bold text-2xl my-8">
        <h4 className="theme-line flex flex-col gap-2">Reviews</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full ">
      {data.map((item) => {
        return(
        <TestimonialWidget review={item.message} rating={item.rating} name={item.userName} role={'client'} image={urlFor(item.userImage).url()}/>
        )
      }) }
      
    </div>
    </div>
  );
};

export default Review;
