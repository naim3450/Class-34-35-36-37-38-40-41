import React from 'react'
import Container from '../Container'
import CommonText from '../CommonText'
import Flex from '../Flex'
import Peragraph from '../Peragraph'
import Aboutbox from '../Aboutbox'
import watch2 from '../../assets/watch2.jpg'
import jhuri2 from '../../assets/jhuri2.png'

const About = () => {
  return (
    <Container>
        <CommonText text="About" className={`text-[49px] pt-[100px]`}/>
        <Flex className={`pt-[11px]`}>
            <Peragraph text="Home >" as="p"/>
            <Peragraph text="About" as="p" className=" ml-[5px]"/>
        </Flex>

        <Flex className={`justify-between py-[110px]`}>
            <Aboutbox imgSrcc={watch2} badge={`Our brands`}/>
            <Aboutbox imgSrcc={jhuri2} badge={`Our Stores`}/>
        </Flex>

        <CommonText className={`font-normal text-[39px] leading-[52px]`} text={`Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.`}/>

        <Flex className={`justify-between py-[120px]`}>
            <div className="">
            <CommonText className={`font-normal text-[25px] leading-[35px]`} text={`Our Vision`}/>
            <p className='text-[16px] text-liColor font-normal leading-[32px] w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="">
            <CommonText className={`font-normal text-[25px] leading-[35px]`} text={`Our Story`}/>
            <p className='text-[16px] text-liColor font-normal leading-[32px] w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>

            <div className="">
            <CommonText className={`font-normal text-[25px] leading-[35px]`} text={`Our Brands`}/>
            <p className='text-[16px] text-liColor font-normal leading-[32px] w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </Flex>
    </Container>
  )
}

export default About