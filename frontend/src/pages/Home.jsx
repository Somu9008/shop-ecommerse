import React from 'react'
import Hero from '../components/hero/Hero'
import LatestCollection from '../components/latestCollection/LatestCollection'
import BestProduct from '../components/bestproducts/BestProduct'
import OurPolicy from '../components/ourpolicy/OurPolicy'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>
      <Hero/>
      <LatestCollection/>
      <BestProduct/>
      <OurPolicy/>
      <NewsLetter/>
      
    </>
  )
}
