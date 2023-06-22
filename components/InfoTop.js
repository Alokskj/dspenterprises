import { getHomeInfo } from '@/sanity/sanity-utils'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const InfoTop = async () => {
  const info = await getHomeInfo()
  const data = info[0]
  
  return (
    <>
    <div className='bg-theme  top-10 w-full text-white font-semibold   justify-center items-center flex-col md:flex-row md:justify-end md:gap-10  py-2 text-sm  md:px-30 lg:px-40 xl:px-60'>
        <a href={`tel:${data.contactNumber}`} className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faPhone} />
            <p>{data.contactNumber}</p>
        </a>
        <a href={`mailto:${data.contactEmail}`} className='flex gap-2 items-center'>
        
        <FontAwesomeIcon icon={faEnvelope} />
            <p>{data.contactEmail}</p>
        </a>
    </div>
    </>
  )
}

export default InfoTop