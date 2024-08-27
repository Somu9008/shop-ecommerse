import React from 'react'
import './Order.css'
import image from '../frontend_assets/p_img2_1.png'
 
export default function Order() {
  return (
    <div className='order-container'>
    <h2>MY ORDER</h2>
    <hr />
    <div className='my-order'>
       <div className='order-img-details'>
        <img src={image} alt="" />
        <div className='order-item-details'>
        <h3>Men Rounded Neck Pure Cotton T-shirt</h3>
        <div className='quantity-size'>
          <h4>$ {200}</h4>
          <h5>Quantity : 1</h5>
          <h5>Size : M</h5>
        </div>
        <div className='order-date'>
            <h4>Date: <span>25,jul,2024</span></h4>
        </div>
       </div>
       </div>
       
       <div className='order-status'>
        <p className='status'></p>
        <p>Ready to ship</p>
       </div>
       <div className='order-track'>
        <button className='track-btn'>Track Order</button>
       </div>
    </div>
    <div className='my-order'>
       <div className='order-img-details'>
        <img src={image} alt="" />
        <div className='order-item-details'>
        <h3>Men Rounded Neck Pure Cotton T-shirt</h3>
        <div className='quantity-size'>
          <h4>${200}</h4>
          <h5>Quantity : 1</h5>
          <h5>Size : M</h5>
        </div>
        <div className='order-date'>
            <h4>Date: <span>25,jul,2024</span></h4>
        </div>
       </div>
       </div>
       
       <div className='order-status'>
        <p className='status'></p>
        <p>Ready to ship</p>
       </div>
       <div className='order-track'>
        <button className='track-btn'>Track Order</button>
       </div>
    </div>
  </div>
  )
}
