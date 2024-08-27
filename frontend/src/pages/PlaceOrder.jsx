import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import CartTotal from '../components/cartTotal/CartTotal'
import stripe  from '../frontend_assets/stripe_logo.png'
import razorpay  from '../frontend_assets/razorpay_logo.png'
import { ShopContext } from '../context/ShopContext'
// import razorpay  from '../frontend_assets/_logo.png'

export default function PlaceOrder() {

  const [paymentMethod,setPaymentMethod] =useState('cod')
  const {navigate} =useContext(ShopContext)


  return (
    <div className='placeorder'>
      {/* -------left -placeorder----------------- */}
           <div className='delivery-info'>
            <h2>DELIVERY INFORMATION</h2>
            <hr style={{height:"1px",background:"black"}}/>
                <div className='input-container'>
                  <div className='two-input'>
                       <input type="text" placeholder='First name' />
                       <input type="text" placeholder='Last name' />
                  </div>
                       <input type="text " placeholder='street' />
                  <div className='two-input'>
                       <input type="text" placeholder='City' />
                       <input type="text" placeholder='State' />
                  </div>
                  <div className='two-input'>
                       <input type="text" placeholder='Zipcode' />
                       <input type="text" placeholder='Country' />
                  </div>
                      <input type="number" placeholder='Phone' />
                       
                </div>
           </div>


           {/* --------------right placeorder-------------------------- */}

         <div className='total-cart-payment'>
            <div className='total-payment'>
            <CartTotal/>
            </div>
             <div className='payment'>
                <h3>PAYMENT METHOD ----</h3>
                <div className='all-methods'>
                <div className='stripe'>
                    <p className={`stripe-method ${paymentMethod === "stripe" ? 'method' : ''}`}></p>
                    <img className='stripe'  onClick={()=>{setPaymentMethod("stripe")}} src={stripe} alt="" />
                  </div>
                  <div className='rezerpay'>
                    <p className={`rezerpay-method ${paymentMethod === "rezerpay" ? 'method' : ''}`}></p>
                    <img className='rezerpay' onClick={()=>{setPaymentMethod("rezerpay")}} src={razorpay} alt="" />
                  </div>
                  <div className='cashOnDelivery'>
                    <p className={`cod-method ${paymentMethod === "cod" ? 'method' : ''}`}></p>
                    <span onClick={()=>{setPaymentMethod('cod')}}>CASH ON DELIVERY</span>
                  </div>
                </div>     
             </div>
             <div className='place-btn'>
                 <button  onClick={() => { navigate('/orders') }} className='p-btn'>PLACE ORDER</button>
                 </div>
             </div>
     </div> 
  )
}
