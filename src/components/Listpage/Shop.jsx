import React from 'react'
import cape from '../../assets/cape.jpg'
import hedphone from '../../assets/hedphone.jpg'
import herbal from '../../assets/herbal.jpg'
import jhuri from '../../assets/jhuri.png'
import sunglass from '../../assets/sunglass.jpg'
import table from '../../assets/table.jpg'
import toorBag from '../../assets/toorBag.jpg'
import wall_clock2 from '../../assets/wall_clock2.png'
import watch from '../../assets/watch.jpg'
import CategorywithIcon from '../CategorywithIcon'
import CommonText from '../CommonText'
import Container from '../Container'
import Flex from '../Flex'
import Peragraph from '../Peragraph'
import Product from '../layouts/product'

const Shop = () => {
  return (
    <Container className={`pt-[100px]`}>
        <CommonText text="Product" className={`text-[49px]`}/>
        <Flex className={`pt-[11px]`}>
            <Peragraph text="Home >" as="p"/>
            <Peragraph text="Product" as="p" className=" ml-[5px]"/>
        </Flex>

        <Flex className={` justify-between`}>
            <div className="pt-[130px]">
                <CommonText className={`text-[20px]`} text="Shop by Category"/>
                <div className="grid gap-[30px] pt-[35px]">
                    <CategorywithIcon CategoryText="Category 1"/>
                    <CategorywithIcon CategoryText="Category 2"/>
                    <CategorywithIcon CategoryText="Category 3"/>
                    <CategorywithIcon CategoryText="Category 4"/>
                    <CategorywithIcon CategoryText="Category 5"/>
                </div>

                <CommonText className={`text-[20px] pt-[65px]`} text="Shop by Color"/>
                <div className="grid gap-[30px] pt-[35px]">
                    <CategorywithIcon CategoryText="Color 1"/>
                    <CategorywithIcon CategoryText="Color 2"/>
                    <CategorywithIcon CategoryText="Color 3"/>
                    <CategorywithIcon CategoryText="Color 4"/>
                    <CategorywithIcon CategoryText="Color 5"/>
                </div>

                <CommonText className={`text-[20px] pt-[65px]`} text="Shop by Brand"/>
                <div className="grid gap-[30px] pt-[35px]">
                    <CategorywithIcon CategoryText="Barnd 1"/>
                    <CategorywithIcon CategoryText="Barnd 2"/>
                    <CategorywithIcon CategoryText="Barnd 3"/>
                    <CategorywithIcon CategoryText="Barnd 4"/>
                    <CategorywithIcon CategoryText="Barnd 5"/>
                </div>

                <CommonText className={`text-[20px] pt-[65px]`} text="Shop by Price"/>
                <div className="grid gap-[30px] pt-[35px]">
                    <CategorywithIcon CategoryText="Price 1"/>
                    <CategorywithIcon CategoryText="Price 2"/>
                    <CategorywithIcon CategoryText="Price 3"/>
                    <CategorywithIcon CategoryText="Price 4"/>
                    <CategorywithIcon CategoryText="Price 5"/>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-[45px]">
                <Product imgSrc={herbal} badge={`New`}/>
                <Product imgSrc={hedphone} badge={`New`}/>
                <Product imgSrc={table} badge={`New`}/>
                <Product imgSrc={cape} badge={`-10%`}/>
                <Product imgSrc={wall_clock2} badge={`New`}/>
                <Product imgSrc={toorBag} badge={`New`}/>
                <Product imgSrc={sunglass} badge={`-15%`}/>
                <Product imgSrc={table} badge={`New`}/>
                <Product imgSrc={cape} badge={`New`}/>
                <Product imgSrc={jhuri} badge={`New`}/>
                <Product imgSrc={watch} badge={`-15%`}/>
                <Product imgSrc={watch} badge={`-15%`}/>
                <Product imgSrc={sunglass} badge={`-10%`}/>
            </div>
        </Flex>
    </Container>
  )
}

export default Shop