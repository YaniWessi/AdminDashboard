import React from 'react'

export default function StatusBar({ numTotalTasks, numCompletedTasks }) {
  
  const percentageCoefficient = 100;
  const barWidth = `${ numCompletedTasks / numTotalTasks * percentageCoefficient }%` 
  return (
    <div className="bg-white h-1">
      <div className="bg-green-600 h-1 " style={{width:barWidth}}>

      </div>
    </div>
  )
}
