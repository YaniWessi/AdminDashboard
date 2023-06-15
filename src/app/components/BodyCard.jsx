import React from 'react'

export default function BodyCard({subHeader, mainHeader, classname }) {
  return (
    <div className={classname}>
      <p>{subHeader}</p>
      <h4>{mainHeader}</h4>
    </div>
  )
}
