import React from 'react';
import { FaHome } from 'react-icons/fa';


export default function PageRowHeader() {
  return (
  <div class="flex md:flex-row justify-between ">

      <div class="flex justify-center items-center md:justify-start md:w-1/2  p-3 md:px-8 lg:px-28">

          <h6 class="text-black text-2xl mb-0">Alternative</h6>
          <nav class="hidden md:inline-block ml-4">
              <ol class="flex flex-row items-center space-x-4 breadcrumb breadcrumb-links">
                  <li class="breadcrumb-item">
                      <a href="#" class="from-blue-500">
                          <FaHome />
                      </a>
                  </li>
                  <li class="breadcrumb-item">
                      <a href="#" class="from-blue-500">Dashboards</a>
                  </li>
                  <li class="breadcrumb-item text-gray-700">Alternative</li>
              </ol>
          </nav>

      </div>


      <div class="flex justify-center md:justify-end md:w-1/2  p-3 md:px-6 lg:px-20">

          <a href="#" class="border border-gray-300 py-2 px-4 mr-2 bg-white shadow-lg hover:translate-y-0.5 transform transition">New</a>
          <a href="#" class=" border border-gray-300 py-2 px-4 bg-white shadow-lg hover:translate-y-0.5 transform transition">Filter</a>

      </div>

  </div>
   
  );
}
