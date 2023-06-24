import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faAngleDown, faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { getFeaturePages } from "@/sanity/sanity-utils";

const Header = async () => {
  const data = await getFeaturePages()
  const moreSubLinks = [
    {name : 'About us' , to : '/aboutus'},
    {name : 'reviews' , to : '/reviews'},
    {name : 'add review' , to : '/reviews/add-review'},
  ]
  return (
    <>
      <header className="flex  bg-white relative z-[2] justify-between items-center box-border  w-full py-4 md:px-12 md:py-6 ">
        <div className="logo-nav flex pl-4 md:pl-0 space-x-10 items-center">
          <Link href={"/"}>
            <div className="logo flex gap-2 items-center bg-white text-3xl poppins font-extrabold cursor-pointer ">
              <img src="/assets/images/dsppng.png" alt="dsp enterprises logo" className="h-10"/>
              <h2 className="font-extrabold">DSP</h2>
            </div>
          </Link>
         
        </div>
        <nav className="hidden md:flex">
            <ul className="flex items-center  font-semibold text-lg text-gray-800 capitalize transition-all ">
              <li className="hover:bg-[#aba8a851] hover:text-gray-800 px-6 py-2 rounded-full duration-500 cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:bg-[#aba8a851]  transition-all duration-500 relative group hover:text-black px-6 py-2 rounded-full  cursor-pointer">
                
                <Link cla href={"/services"}>
                <div className="parent items-center flex gap-2">
                  <p>Services </p>
                  <div className="icon group-hover:hidden">
                  <FontAwesomeIcon icon={faAngleDown} fontSize={15}/>
                  </div>
                  <div className="icon hidden group-hover:block">
                  <FontAwesomeIcon icon={faAngleUp} fontSize={15}/>
                  </div>
                </div>
                </Link>
              <div className="sublink-container hidden absolute  group-hover:block top-10 ">
                <ul className="flex  flex-col space-y-3 font-semibold text-lg bg-gray-200 min-w-60 min-h-40  rounded-2xl p-8 translate-y-10 hover:flex shadow-xl">
                  {data.map((item)=>{
                    return(
                    <Link href={`/feature/${item.slug.current}`} key={item.slug.current}><li><p className="hover:scale-110 hover:text-black duration-100">{item.title}</p></li></Link>
                    )
                  })}
                </ul>
                </div>
              </li>
              <li className="hover:bg-[#aba8a851] hover:text-gray-800 px-6 py-2 rounded-full duration-500 cursor-pointer">
                <Link href={"/gallery"}>gallery</Link>
              </li>
              <li className="hover:bg-[#aba8a851] group hover:text-gray-800 px-6 py-2 rounded-full duration-500 cursor-pointer">
              
                <div className="parent items-center flex gap-2">
                  <p>more</p>
                  <div className="icon group-hover:hidden">
                  <FontAwesomeIcon icon={faAngleDown} fontSize={15}/>
                  </div>
                  <div className="icon hidden group-hover:block">
                  <FontAwesomeIcon icon={faAngleUp} fontSize={15}/>
                  </div>
                </div>
                <div className="sublink-container hidden absolute  group-hover:block top-10 ">
                <ul className="flex  flex-col space-y-3 font-semibold text-lg bg-gray-200 min-w-60 min-h-40  rounded-2xl p-8 translate-y-10 hover:flex shadow-xl">
                  {moreSubLinks.map((item)=>{
                    return(
                    <Link href={item.to} key={item.to}><li><p className="hover:scale-110 hover:text-black duration-100">{item.name}</p></li></Link>
                    )
                  })}
                </ul>
                </div>
                
              </li>
            </ul>
          </nav>
        <div className="contact hidden md:flex pr-4  font-semibold cursor-pointer">
          <Link
            href={"/contact"}
            className="hero-btn py-[14px] px-5 text-white shadow-sm shadow-theme transition-colors duration-500 hover:shadow-black hover:bg-black hover:text-white rounded-full"
          >
            Get a Free Quote
          </Link>
        </div>
        <HamburgerMenu />
      </header>
    </>
  );
};

export default Header;
