import React from 'react'

const Commonbtn = ({href,className}) => {
  return (
    <button className={`${className} py-[16px] px-[58px] text-white text-[14px] font-dm font-bold bg-liHover`}><a href={href}>Shop Now</a></button>
  )
}

export default Commonbtn