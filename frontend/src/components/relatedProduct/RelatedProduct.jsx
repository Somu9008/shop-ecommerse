import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductItem from '../productItem/ProductItem'

export default function RelatedProduct({category,subCategory}) {


    const {products} = useContext(ShopContext)
   
    
    // const [related,setRelated] = useState([])

    var productCopy = products.slice()

    productCopy = productCopy.filter((item) => category === item.category)
        productCopy = productCopy.filter((item) => subCategory === item.subCategory)
     const related = (productCopy.slice(0,5))

//    const relatedProduct = () => {
//     if(products.length > 0){ 
//         productCopy = productCopy.filter((item) => category === item.category)
//         productCopy = productCopy.filter((item) => subCategory === item.subCategory)
//             console.log(productCopy)
//             // setRelated(productCopy.slice(0,5))
//       }
//    }

   
 

//    useEffect(() => { 
//    relatedProduct()

//    },[products])

   
   

  return (
    <>
      {
        related.map((item,i)=>(
            <ProductItem key={i} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))
      }
    </>
  )
}
