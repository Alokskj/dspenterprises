import React from 'react'
import TestimonialWidget from './utilities/TestimonialWidget'


const Testimonial = () => {
  return (
    <section className="text-gray-600 bg-gray-50 body-font px-4 md:px-30 lg:px-40 xl:px-60">
  <div className="container px-5 pb-24 pt-4  mx-auto">
  <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
        <h4>Testimonial</h4>
      </div>
    <div className="flex flex-wrap -m-4">
      <TestimonialWidget review={"DSP Enterprises excels in offline marketing. From creating eye-catching banners to seamless event handling, their expertise has boosted our brand visibility. Highly recommended for outstanding offline marketing services."} name={'ajay sharma'} role={'client'} image={"https://www.rug.nl/ucg/india/testimonials/sushane-foto.png"}/>
      <TestimonialWidget review={"They leads the market in banner creation, printing, and event handling, boosting our brand's visibility. With meticulous execution, they deliver unparalleled offline marketing success. Highly recommended for all your marketing needs!"} name={'anupam singh'} role={'client'} image={"https://media.istockphoto.com/id/1333001232/photo/portrait-of-indian-man-face-outdoors-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Ne-OChwAEFF5U7yxOwUUqA8ELrJ1WCYho4RkW9v360I="}/>
      
    </div>
  </div>
</section>
  )
}

export default Testimonial