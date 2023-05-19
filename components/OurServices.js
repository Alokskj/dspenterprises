
import { faBullhorn, faChartLine, faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OurServices = ({data}) => {


  return (
    <div className='services service relative min-h-screen  pt-8 flex flex-col items-center  px-4 md:px-30 lg:px-40 xl:px-60'>
    
     <div className="section-title  text-center text-lg poppins font-semibold text-theme uppercase mb-5">
        <h3>{data.section2StartTitle}</h3>
     </div>
     <div className="section-title-paragraph text-center items-center space-y-3">
        <h1 className='text-3xl md:text-5xl  font-bold '>{data.section2MainTitle}</h1>
        <p className='text-gray-500 text-xs md:test-sm md:w-2/3 m-auto'>{data.section2Paragraph}</p>
     </div>
     <div className="features grid grid-cols-1 md:grid-cols-2 my-8  gap-4 ">
         <div
         
         
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faNetworkWired} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                {data.section2FeatureItem1.title}
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg ">
                <p>
                {data.section2FeatureItem1.paragraph}
                
                </p>
            </div>
         </div>
         <div 
          
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faBullhorn} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                {data.section2FeatureItem2.title}
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                {data.section2FeatureItem2.paragraph}
                </p>
            </div>
         </div>
         <div
          
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faGlobe} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                {data.section2FeatureItem3.title}
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                {data.section2FeatureItem3.paragraph}
                </p>
            </div>
         </div>
         <div
          
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faChartLine} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                Corporate  gifting
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                We offer a wide range of premium and customized gift options that leave a lasting impression and strengthen business relationships.
                </p>
            </div>
         </div>
     </div>
    </div>
  )
}

export default OurServices