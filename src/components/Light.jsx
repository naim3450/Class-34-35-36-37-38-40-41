import React from 'react'
import Image from './Image'
import Commonbtn from './Commonbtn'
import light from '../assets/light.jpg'
import Offer from './Offer'
import CommonText from './CommonText'

const Light = () => {
  return (
    <div className="w-[780px] h-[780px] relative">
            <Image className={`w-full`} src={light}/>
            <div className="absolute top-[470px] left-[64px] w-[285px] h-[235px]">
              <CommonText text={`Phones Sale`}/>
              <Offer className={`pt-[36px] pb-[50px]`} text="Up to #30%# sale for all furniture items!"/>
              <Commonbtn/>
            </div>
    </div>
  )
}

export default Light