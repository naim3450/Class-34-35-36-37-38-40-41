import React from 'react'

const Bennar = ({href,alt,src,className}) => {
  return (
    <a href={href}><img src={src} className={`${className} bg-no-repeat bg-center bg-cover w-full`} alt={alt} /></a>
  )
}

export default Bennar