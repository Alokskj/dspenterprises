'use client'
import { urlFor } from '@/sanity/sanity-utils'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


const ImageSlider = ({image}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex) 
    
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === image.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    

  }
  return (
    <>
     <div className="max-w-[1440px] h-[780px] w-full m-auto  relative group" >
        <div
        style={{backgroundImage : `url(${urlFor(image[currentIndex]).url()})`}}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        {image.length > 1 &&
        <>
        <div onClick={()=> prevSlide()} className=" flex justify-center items-center absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-4 bg-white cursor-pointer">
            <FontAwesomeIcon  icon={faArrowLeft}  fontSize={'20'}/>
        </div>
        <div onClick={()=> nextSlide()} className=" flex justify-center items-center absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5  rounded-full p-4 bg-white cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight}  fontSize={'20'}/>
        </div>
        </>
      } 
     </div>
    </>
  )
}

export default ImageSlider