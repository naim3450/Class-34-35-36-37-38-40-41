import React from 'react'
import Flex from './Flex'
import Category from './Category'
import { FiPlus } from "react-icons/fi";

const CategorywithIcon = ({CategoryText}) => {
  return (
    <Flex className={`w-[300px] justify-between items-center`}>
        <Category text={CategoryText}/>
        <FiPlus />
    </Flex>
  )
}

export default CategorywithIcon