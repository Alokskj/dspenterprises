import React from 'react'
import TestimonialWidget from './utilities/TestimonialWidget'
import { urlFor } from '@/sanity/sanity-utils'


const Testimonial = ({data}) => {
  return (
    <section className="text-gray-600 bg-gray-50 body-font px-4 md:px-30 lg:px-40 xl:px-60">
  <div className="container px-5 pb-24 pt-4  mx-auto">
  <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
        <h4>Testimonial</h4>
      </div>
    <div className="flex flex-wrap -m-4">
      <TestimonialWidget review={data.testimonial[0].paragraph} name={data.testimonial[0].name} role={data.testimonial[0].role} image={urlFor(data.testimonial[0].image).url()}/>
      <TestimonialWidget review={data.testimonial[1].paragraph} name={data.testimonial[1].name} role={data.testimonial[1].role} image={urlFor(data.testimonial[1].image).url()}/>
      
    </div>
  </div>
</section>
  )
}

export default Testimonial