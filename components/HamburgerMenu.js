'use client'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
    <div onClick={()=> setMenu(!menu)} className="hamburger pr-4 md:hidden overflow-hidden">
       <FontAwesomeIcon icon={menu ? faClose : faBars} size='2xl'/>
    </div>
     
    {menu && 
    <div className={`absolute top-16 w-full px-4 flex flex-col pt-2 pb-4 transition-all duration-500 ease-in bg-white`}>
    <nav >
            <ul className='flex flex-col mb-2 text-xl  space-y-3 font-semibold '>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
    </nav>
    </div>
}
   
    </>
  )
}

export default HamburgerMenu