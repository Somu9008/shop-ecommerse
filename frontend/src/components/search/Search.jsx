import React, { useContext } from 'react'
import search_icon from '../../Frontend_Assets/search_icon.png'
import wrong from '../../Frontend_Assets/cross_icon.png'
import './Search.css'
import { ShopContext } from '../../context/ShopContext'

export default function Search() {

const {showSearch,setShowSearch,search,setSearch} =useContext(ShopContext)


  return (
    <div className='search'>
        <div className='search-input'>
           <input type="text" placeholder='search items' onChange={(e)=>{setSearch(e.target.value)}} value={search} />
           <img src={search_icon} alt="" />
        </div>
        <img onClick={()=>{setShowSearch(false)}} src={wrong} alt="" />
    </div>
  )
}
