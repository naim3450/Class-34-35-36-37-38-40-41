import React from 'react'

const Input = ({type,placeholder,className}) => {
  return (
    <input className={`${className} focus:outline-none`} type={type} placeholder={placeholder}/>
  )
}

export default Input