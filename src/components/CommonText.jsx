import React from 'react'

const CommonText = ({text,className}) => {
  return (
    <h3 className={`${className} text-liHover text-[39px] font-bold font-dm`}>{text}</h3>
  )
}

export default CommonText