import React from 'react'
import TestimonialWidget from './utilities/TestimonialWidget'
import { urlFor } from '@/sanity/sanity-utils'
import Link from 'next/link'


const Testimonial = ({data}) => {
 
  return (
    <section
    
    className="text-gray-600 bg-gray-50 body-font px-4 md:px-30 lg:px-40 xl:px-60">
  <div
  data-aos='fade'
  className="container px-5 pb-12 pt-4  mx-auto">
  <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
        <h3>Testimonial</h3>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full ">
      {data.testimonial.map((item) => {
        return (
      <div data-aos="fade" data-aos-delay="150" data-aos-duration="600"> 
      <TestimonialWidget review={item.message} name={item.userName} role={item.rating} image={urlFor(item.userImage).url()}/>
      </div>
        )
      })}
      
    </div>
    <div className="view-more flex justify-center items-center mt-8 text-theme capitalize font-semibold transition-all outline-none duration-300  focus:text-gray-400 hover:text-gray-400">
      <a href='/reviews'><p>view more</p></a>
    </div>
  </div>
</section>
  )
}

export default Testimonial