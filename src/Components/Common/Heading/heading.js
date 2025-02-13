import React from 'react'

function Heading({classname, heading}) {
  return (
    <div>
      <h2 className={`leading-[1.2] font-bold capitalize lg:text-[48px] md:text-[44px] sm:text-[36px] text-3xl ${classname}`}>{heading}</h2>
    </div>
  )
}

export default Heading