'use client'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef()
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100,  },
  }
  useEffect(()=>{
    const handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setMenu(false)
      }
    }

    document.addEventListener('click', handler)
    return() =>{
      document.removeEventListener('click', handler)
    }
  },[])
  return (
    <>
    <div ref={menuRef} onClick={()=> setMenu(!menu)} className="hamburger pr-4 md:hidden overflow-hidden">
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
                <motion.li variants={item} transition={{duration: 0.5}}><Link href={'/'}>Home</Link></motion.li>
                <motion.li variants={item} transition={{duration: 0.5}} ><Link href={"/services"}>Services</Link></motion.li>
                <motion.li variants={item} transition={{duration: 0.5}} ><Link href={"/aboutus"}>About</Link></motion.li>
                <motion.li variants={item} transition={{duration: 0.5}} ><Link href={"/gallery"}>Gallery</Link></motion.li>
                <motion.li variants={item} transition={{duration: 0.5}} ><Link href={"/contact"}>Contact</Link></motion.li>
            </ul>
    </nav>
    </motion.div>

   
    </>
  )
}

export default HamburgerMenu