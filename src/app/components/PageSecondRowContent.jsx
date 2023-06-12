import React from 'react'
import StatusCard from './StatusCard'

export default function PageSecondRowContent() {
  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pl-0 md:pl-5 lg:pl-[78px] lg:pr-[37px] lg:pt-[0px] lg:mt-1">
        <StatusCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700 "} headerContent={"Sales values"}/>
        <StatusCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700"} headerContent={"Total orders"}/>
        <StatusCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700"} headerContent={"Progress track"}/>

        <StatusCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-orange-300 lg:col-span-2 "} headerContent={"Sales values"}/>
        <StatusCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-orange-300"} headerContent={"Total orders"}/>

        <StatusCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} headerContent={"Sales values"}/>
        <StatusCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} headerContent={"Total orders"}/>
        <StatusCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} headerContent={"Sales values"}/>

    </div>
  )
}
