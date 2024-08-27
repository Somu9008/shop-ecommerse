import React, { useEffect, useState } from 'react'
import './BestProduct.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductItem from '../productItem/ProductItem'

export default function BestProduct() {

    const {products} = useContext(ShopContext)

    const [bestProducts,setBestProducts] =useState([])

    useEffect(()=>{
      const bestseller=(products.filter((item)=>item.bestseller))
      setBestProducts(bestseller.slice(0,5))
    },[])

    console.log(bestProducts)

  return (
    <div className='bestProduct'>
        <h3>Best Products</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum sapiente obcaecati voluptates accusantium </p>

        <div className='bestProduct-items'>
 {
     bestProducts.map((item,i)=>(<ProductItem id={item._id} name={item.name} image={item.image} price={item.price}/>))
 }
        </div>
    </div>
  )
}
