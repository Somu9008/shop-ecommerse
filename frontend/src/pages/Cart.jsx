import React, { useContext, useEffect, useState } from 'react';

import delete_icon from '../frontend_assets/bin_icon.png'
import image from '../frontend_assets/p_img2_1.png'
import './Cart.css'
import CartTotal from '../components/cartTotal/CartTotal';
import { ShopContext } from '../context/ShopContext';

export default function Cart() {


  const { products, cartItems ,updateQuantity,navigate} = useContext(ShopContext)
  const [cartData, setCartData] = useState([])


  useEffect(() => {

    let tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })

        }
      }
    }

    setCartData(tempData)

  }, [cartItems])



  return (
    <div>
      <h2 className='cart-title'> Your Cart</h2>

      {
        cartData.map((item, index) => {

          const productData = products.find(product => product._id === item._id)

          return (
            <div key={index} className='cart'>
              <div className='cart-image'>
                <img src={productData?.image[0]} alt="" />
                <div className='cart-detailes'>
                  <h3 className='cart-item-name'>{productData.name}</h3>
                  <span className='cart-price'>${productData.price}</span>
                  <button className='cart-size'>{item.size}</button>
                </div>
              </div>

              <div className='cart-quantity'>
                <input onChange={(e)=>{e.target.value === "" || e.target.value ==="0" ? null : updateQuantity(item._id,item.size,Number(e.target.value))}} type="number" min={1} defaultValue={item.quantity} name="" id="" />
              </div>
              <div className='delete-img'>
                <img onClick={()=>{updateQuantity(item._id,item.size,0)}} src={delete_icon} alt="" />
              </div>
            </div>
          )
        })
      }


     <div className='cart-total-price'>
      <div>
      <CartTotal/>
      <div className='check-btn'>
          <button onClick={() => { navigate('/place-order') }} className='checkOut-btn'>PROCEED TO CHECKOUT</button>
      </div>
      </div>
            
      </div>     
      

      

    </div>

  )
}
