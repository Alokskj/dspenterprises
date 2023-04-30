
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <>
    <header className='flex  bg-white relative z-[2] justify-between items-center box-border  w-full py-4 md:px-30 lg:px-40 xl:px-60 md:py-6 '>
       <div className="logo-nav flex pl-4 md:pl-0 space-x-10 items-center">
        <div className="logo bg-white text-4xl font-extrabold ">
            <p>DSP</p>
        </div>
        <nav className='hidden md:flex'>
            <ul className='flex space-x-5 font-semibold'>
                <li><a href="/">Home</a></li>
                <li><a href="#our-services">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
       </div>
       <div className="contact hidden md:flex pr-4  font-semibold cursor-pointer">
       <a href="/" className='bg-[#3535de] text-white py-3 px-5 transition-colors duration-500 hover:bg-black hover:text-white rounded-md'>Get a Free Quote</a>

       </div>
       <HamburgerMenu />
    </header>
    </>
  )
}

export default Header