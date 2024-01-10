import React from 'react'
import Flex from './Flex'
import List from './List'

const Menu = () => {
  return (
    <ul>
        <Flex className="gap-[40px]">
            <List href="/" className="hover:text-liHover font-bold" text="Home"/>
            <List href="/Shop" className="hover:text-liHover font-bold" text="Shop"/>
            <List href="/About" className="hover:text-liHover font-bold" text="About"/>
            <List href="/Contact" className="hover:text-liHover font-bold" text="Contacts"/>
            <List href="#" className="hover:text-liHover font-bold" text="Journal"/>
        </Flex>
    </ul>
  )
}

export default Menu