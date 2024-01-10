import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import MenuBer from '../MenuBer'
import Peragraph from '../Peragraph'
import Input from '../Input'
import { FaSearch } from "react-icons/fa";
import Contacticon from '../Contacticon'
import { RiShoppingCartFill } from "react-icons/ri";

const SubHeadder = () => {
  return (
    <section className="py-[40px] border-t border-borderColor">
        <Container>
            <Flex className="items-center justify-between">
                <Flex className="items-center w-[155px] justify-between">
                    <MenuBer/>
                    <Peragraph className="" text="Shop by Category" as="h3"/>
                </Flex>

                <Flex className="items-center w-[600px] justify-between">
                    <Input className="py-[16px] pl-[21px] border-none pr-[370px]" type="text" placeholder="Search Products" />
                    <FaSearch className="text-[20px] text-black" />
                </Flex>

                <Flex className="items-center w-[100px] justify-between">
                    <a href="#">
                    <Contacticon className="text-[25px]"/>
                    </a>
                    <a href="#">
                    <RiShoppingCartFill className="text-[25px]"/>
                    </a>
                </Flex>  
            </Flex>
        </Container>
    </section>
  )
}

export default SubHeadder