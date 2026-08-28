import React from 'react'
import StatusCard from './StatusCard'
import StatusBar from './StatusBar';
import { statusCards } from '../data/dashboardData'

// Shared base classes for every status card; the per-item background color
// comes from the data array. The parent grid (grid-cols-1 / md:grid-cols-2 /
// lg:grid-cols-4) sizes each column, so the card fills its cell with w-full
// rather than setting its own percentage width.
const STATUS_CARD_BASE =
  "relative border border-gray-300 px-8 py-2 m-2 mb-4 w-full lg:m-5 h-40 gap-10 rounded-lg";

export default function PageRowContent() {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 md:pl-[17px] md:pr-[17px] lg:grid-cols-4 lg:pl-[68px] lg:pr-[50px] lg:pb-[0px] lg:mb-[0px] text-white">
    {statusCards.map((card, index) => (
      <StatusCard
        key={index}
        classname={[STATUS_CARD_BASE, card.bgColorClass].filter(Boolean).join(" ")}
        headerContent={card.label}
        numCompletedTasks={card.completedTasks}
        numTotalTasks={card.totalTasks}
      />
    ))}
    </div>
  )
}
