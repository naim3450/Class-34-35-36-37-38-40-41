import React from 'react'
import Image from './Image'
import Badge from './Badge'

const Aboutbox = ({imgSrcc,badge}) => {
  return (
    <div className='w-[825px] h-[825px] relative'>
        <Image className={`w-[100%] h-[100%]`} src={imgSrcc}/>
        <Badge className={`py-[28px] px-[97px] w-[280px] text-[16px] absolute top-[670px] left-[280px]`} text={badge}/>
    </div>
  )
}

export default Aboutbox