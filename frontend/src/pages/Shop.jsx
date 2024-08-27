import React, { useContext, useEffect, useState } from 'react'
import './Shop.css'
import menu from '../frontend_assets/menu_icon.png'
import Search from '../components/search/Search'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
 import ProductItem from '../components/productItem/ProductItem'


export default function Shop() {

    // const [showSearch,setShowSearch] = useState(false)
    const {showSearch,setShowSearch,search} =useContext(ShopContext)
    const {products} = useContext(ShopContext)
    const [filterProducts,setFilterProducts] = useState([])
    const [category,setCategory] =useState([])
    const [subCategory,setSubCategory] =useState([])
    const [sortType,setSortType] =useState("relevent")

    const location = useLocation()
  

    useEffect(()=>{
        if(location.pathname ==='/shop' && showSearch){
            setShowSearch(true)
        }
    },[location,showSearch])



   

   
    const toggleCategory = (e)=>{
           if(category.includes(e.target.value)){
            setCategory(prev => prev.filter(item => item !== e.target.value))
           }else{
            setCategory(prev => [...prev,e.target.value])
           }
    }

    const toggleSubCategory= (e)=>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }else{
            setSubCategory(prev=> [...prev,e.target.value])
        } 
    }

    
    const applyFilter = ()=>{


       
        var productCopy = products.slice();

        if(search){
           productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        

        if(category.length > 0){
            productCopy = productCopy.filter(item => category.includes(item.category))
            
        }
        if(subCategory.length > 0){
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
            
        }
        setFilterProducts(productCopy)
    }


    const sortProduct =()=>{
        let fProductCopy =filterProducts.slice()

        switch (sortType){
            case ("low-high"):
                setFilterProducts(fProductCopy.sort((a,b)=>(a.price -b.price)));
             break;
             case ("high-low"):
                setFilterProducts(fProductCopy.sort((a,b)=>(b.price -a.price)))  
              break;
              case ("relevent"):
               applyFilter()
               break; 
            
        }
    }

    useEffect(()=>{
        setFilterProducts(products)
      },[])
  

    useEffect(()=>{
        applyFilter()
    },[category,subCategory,search])


    useEffect(()=>{
     sortProduct()
    },[sortType])
  return (
    <>
     {showSearch ?<Search/> :" "}
    <div className='shop'>
       
        <div className='shop-filter'>
            <p>Shop Filter</p><hr />

            <div className='category'>
                <p>category</p>
                <hr />
                <div><input type="checkbox" value={"Men"} id="men" onChange={toggleCategory}/><label htmlFor="men">Men</label></div>
            <div><input type="checkbox" value={"Women"}  id="women" onChange={toggleCategory}/><label htmlFor="women">Women</label></div>
            <div><input type="checkbox" value={"Kids"} id="kids" onChange={toggleCategory}/><label htmlFor="kids">Kids</label></div>
            
            </div>
            <div className='subCategory'>
                <p>Sub-category</p>
                <hr />
                <div><input type="checkbox" value={"Topwear"} onChange={toggleSubCategory} id="top"/><label htmlFor="top">Top</label></div>
            <div><input type="checkbox" value={"Bottomwear"}  onChange={toggleSubCategory}id="bottom"/><label htmlFor="bottom">Bottom</label></div>
            <div><input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} id="winter"/><label htmlFor="winter">winter</label></div>
            
            </div>
           
        </div>
        <div className='shop-products'>
            <div className='shop-heading'>
            <h2>All Products</h2>
            <div className='sort-products'>
            <select onChange={(e)=>{setSortType(e.target.value)}} name="" id="">
                <option selected>Sort Product</option>
                <option value="low-high"> sort by: low-high</option>
                <option value="high-low">sort by: high-low</option>
                <option value="relevent">sort by: relavent</option>  
            </select>
            <img src={menu} alt="" />
            </div>
           
            </div>
            <div className='shop-all-products'>
                {
                    filterProducts.map((item,i)=>(
                        <ProductItem key={i} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    ))
                }
            </div>
            
        </div>
    </div>
    </>
  
  )
}
