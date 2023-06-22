"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <>
      <div
        ref={menuRef}
        onClick={() => setMenu(!menu)}
        className="hamburger pr-4 md:hidden overflow-hidden"
      >
        <FontAwesomeIcon icon={menu ? faClose : faBars} size="2xl" />
      </div>

      <div
       
        className={`absolute md:hidden top-16 w-full  px-4 flex flex-col pt-2 pb-4 transition-all duration-200 ${!menu ?  'left-[-400px]' : 'left-0'} ease-in bg-white`}
      >
        <nav>
          <ul
           className="flex flex-col mb-2 text-xl  space-y-3 font-semibold ">
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/services"}>Services</a>
            </li>
            <li>
              <a href={"/aboutus"}>About</a>
            </li>
            <li>
              <a href={"/gallery"}>Gallery</a>
            </li>
            <li>
              <a href={"/contact"}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
