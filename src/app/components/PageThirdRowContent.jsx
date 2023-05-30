import React from 'react'
import StatusCard from './StatusCard'

export default function PageThirdRowContent() {
  return (
    <div className="flex flex-col lg:flex-row pl-24 text-white ">
      <StatusCard classname={"border border-gray-300 w-full lg:w-2/3 h-[500px] rounded-lg ml-8 mr-16 mt-9 bg-orange-300 "} headerContent={"Sales values"}/>
      <StatusCard classname={"border border-gray-300 w-full lg:w-1/3 h-[500px] rounded-lg ml-8 mr-16 mt-9 bg-orange-300"} headerContent={"Total orders"}/>
    </div>
  )
}
