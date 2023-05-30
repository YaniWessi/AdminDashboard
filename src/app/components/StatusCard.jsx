import React from 'react'

export default function StatusCard({headerContent, completedTasks, totalTasks, bgColor, classname }) {
  return (
    <div className={classname}>
      <button>...</button>
      <h4>{headerContent}</h4>
      <p>{completedTasks}/{totalTasks}</p>
      <div></div>
      <a href="#">see details</a>
    </div>
  )
}
