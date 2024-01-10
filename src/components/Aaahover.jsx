import React from 'react'
import Peragraph from './Peragraph'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa6";
import Icontwo from './icon/icontwo';
import { FaShoppingCart } from "react-icons/fa";

const Aaahover = () => {
  return (
    <div className='w-full bg-white py-[26px] gap-[20px] flex-col flex '>
        <Flex className={`items-center align-middle justify-end gap-[15px] text-[16px] font-dm font-normal`}>
            <Peragraph className="text-liColor hover:text-liHover hover:font-bold" text="Add to Wish List" as="h3"/>
            <FaHeart />
        </Flex>

        <Flex className={`items-center align-middle justify-end gap-[15px] text-[16px] font-dm font-normal`}>
            <Peragraph className="text-liColor hover:text-liHover hover:font-bold" text="Compare" as="h3"/>
            <Icontwo />
        </Flex>

        <Flex className={`items-center align-middle justify-end gap-[15px] text-[16px] font-dm font-normal`}>
            <Peragraph className="text-liColor hover:text-liHover hover:font-bold" text="Add to Wish List" as="h3"/>
            <FaShoppingCart />
        </Flex>
    </div>
  )
}

export default Aaahover