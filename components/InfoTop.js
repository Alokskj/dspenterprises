import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const InfoTop = () => {
  return (
    <div className='bg-theme  top-10 w-full text-white font-semibold flex justify-center items-center flex-col md:flex-row md:justify-end md:gap-10  py-2 text-sm  md:px-30 lg:px-40 xl:px-60'>
        <Link href="tel:+916283327553" className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faPhone} />
            <p>+916283327553</p>
        </Link>
        <Link href="mailto:info@dspenterprises.net" className='flex gap-2 items-center'>
        
        <FontAwesomeIcon icon={faEnvelope} />
            <p>info@dspenterprises.net</p>
        </Link>
    </div>
  )
}

export default InfoTop