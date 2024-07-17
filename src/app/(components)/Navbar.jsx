'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { FaShield } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return ( 
    <div className='w-full h-16 py-8 px-12 bg-slate-50 flex items-center justify-between z-10 fixed poppins'>
      <h1 className='poppins text-green-700 text-2xl flex flex-col items-center'><FaShield/><p className='font-bold text-xl'>CDN</p></h1>
      <div className="nav-links">
        <ul className=' inline-flex space-x-10'>
          <li><Link href='/' className='hover:text-green-300 transition-all duration-150 ease-in'>Home</Link></li>
          <div className="relative inline-block text-left ">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full  hover:text-green-300 "
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Services
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                   href="/servicepage/service1"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  CyberDefense Model
                </a>
                <a
                   href="/servicepage/service2"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  CyberDefense reach
                </a>
                <a
                  href="/servicepage/service3"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                   CyberDefense seek
                </a>
                <a
                  href="/servicepage/service4"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                 CyberDefense Assist
                </a>
              </div>
            </div>
          )}
        </div>

          <li><Link href='/about' className='hover:text-green-300 transition-all duration-150 ease-in'>About</Link></li>
          <li><Link href='/contact' className='hover:text-green-300 transition-all duration-150 ease-in'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar