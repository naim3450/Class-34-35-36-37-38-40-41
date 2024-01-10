import React from 'react'
import Image from './Image'
import CommonText from './CommonText'
import Commonbtn from './Commonbtn'
import Offer from './Offer'
import wall_clock from '../assets/wall_clock.jpg'
import lemp from '../assets/lemp.jpg'


const Watch = () => {
  return (
    <>
    <div className="w-[776px] h-[368px] relative">
            <Image className="w-full bg-center bg-cover bg-no-repeat" src={wall_clock}/>
            <div className="absolute top-[60px] left-[47px] w-[285px] h-[235px]">
              <CommonText text="Electronics Sale"/>
              <Offer className={`pt-[36px] pb-[50px]`} text="Up to #70%# sale for all furniture items!"/>
              <Commonbtn/>
            </div>
    </div>
    <div className="w-[776px] h-[368px] relative mt-[40px]">
            <Image className="w-full bg-center bg-cover bg-no-repeat" src={lemp}/>
            <div className="absolute top-[60px] left-[47px] w-[285px] h-[235px]">
              <CommonText text="Furniture Offer"/>
              <Offer className={`pt-[36px] pb-[50px]`} text="Up to #50%# sale for all furniture items!"/>
              <Commonbtn/>
            </div>
    </div>
    </>
  )
}

export default Watch