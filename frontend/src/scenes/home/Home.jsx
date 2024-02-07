import React from 'react'
import MainCarousel from "./MainCarousel"
import Subscribe from './Subscribe'
import Brands from './Brands'


const Home = () => {
  return (
    <div className='home'>
    <MainCarousel />
    <Brands />
    <Subscribe />
    </div>
  )
}

export default Home