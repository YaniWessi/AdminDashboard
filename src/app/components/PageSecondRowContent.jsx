import React from 'react'
import StatusCard from './StatusCard'
import BodyCard from './BodyCard'

export default function PageSecondRowContent() {
  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pl-0 md:pl-5 lg:pl-[78px] lg:pr-[37px] lg:pt-[0px] lg:mt-1">

        <BodyCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700 "} subHeader={"OVERVIEW"}  mainHeader={"Sales values"}/>
        <BodyCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700"} subHeader={"PERFORMANCE"}  mainHeader={"Total orders"}/>
        <BodyCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-blue-700"} subHeader={"5/23 PROJECTS"}  mainHeader={"Progress track"}/>

        <BodyCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-orange-300 lg:col-span-2 "} mainHeader={"Page visits"}/>
        <BodyCard classname={"border border-gray-300  h-[500px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-orange-300"} mainHeader={"Real time"}/>

        <BodyCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} mainHeader={"Team members"}/>
        <BodyCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} mainHeader={"To do list"}/>
        <BodyCard classname={"border border-gray-300  h-[400px] rounded-lg m-2        md:ml-2 md:mr-7 md:mt-9 bg-purple-950"} mainHeader={"Progress track"}/>

    </div>
  )
}
