import React from 'react'
import {FaBars  } from 'react-icons/fa';


function SideBar() {
  return (
    <div className="fixed inset-y-0 left-0 lg:flex flex-col z-50 w-20 bg-gray-600 text-black items-center p-8 hidden">
      <div className="mt-6">
        <FaBars className=""/>
      </div> 
      <div className="mt-12">
        <div className="w-2.5 h-2.5 bg-red-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-blue-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-orange-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
      </div>
      <div className="mt-12">
        <div className="w-2.5 h-2.5 bg-yellow-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-purple-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-blue-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-red-800 m-6 p-2"></div>
        <div className="w-2.5 h-2.5 bg-green-800 m-6 p-2"></div>
      </div>
    </div>
  )
}

export default SideBar
