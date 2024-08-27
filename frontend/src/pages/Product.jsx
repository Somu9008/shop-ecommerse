import React, { useContext, useEffect, useState } from 'react'
import './Product.css'

import dark_star from '../frontend_assets/star_icon.png'
import dull_star from '../frontend_assets/star_dull_icon.png'
import ProductItem from '../components/productItem/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../components/relatedProduct/RelatedProduct'

export default function Product() {

  const {products,addToCart} = useContext(ShopContext)
  const {productId} = useParams()

  const [productData,setProductData] =useState(false)
  const [Image,setImage] =useState("")
  const [size,setSize] =useState("")

 const featchProduct = async ()=>{
     products.map((item)=>{
         if(item._id === productId){
             setProductData(item)
             setImage(item.image[0])
             return null;
        }
     })
 } 

  const sliceProduct = products.slice(0,5)
 
  // console.log(productData)
  // console.log(productData.sizes)
  // console.log(size)

  useEffect(()=>{
      featchProduct()
  },[productId])

  return (
    <>
      <div className='product'>

      <div className='left-product'>
        <div className='image'>
          <div className='image-trial'>
            {
              productData.image?.map((item ,i)=>(
                 <img onClick={()=>{setImage(item)}} key={i} src={item} alt=""/>)
            )
            }
          </div>
          <div className='image-big'>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

      <div className='right-product'>
        <h3>{productData.name}</h3>
        <div className='rating'>
          <img src={dark_star} alt="" />
          <img src={dark_star} alt="" />
          <img src={dark_star} alt="" />
          <img src={dark_star} alt="" />
          <img src={dull_star} alt="" />
          <span>(221)</span>
        </div>
        <h2>${productData.price}</h2>
        <p>{productData.description}</p>
        <h4>select Size </h4>
        <div className='size'>
          {
            productData.sizes?.map((item,index)=>(
               <button onClick={()=>{setSize(item)}} className={`${item === size ? 'size-btn-active' : ""}`} style={{padding:" 10px 12px 10pxx 12px",margin:"5px",fontWeight:"bold",background:" rgb(241, 241, 241)",border:"none"}}  key={index}> {item}</button>
          
            ))
          }
        </div>
        <br />
        <button onClick={()=>{addToCart(productData._id,size)}}  className='add-cart-btn'>ADD TO CART</button>
        <hr />

        <div className='product-details'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product</p>
          <p>Easy retrun and exchange policy within 7 days</p>
        </div>
      </div>
    </div>


    <div className='product-description' style={{width:"90%",margin:"auto",marginTop:"3rem" ,}}>
    <h2 style={{display:"inline",margin:"0rem",border:"1px solid gray"}}>Descritpion</h2>
    <h4 style={{display:"inline",border:"1px solid gray",paddingTop:"8px"}}>Reviews(122)</h4>
    <div style={{border:"1px solid gray",padding:"2rem"}}>
    <p className='' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates nam neque sequi magni nostrum. Magnam culpa ea nobis nam.lorem
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus perferendis corrupti accusantium placeat, obcaecati voluptatum voluptate mollitia commodi magnam necessitatibus dolor dolore consequuntur incidunt ab ratione aperiam amet quia beatae!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione minima, veritatis atque optio laboriosam suscipit neque aliquid pariatur ad consequuntur magni praesentium quas sint quo mollitia eos laudantium quibusdam?
    </p >
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id possimus veritatis ipsum harum inventore saepe rem repellat nam. Aspernatur, nulla obcaecati porro voluptatum reiciendis temporibus excepturi autem veritatis eligendi.</p>
    </div>
    </div>


    <div className='related-products' >
      <h2>Related Products</h2>

      <div className='related-all-products'>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      </div>
     
      
    </div> 


    </>
  )
}
