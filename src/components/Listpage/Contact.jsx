import React from 'react'
import Container from '../Container'
import CommonText from '../CommonText'
import Flex from '../Flex'
import Peragraph from '../Peragraph'
import Contactinput from './Contactinput'
import Badge from '../Badge'

const Contact = () => {
  return (
    <Container className={`pt-[50px]`}>
        <CommonText text="Contact" className={`text-[49px]`}/>
        <Flex className={`pt-[11px]`}>
            <Peragraph text="Home >" as="p"/>
            <Peragraph text="Contact" as="p" className=" ml-[5px]"/>
        </Flex>
        <div className="">
            <CommonText text="Fill up a Form" className={`text-[39px] pt-[125px] pb-[42px]`}/>
            <div className="grid gap-[23px]">
                
                <div className='w-[780px] h-[68px]'>
                <CommonText text="Name" className={`text-[14px] leading-[23px] pb-[15px]`}/>
                <Contactinput typee={`text`} placeholderr={`Your name here`}/>
                </div>

                <div className='w-[780px] h-[68px]'>
                <CommonText text="Email" className={`text-[14px] leading-[23px] pb-[15px]`}/>
                <Contactinput typee={`email`} placeholderr={`Your email here`}/>
                </div>

                <div className='w-[780px] h-[138px]'>
                <CommonText text="Message" className={`text-[14px] leading-[23px] pb-[15px]`}/>
                <Contactinput typee={`text`} placeholderr={`Your message here`}/>
                </div>

                <Badge text="Post" className={`w-[200px] py-[18px] px-[85px]`}/>
                
            </div>

            <div className="pt-[140px]">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.98359043914!2d90.30871208318726!3d23.805278891314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1704511631746!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[572px]"
          ></iframe>
            </div>
        </div>
    </Container>
  )
}

export default Contact