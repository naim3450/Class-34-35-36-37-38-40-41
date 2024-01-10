import React from 'react'
import Light from '../Light'
import Flex from '../Flex'
import Container from '../Container'
import Watch from '../Watch'

const ThreeImg = () => {
  return (
    <section>
      <Container>
        <Flex className={`justify-between`}>
          <Light/>
          <div className="">
            <Watch/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default ThreeImg