import React from 'react'
import Badge from '../Badge'
import Flex from '../Flex'
import Peragraph from '../Peragraph'
import Price from '../Price'
import Image from '../Image'
import Aaahover from '../Aaahover'

const Product = ({badge,imgSrc}) => {
  return (
    <div className='w-[376px] relative group overflow-hidden'>
        <div className="w-full h-[376px] relative">
            <Image className="w-full" src={imgSrc}/>
            <Badge text={badge} className="absolute top-[20px] left-[20px]"/>
        </div>

        <div className="w-[376px]">
            <Flex className="justify-between">
                <Peragraph className="text-[20px] text-liHover font-bold font-dm" text="Basic Crew Neck Tee" as="h3"/>
                <Price className="text-[16px] text-liColor font-dm font-normal" text="$44.00"/>
            </Flex>
            <Peragraph className="text-[16px] text-liColor font-dm font-normal leading-[30px] pt-[15px]" text="Back" as="h4"/>
        </div>
        
        <div className="w-full absolute group-hover:bottom-[75px] duration-300 translate-y-full group-hover:translate-y-0">
          <Aaahover/>
        </div>
    </div>
  )
}

export default Product