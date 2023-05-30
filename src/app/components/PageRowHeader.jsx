import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function PageRowHeader() {
  return (
    <div className="header bg-gradient-to-r from-white-800 py-lg-8">


              <div className="container ">


                        <div className="flex items-center py-4">


                                <div className="flex items-center w-full lg:w-2/3 ml-[130px]">

                                        <h6 className="text-black text-2xl mb-0">Alternative</h6>
                                        <nav className="hidden md:inline-block ml-4">


                                              <ol className="flex flex-row items-center space-x-4  breadcrumb breadcrumb-links">


                                                    <li className="breadcrumb-item">
                                                      <a href="#" className="from-blue-500">
                                                        <FaHome />
                                                      </a>
                                                    </li>

                                                    <li className="breadcrumb-item">
                                                      <a href="#" className="from-blue-500">Dashboards</a>
                                                    </li>

                                                    <li className="breadcrumb-item text-gray-700">Alternative</li>


                                              </ol>


                                        </nav>

                                </div>

                                <div className="w-72 lg:w-1/3 text-right mr-[-190px]">

                                  <a href="#" className="inline-block border border-gray-300 py-2 px-4 mr-2 bg-white shadow-lg hover:translate-y-0.5 transform transition">New</a>
                                  <a href="#" className="inline-block border border-gray-300 py-2 px-4 bg-white shadow-lg hover:translate-y-0.5 transform transition">Filter</a>

                                </div>

                        </div>
              </div>



    </div>
  );
}
