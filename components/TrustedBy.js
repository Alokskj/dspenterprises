import Image from 'next/image'
import React from 'react'

const TrustedBy = () => {
  return (
    <div className='pb-10 px-4 md:px-30 lg:px-40 xl:px-60'>
        <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
            <h4>trusted by</h4>
        </div>
        <div className="clients-logo-grid md:w-5/6 m-auto my-8 grid grid-cols-2 grid-rows-3  md:grid-cols-3 lg:grid-cols-3 items-center justify-items-center gap-x-10 md:gap-x-20 gap-y-20 md:gap-y-10">
            <div className="client-logo ">
                <img src="/assets/images/client-logos/Lenskart_2022.png"  alt="logo" />
            </div>
            <div className="client-logo grayscale ">
                <img src="/assets/images/client-logos/mamaearth-logos-idJduluxkG.png"  alt="logo" />
            </div>
            <div className="client-logo grayscale ">
                <img src="/assets/images/client-logos/colston.jpg"  alt="logo" />
            </div>
            <div className="client-logo grayscale ">
                <img src="/assets/images/client-logos/idp-logo.png"  alt="logo" />
            </div>
            <div className="client-logo grayscale ">
                <img src="/assets/images/client-logos/download.png"  alt="logo" />
            </div>
            <div className="client-logo grayscale ">
                <img src="/assets/images/client-logos/KJ-LOGO.png"  alt="logo" />
            </div>
            
            <div className="client-logo col-span-2 md:col-span-3 self-start w-1/2 md:w-1/4 m-auto h-10 grayscale">
                <img src="/assets/images/client-logos/madame-logo.jpg" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default TrustedBy