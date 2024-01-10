import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Menutittle from '../Menutittle'
import List from '../List'
import logo from '../../assets/logo.png'
import Image from '../Image'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const footer = () => {
  return (
    <section>
    <Container className={`py-[50px]`}>
        <Flex>
            <div className="">
                <Menutittle text="Menu"/>
                <List text="Home" className={`leading-[23px] pt-[17px]`}/>
                <List text="Shop" className={`leading-[23px] pt-[6px]`}/>
                <List text="About" className={`leading-[23px] pt-[6px]`}/>
                <List text="Contact" className={`leading-[23px] pt-[6px]`}/>
                <List text="Journal" className={`leading-[23px] pt-[6px]`}/>
            </div>
            <div className="ml-[150px] mr-[170px]">
                <Menutittle text="Menu"/>
                <List text="Category 1" className={`leading-[23px] pt-[17px]`}/>
                <List text="Category 2" className={`leading-[23px] pt-[6px]`}/>
                <List text="Category 3" className={`leading-[23px] pt-[6px]`}/>
                <List text="Category 4" className={`leading-[23px] pt-[6px]`}/>
                <List text="Category 5" className={`leading-[23px] pt-[6px]`}/>
            </div>
            <div className="">
                <Menutittle text="Menu"/>
                <List text="Privacy Policy" className={`leading-[23px] pt-[17px]`}/>
                <List text="Terms & Conditions" className={`leading-[23px] pt-[6px]`}/>
                <List text="Special E-shop" className={`leading-[23px] pt-[6px]`}/>
                <List text="Shipping" className={`leading-[23px] pt-[6px]`}/>
                <List text="Secure Payments" className={`leading-[23px] pt-[6px]`}/>
            </div>
            
            <div className="ml-[145px]">
            <Menutittle text={`(052) 611-5711`}/>
            <Menutittle text={`company@domain.com`}/>
            <List text="575 Crescent Ave. Quakertown, PA 18951"/>
            </div>

            <div className="ml-[260px] pt-[5px] w-[120px] h-[30px]">
                <Image className={`w-full`} src={logo}/>
            </div>
        </Flex>

        <Flex className={`pt-[60px] justify-between`}>
            <Flex className={`w-[100px] justify-between`}>
                <a href="https://www.youtube.com/watch?v=_vPw8L3nz3E">
                <FaFacebookF className=" text-[20px]"/>
                </a>
                <a href="">
                <FaLinkedinIn className=" text-[20px]"/>
                </a>
                <a href="">
                <FaInstagram className=" text-[20px]"/>
                </a>
            </Flex>
            <List text={`2020 Orebi Minimal eCommerce Figma Template by Adveits`}/>
        </Flex>
    </Container>
    </section>
  )
}

export default footer