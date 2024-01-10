import React from 'react'
import Bennar from '../Bennar'
import bennarImg from '../../assets/bennarImg.jpg'
import ThreeImg from '../layouts/ThreeImg'
import Arrivals from '../Arrivals'
import Ads from '../../assets/Ads.jpg'
import Spoffer from '../Spoffer'

const Home = () => {
  return (
    <div className='pt-[50px]'>
    <Bennar src={bennarImg}/>
    <ThreeImg/>
    <Arrivals/>
    <Bennar src={Ads}/>
    <Spoffer/>
    </div>
  )
}

export default Home