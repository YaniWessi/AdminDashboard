import React from 'react'
import StatusCard from './StatusCard'

export default function PageFourthRowContent() {
  return (
    <div className="flex flex-col lg:flex-row pl-24 text-white ">
      <StatusCard classname={"border border-gray-300 w-full lg:w-1/3 h-[400px] rounded-lg ml-8 mr-16 mt-9 bg-purple-950"} headerContent={"Sales values"}/>
      <StatusCard classname={"border border-gray-300 w-full lg:w-1/3 h-[400px] rounded-lg ml-8 mr-16 mt-9 bg-purple-950"} headerContent={"Total orders"}/>
      <StatusCard classname={"border border-gray-300 w-full lg:w-1/3 h-[400px] rounded-lg ml-8 mr-16 mt-9 bg-purple-950"} headerContent={"Sales values"}/>
    </div>
  )
}
