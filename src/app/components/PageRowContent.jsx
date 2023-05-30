import React from 'react'
import StatusCard from './StatusCard'

export default function PageRowContent() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pl-24 text-white">
    <StatusCard classname={"border border-gray-300 w-[400px] h-40 gap-10 rounded-lg bg-purple-800"} headerContent={"task completed"} completedTasks={8} totalTasks={24} />
    <StatusCard classname={"border border-gray-300 w-[400px] h-40 gap-10 rounded-lg  bg-blue-400"} headerContent={"task completed"} completedTasks={8} totalTasks={24} />
    <StatusCard classname={"border border-gray-300 w-[400px] h-40 gap-10 rounded-lg  bg-red-400"} headerContent={"task completed"} completedTasks={8} totalTasks={24} />
    <StatusCard classname={"border border-gray-300 w-[400px] h-40 gap-10 rounded-lg  bg-blue-900"} headerContent={"task completed"} completedTasks={8} totalTasks={24} />      
    </div>
  )
}
