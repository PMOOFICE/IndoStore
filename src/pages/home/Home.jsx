import React, { useContext, useState } from 'react'

import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import myContext from '../../context/myContext'
import { Loader } from 'lucide-react'
import MobilePageProduct from '../../components/homePageProductCard/MobilePageProduct'
import Layout from '../../components/layout/Layout'
import ShoesPageProduct from '../../components/homePageProductCard/ShoesPageProduct'
//import { myContext } from '../../context/myContext'

function Home() {
  
  return (
    <Layout>
      <div className="bg-gray-400 min-h-screen ">
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <div className="bg-white mx-4 rounded-md py-4 shadow-lg">
      <img src="https://cdn.dmart.in/images/rwd/banners/curated/1aug24-curated-halfprice.jpg" alt="" srcset="" className='px-4 shadow-md' />
      </div>
      
      <MobilePageProduct/>
      <ShoesPageProduct/>
      <Track/>
      <Testimonial/>
      
      
      </div>
    </Layout>
  )
}

export default Home
