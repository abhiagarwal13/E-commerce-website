import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import Hero from '../Components/Hero'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'
export default function Home() {
  return (
    <div>
     <Hero/>
      <LatestCollection/>
    
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>





    </div>
  )
}
