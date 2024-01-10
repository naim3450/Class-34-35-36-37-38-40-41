import React from 'react'

const Badge = ({className,text}) => {
  return (
    <div className={`${className} py-[9px] px-[30px] bg-black text-white text-[14px] font-bold font-dm w-[92px]`}>{text}</div>
  )
}

export default Badge