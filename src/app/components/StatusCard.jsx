import React from 'react'

export default function StatusCard({headerContent, completedTasks, totalTasks, bgColor}) {
  return (
    <div>
      <button>...</button>
      <h4>{headerContent}</h4>
      <p>{completedTasks}/{totalTasks}</p>
      <div></div>
      <a href="#">see details</a>
    </div>
  )
}
