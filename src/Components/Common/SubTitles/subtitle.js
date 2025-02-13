import React from 'react'

function Subtitle({subtitle, classname}) {
  return (
    <div className='mb-[14px]'>
        <span className={`text-lg tracking-[4px] font-bold uppercase ${classname}`}>{subtitle}</span>
    </div>
  )
}

export default Subtitle