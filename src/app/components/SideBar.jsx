"use client"
import React,{ useState } from 'react'
import {FaBars, FaArchive, FaShoppingCart} from 'react-icons/fa';
import { TbHome2 } from 'react-icons/tb'; 


function SideBar() {

  const [ isExpanded, setIsExpanded ] = useState(false) 

  const expand = () => setIsExpanded(true)

  const hide = () => setIsExpanded(false)

  return (
    <div onMouseEnter={expand} onMouseLeave={hide} className="fixed group inset-y-0 lg:flex flex-col z-50 w-16 bg-gray-600 text-black items-center p-6 hidden hover:w-64 hover:items-start">
      <FaBars/> 
      <ul className="mt-12 hover-trigger">
        <li className={`flex items-center ${isExpanded ? "-ml-2": ""} w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-16px] duration-300`}><a className="flex items-center"><TbHome2 /><span className="ml-8 invisible group-hover:visible">Dashboards</span></a></li>
        <li className={`flex items-center ${isExpanded ? "-ml-2": ""} w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-16px] duration-300`}><a className="flex items-center"><FaArchive /><span className="ml-8 invisible group-hover:visible">Orders</span></a></li>
        <li className={`flex items-center ${isExpanded ? "-ml-2": ""} w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-16px] duration-300`}><a className="flex items-center"><FaShoppingCart /><span className="ml-8 invisible group-hover:visible">Inventory</span></a></li>
      </ul>
    </div>
  )
}

export default SideBar
