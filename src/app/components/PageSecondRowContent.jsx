import React from 'react'
import StatusCard from './StatusCard'
import BodyCard from './BodyCard'
import { bodyCards } from '../data/dashboardData'

// Shared base classes for every body card; height, background color and the
// optional column span come from the data array.
const BODY_CARD_BASE = "border border-gray-300 rounded-lg m-2 md:ml-2 md:mr-7 md:mt-9";

export default function PageSecondRowContent() {
  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pl-0 md:pl-5 lg:pl-[78px] lg:pr-[37px] lg:pt-[0px] lg:mt-1">

        {bodyCards.map((card, index) => (
          <BodyCard
            key={index}
            classname={[BODY_CARD_BASE, card.heightClass, card.bgColorClass, card.colSpanClass].filter(Boolean).join(" ")}
            subHeader={card.subHeader}
            mainHeader={card.mainHeader}
          />
        ))}

    </div>
  )
}
