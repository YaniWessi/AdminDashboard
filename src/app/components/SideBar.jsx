import React from 'react'
import {FaBars, FaArchive, FaShoppingCart} from 'react-icons/fa';
import { TbHome2 } from 'react-icons/tb'; 


function SideBar() {
  return (
    <div className="fixed group inset-y-0 left-0 lg:flex flex-col z-50 w-16 bg-gray-600 text-black items-center p-8 hidden hover:w-64">
      <div className="mt-6">
        <FaBars className=""/>
      </div> 
      <ul className="mt-12 hover-trigger">
        <li className="flex items-center w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-10px] duration-300"><a className="flex items-center"><TbHome2 /><span className="ml-8 invisible group-hover:visible">Dashboards</span></a></li>
        <li className="flex items-center w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-10px] duration-300"><a className="flex items-center"><FaArchive /><span className="ml-8 invisible group-hover:visible">Orders</span></a></li>
        <li className="flex items-center w-2.5 h-2.5  m-6 p-2 ml-[2px] hover:ml-[-10px] duration-300"><a className="flex items-center"><FaShoppingCart /><span className="ml-8 invisible group-hover:visible">Inventory</span></a></li>
      </ul>
      
    </div>
  )
}

export default SideBar
