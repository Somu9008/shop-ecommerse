import React from 'react'
import './Hero.css'
import hero from '../../frontend_assets/hero_img.png'
export default function Hero() {
  return (
    <div className='hero'>
       <div className='hero-left'>
        <div className='hero-left-heading'>
        <p>OUR BESTSELLERS</p>
        <h1 >Latest Arrivals</h1>
        <p>SHOP NOW</p>
        </div>
       
  
       </div>
       <div className='hero-right'>
         <img src={hero} alt="" />
       </div>
    </div> 
  )
}
