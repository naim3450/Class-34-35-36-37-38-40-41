import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './layouts/product'
import cape from '../assets/cape.jpg'
import table from '../assets/table.jpg'
import hedphone from '../assets/hedphone.jpg'
import sunglass from '../assets/sunglass.jpg'
import CommonText from './CommonText'

const Spoffer = () => {
  return (
    <Container className={`pb-[140px]`}>
        <CommonText text={`Special Offers`} className={`pt-[128px]`}/>
        <Flex className={`justify-between`}>
            <Product imgSrc={cape} badge={`New`}/>
            <Product imgSrc={table} badge={`New`}/>
            <Product imgSrc={hedphone} badge={`New`}/>
            <Product imgSrc={sunglass} badge={`New`}/>
        </Flex>
    </Container>
  )
}

export default Spoffer