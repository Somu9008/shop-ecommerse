import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './LatestCollection.css'
import ProductItem from '../productItem/ProductItem'

export default function LatestCollection() {

    const { products } = useContext(ShopContext)

   const [latestProducts,setLatestProducts] = useState([])


   useEffect(()=>{
   setLatestProducts(products.slice(0,10))
   },[])


    console.log(products)
    return (
        <div className='latestCollection'>
            <div className='heading'>
                <h1>Latest Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum nesciunt nisi odit repellat,</p>
            </div>
       
       <div className='latest-products'>
           {
            latestProducts.map((item,i)=>(
                <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
           }
       </div>


        </div>
    )
}
