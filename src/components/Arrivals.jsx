import React from 'react'
import Product from './layouts/product'
import Container from './Container'
import Flex from './Flex'
import watch from '../assets/watch.jpg'
import handWatch from '../assets/handWatch.jpg'
import foodJar from '../assets/foodJar.jpg'
import mouse from '../assets/mouse.jpg'
import continer from '../assets/continer.jpg'
import schoolBag from '../assets/schoolBag.jpg'
import herbal from '../assets/herbal.jpg'
import toorBag from '../assets/toorBag.jpg'
import CommonText from './CommonText'

const Arrivals = () => {
  return (
    <>
        <Container className={`pt-[128px]`}>
            <CommonText text="New Arrivals" className="pb-[35px]"/>
            <Flex className="justify-between">
                <Product imgSrc={watch} badge={`New`} className="w-1/4"/>
                <Product imgSrc={handWatch} badge={`New`} className="w-1/4"/>
                <Product imgSrc={foodJar} badge={`New`} className="w-1/4"/>
                <Product imgSrc={mouse} badge={`New`} className="w-1/4"/>
            </Flex>
        </Container>

        <Container className={`mt-[118px] pb-[130px]`}>
        <CommonText text="Our Bestsellers" className="pb-[40px]"/>
            <Flex className="justify-between">
                <Product imgSrc={continer} badge={`New`} className="w-1/4"/>
                <Product imgSrc={schoolBag} badge={`New`} className="w-1/4"/>
                <Product imgSrc={herbal} badge={`New`} className="w-1/4"/>
                <Product imgSrc={toorBag} badge={`New`} className="w-1/4"/>
            </Flex>
        </Container>
    </>
  )
}

export default Arrivals