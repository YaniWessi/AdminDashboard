'use client';
import React, { useState, useEffect } from 'react'
import { MdSearch } from 'react-icons/md';
import { FaPlusSquare, FaTimes, FaRegBell, FaRegClone, FaBars  } from 'react-icons/fa';
import profileImage from "../../../public/Yannick.png";
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';

function Header() {

  const [isSearchVisible, setSearchVisible] = useState(false)

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  
  const handleResize = () => {
    if (window.innerWidth <= 1200) {

      setIsMobile(true);

    } else {

      setIsMobile(false);

    }
  };

  useEffect(() => {
    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);



  return (
    <header className="bg-gray-100  p-8">
    
      <div className="flex items-center justify-between">
        {isMobile && (
          <div className="flex flex-col items-center pr-4">
           <FaBars className="mb-4"/>

          </div>
        )}

        
        <div className="flex items-center w-full">



              <div className="relative mr-4 w-full">

                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-700 hidden md:block rounded-full p-2 text-sm text-gray-300 focus:outline-none focus:bg-gray-600"
                            />

                        {isSearchVisible? (
                          <div className="relative w-full md:hidden">
                            <input
                            
                            type="text"
                            placeholder="Search"
                            className="bg-gray-700 rounded-full p-2 text-sm text-gray-300 focus:outline-none focus:bg-gray-600 w-full "
                            />
                            <FaTimes
                              className="absolute top-0 md:hidden right-0 mt-2 mr-2 text-gray-400 cursor-pointer"
                              onClick={toggleSearch}
                            />
                          </div>

                        ) : (
                          <button
                          className="block focus:outline-none text-white text-xl"
                          onClick={toggleSearch}
                          >
                        {/* <MdSearch className="hidden md:block" onClick={toggleSearch} /> */}
                        <FaPlusSquare className="md:hidden" onClick={toggleSearch} />
                          </button>

                        ) }
              </div>

             {isSearchVisible? (
              <div className="flex flex-row">
                <FaRegBell className="hidden mr-8 text-xl" />
                <FaRegClone className="hidden mr-8 text-xl" />
              </div>
              ) : (
                <div className="flex flex-row">
                <FaRegBell className="mr-8 text-xl" />
                <FaRegClone className="mr-8 text-xl" />
              </div>
              )}  

        </div>



        <div className="flex items-center">         
                        
                        
          <div className="relative inline-block">
            <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
                <Image
                  src={profileImage}
                  alt="Profile "
                  className="w-10 h-10 rounded-full mr-1"
                />
                <p className="ml-2">John</p>
                <p className="ml-2">Doe</p>
                <IoMdArrowDropdown className="ml-2" />
            </button>

            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Setting</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                </div>
              </div>
            )}        
          </div>

        </div>



      </div> 
    </header>
  )
}

export default Header
