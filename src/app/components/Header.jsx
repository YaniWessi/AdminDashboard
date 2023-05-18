'use client';
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import { FaPlusSquare, FaTimes, FaRegBell, FaRegClone } from 'react-icons/fa';

function Header() {

  const [isSearchVisible, setSearchVisible] = useState(false)

  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-100  p-8">
    
      <div className="flex items-center justify-between">


        
        <div className="flex items-center">



        <div className="relative mr-4">

                  <input
                      type="text"
                      placeholder="Search"
                      className="bg-gray-700 hidden md:block rounded-full p-2 text-sm text-gray-300 focus:outline-none focus:bg-gray-600 w-full"
                      />

                  {isSearchVisible? (
                    <div className="relative">
                      <input
                      
                      type="text"
                      placeholder="Search"
                      className="bg-gray-700 md:hidden rounded-full p-2 text-sm text-gray-300 focus:outline-none focus:bg-gray-600 w-full"
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

         



        </div>





      </div>








    </header>
  )
}

export default Header
