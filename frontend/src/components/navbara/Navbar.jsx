import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../Frontend_Assets/logo.png'
import cart from '../../Frontend_Assets/cart_icon.png'
import search from '../../Frontend_Assets/search_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

export default function Navbar() {

const [showHamberger,setShowHamberger] =useState(false)
const {showSearch,setShowSearch,getCartCount} = useContext(ShopContext)



  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/' style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}><img src={logo} alt="logo" /><h1>LOGO</h1></Link> 
         
         
      </div>
      <ul className='nav-menu'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <div className='nav-cart-login' >
        <img onClick={()=>{setShowSearch(!showSearch)}} src={search} alt="search" />
        <div className='' style={{position:"relative"}}>
        <Link to='/cart'><img src={cart} alt="cart" /></Link>
        <div className='' style={{position:"absolute",height:"15px",width:"15px",borderRadius:"50%",background:"red",display:"flex",alignItems:"center",justifyContent:"center",color:"white",top:"-4px",right:"-4px",padding:"1px"}}>{getCartCount()}</div>
        </div>
        
         <Link to='/singUp-login'><button>Login</button></Link>
         <div className='hamberger' onClick={()=>{setShowHamberger(!showHamberger)}}>
              <div className={`line line-one ${showHamberger ? "wrong-one" :""}`}></div>
              <div className={`line line-two ${showHamberger ? "wrong-two" :""}`}></div>
              <div className={`line line-three ${showHamberger ? "wrong-three" :""}`}></div>           
         </div>

      </div>

      <div className={`menu-sidebar ${showHamberger ? "nav-menu-sidebar-open" :""}` }>
      <ul className='nav-menu-sidebar'>
        <li><NavLink onClick={()=>{setShowHamberger(false)}} to='/'>Home</NavLink></li>
        <li><NavLink onClick={()=>{setShowHamberger(false)}} to='/shop'>Shop</NavLink></li>
        <li><NavLink onClick={()=>{setShowHamberger(false)}} to='/About'>About</NavLink></li>
        <li><NavLink onClick={()=>{setShowHamberger(false)}} to='/contact'>Contact</NavLink></li>
      </ul>
      </div> 
    

      
    </div>
  )
}
