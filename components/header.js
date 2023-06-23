import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex  bg-white relative z-[2] justify-between items-center box-border  w-full py-4 md:px-30 lg:px-40 xl:px-60 md:py-6 ">
        <div className="logo-nav flex pl-4 md:pl-0 space-x-10 items-center">
          <Link href={"/"}>
            <div className="logo bg-white text-4xl font-extrabold cursor-pointer ">
              <h2>DSP</h2>
            </div>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-5 font-semibold capitalize">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/gallery"}>gallery</Link>
              </li>
              <li>
                <Link href={"/aboutus"}>about</Link>
              </li>
            </ul>
          </nav>
        </div>
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
