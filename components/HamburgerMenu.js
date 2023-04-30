'use client'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false)
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <>
    <div onClick={()=> setMenu(!menu)} className="hamburger pr-4 md:hidden overflow-hidden">
       <FontAwesomeIcon icon={menu ? faClose : faBars} size='2xl'/>
    </div>
     
     
    <motion.div
    variants={{
      hidden: {opacity: 0},
      visible: {opacity: 1},
      exit : {opacity: 0}
    }}
    initial={false}
    animate={menu ? 'visible' : 'hidden'}
    transition={{delay: 0, duration: 0.5}}

    
    className={`absolute md:hidden top-16 w-full px-4 flex flex-col pt-2 pb-4 transition-all duration-500 ease-in bg-white`}>
    <nav >
            <ul  className='flex flex-col mb-2 text-xl  space-y-3 font-semibold '>
                <motion.li variants={item}><a href="/">Home</a></motion.li>
                <motion.li variants={item}><a href="#our-services">Services</a></motion.li>
                <motion.li variants={item}><a href="/">About</a></motion.li>
                <motion.li variants={item}><a href="/">Blog</a></motion.li>
                <motion.li variants={item}><a href="/">Contact</a></motion.li>
            </ul>
    </nav>
    </motion.div>

   
    </>
  )
}

export default HamburgerMenu