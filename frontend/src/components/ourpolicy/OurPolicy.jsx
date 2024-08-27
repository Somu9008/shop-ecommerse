import React from 'react'
import './OurPolicy.css'
import exchange from '../../frontend_assets/exchange_icon.png'
import quality from '../../frontend_assets/quality_icon.png'
import support from '../../frontend_assets/support_img.png'

export default function OurPolicy() {
  return (
    <>
    <h1 className='policy-heading'>Our Policy</h1>
<div className='policy'>
       <div className='exchange-policy'>
        <img src={exchange} alt="" />
        <h2>Easy Exchange Policy</h2>
        <p>We offers free exchange policy</p>
       </div>
       <div className='return-policy'>
        <img src={quality} alt="" />
        <h2>7 Days Return Policy</h2>
        <p>We provide 7 days free return policy</p>
       </div>
       <div className='customer-support-policy'>
        <img src={support} alt="" />
        <h2>Best customer suppoort</h2>
        <p>We provide 24/7 customer support</p>
       </div>
    </div>
    </>
    
  )
}
