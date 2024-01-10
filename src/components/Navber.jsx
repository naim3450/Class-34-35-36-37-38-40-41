import React from 'react'
import Flex from './Flex'
import Image from './Image'
import logo from '../assets/logo.png'
import Container from './Container'
import Menu from './Menu'

const Navber = () => {
  return (
    <section className="py-[32px]">
       <Container>
         <Flex className="gap-[544px]">
            <Image src={logo}/>
            <Menu/>
         </Flex>
       </Container>
    </section>
  ) 
}

export default Navber