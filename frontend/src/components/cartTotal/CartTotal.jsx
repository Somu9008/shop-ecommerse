import React, { useContext } from 'react'
import './CartTotal.css'
import { ShopContext } from '../../context/ShopContext'

export default function CartTotal() {

    const { getCartAmount, navigate } = useContext(ShopContext)



    return (
        <div className='cart-container'>
            <div className='cart-total'>
                <h1 className='cart-total-title'>CART TOTALS ----</h1>
                <hr style={{height:"1px",background:"black"}}/>
                <div className='cart-total-container'>
                    <div className='subtotal'>
                        <h4 className='subtotal-name'>SubTotal</h4>
                        <span className='subtotal-price'>$ {getCartAmount()}.00</span>
                    </div>
                    <div className='shipping'>
                        <h4 className='shipping-name'>Shipping</h4>
                        <span className='shipping-price'>$ 10.00</span>
                    </div>
                    <div className='total'>
                        <h4 className='total-name'>Total Price</h4>
                        <span className='total-price'>$ {getCartAmount() === 0 ? 0 : getCartAmount() + 10}.00</span>
                    </div>
                </div>  
            </div>
           
        </div>
    )
}
