import React from 'react'
import StatusCard from './StatusCard'
import StatusBar from './StatusBar';

export default function PageRowContent() {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 md:pl-[17px] md:pr-[17px] lg:grid-cols-4 lg:pl-[68px] lg:pr-[50px] lg:pb-[0px] lg:mb-[0px] text-white">
    <StatusCard classname={"relative border border-gray-300 px-8 py-2 m-2 mb-4  w-{97%} lg:w-{25%} lg:m-5 h-40 gap-10 rounded-lg bg-purple-800"} headerContent={"task completed"} numCompletedTasks={15} numTotalTasks={24} />
    <StatusCard classname={"relative border border-gray-300 px-8 py-2 m-2 mb-4 w-{97%} lg:w-{25%} lg:m-5 h-40 gap-10 rounded-lg  bg-blue-400"} headerContent={"task completed"} numCompletedTasks={5} numTotalTasks={24} />
    <StatusCard classname={"relative border border-gray-300 px-8 py-2 m-2 mb-4 w-{97%} lg:w-{25%} lg:m-5 h-40 gap-10 rounded-lg  bg-red-400"} headerContent={"task completed"} numCompletedTasks={20} numTotalTasks={24} />
    <StatusCard classname={"relative border border-gray-300 px-8 py-2 m-2 mb-4 w-{97%} lg:w-{25%} lg:m-5 h-40 gap-10 rounded-lg  bg-blue-900"} headerContent={"task completed"} numCompletedTasks={5} numTotalTasks={24} />      
    </div>
  )
}
