import React from 'react'

const Category = ({text,className}) => {
  return (
    <li className={`${className} text-liColor text-[16px] font-dm font-normal list-none leading-[30px]`}>{text}</li>
  )
}

export default Category