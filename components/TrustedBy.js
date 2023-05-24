import Image from 'next/image'
import React from 'react'

const TrustedBy = () => {
  return (
    <div 
    data-aos='fade'
    className='pb-10 px-4 md:px-30 lg:px-40 xl:px-60'>
        <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
            <h4>trusted by</h4>
        </div>
        <div className="clients-logo-grid md:w-5/6 m-auto my-8 grid grid-cols-2  grid-rows-3  md:grid-cols-3 lg:grid-cols-3 items-center justify-items-center gap-x-10 md:gap-x-20 gap-y-20 md:gap-y-10">
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo ">
                <img src="/assets/images/client-logos/Lenskart.png"  alt="logo" />
            </div>
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo  ">
                <img src="/assets/images/client-logos/mamaearth-logos-idJduluxkG.png"  alt="logo" />
            </div>
            
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo  ">
                <img src="/assets/images/client-logos/idp-logo.png"  alt="logo" />
            </div>
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo  ">
                <img src="/assets/images/client-logos/somany.png"  alt="logo" />
            </div>
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo  ">
                <img src="/assets/images/client-logos/images.png"  alt="logo" />
            </div>
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo  ">
                <img src="/assets/images/client-logos/download.png"  alt="logo" />
            </div>
            
            
            <div
            data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            className="client-logo col-span-2 md:col-span-3  self-start w-1/2 md:w-1/4 m-auto h-10 ">
                <img src="/assets/images/client-logos/madame-logo.jpg" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default TrustedBy