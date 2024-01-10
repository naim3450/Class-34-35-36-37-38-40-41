import React from 'react'

const List = ({text,href,className}) => {
  return (
    <li className={`${className} text-liColor text-[14px] font-dm font-normal list-none`}><a href={href}>{text}</a></li>
  )
}

export default List