import React from 'react'
import StatusBar from './StatusBar';

export default function StatusCard({headerContent, numCompletedTasks , numTotalTasks, bgColor, classname }) {
  return (
    <div className={classname}>
      <button className="absolute right-4 top-4 text-black z-100 bg-white rounded px-2">...</button>
      <h4 className="my-2">{headerContent}</h4>
      <p className="my-3">{numCompletedTasks}/{numTotalTasks}</p>
      <StatusBar numTotalTasks={numTotalTasks} numCompletedTasks={numCompletedTasks} />
      <a href="#">see details</a>
    </div>
  )
}
