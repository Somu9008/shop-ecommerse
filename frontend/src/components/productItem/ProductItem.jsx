import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'
import './ProductItem.css'

export default function ProductItem({id,image,name,price}) {

  const {currency} =useContext(ShopContext)

  return (
    <div className='productItem'>
         <Link className='item-card' to={`/product/${id}`}>
             <div className='item'>
                   <img src={image[0]} alt="" />
             </div>
              <p>{name}</p>
              <p>{currency}{price}</p>
         </Link>
    </div>
  )
}
