
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center absolute w-full text-white  z-50 p-4 md:px-30 lg:px-40 xl:px-60 md:py-6 '>
       <div className="logo-nav flex space-x-10 items-center">
        <div className="logo text-4xl font-extrabold ">
            <p>DSP</p>
        </div>
        <nav className='hidden md:flex'>
            <ul className='flex space-x-5 font-semibold'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
       </div>
       <div className="contact  font-semibold cursor-pointer">
       <a href="/" className='bg-[#3535de] py-3 px-5 transition-colors duration-500 hover:bg-slate-50 hover:text-black rounded-md'>Get a Free Quote</a>

       </div>
       <div className="hamburger md:hidden">
       <FontAwesomeIcon icon={faBars} style={{ fontSize: 30,}}/>
        </div>
    </header>
    </>
  )
}

export default Header