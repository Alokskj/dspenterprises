import { getHomeInfo } from '@/sanity/sanity-utils'
import Link from 'next/link'
import React from 'react'

const Footer = async () => {
  const info = await getHomeInfo()
  const data = info[0]
  return (
    <footer className="text-gray-600 body-font bg-gray-50">
  <div className="container px-5 py-10 md:py-28 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href="#"  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <h3 className=" text-3xl poppins font-bold">DSP Enterprises</h3>
      </Link>
      <p className="mt-2 text-sm text-gray-500 capitalize">we make big ideas happen</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-theme tracking-widest text-md mb-3">Services</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/services'}  className="text-gray-600 hover:text-gray-800">Vinyl+one way printing</Link>
          </li>
          <li>
            <Link href={'/services'}  className="text-gray-600 hover:text-gray-800">Led signboard</Link>
          </li>
          <li>
            <Link href={'/services'}  className="text-gray-600 hover:text-gray-800">in shop branding</Link>
          </li>
          <li>
            <Link href={'/services'}  className="text-gray-600 hover:text-gray-800">corporate gifting</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-theme  tracking-widest text-md mb-3">Queries</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/aboutus'}  className="text-gray-600 hover:text-gray-800">About us</Link>
          </li>
          <li>
            <Link href={'/contact'}  className="text-gray-600 hover:text-gray-800">Contact us</Link>
          </li>
          <li>
            <Link href="#"  className="text-gray-600 hover:text-gray-800">privacy policies</Link>
          </li>
          <li>
            <Link href="#"  className="text-gray-600 hover:text-gray-800">terms and condtions </Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
        <h2 className="title-font font-medium text-theme tracking-widest text-md mb-3">Contact Info</h2>
        <p className='w-1/2 m-auto md:m-0'>{data.address}</p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} Dspenterprises —
        <Link href="https://www.instagram.com/dspenterprises_" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@dspenterprises</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="#"  className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="#"  className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link  href="https://www.instagram.com/dspenterprises_" className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href="#"  className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer