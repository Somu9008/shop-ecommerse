import { useState } from 'react'
import Navbar from './components/navbara/Navbar'
import Shop from './pages/Shop'
import Search from './components/search/Search'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Order from './pages/Order'
import Cart from './pages/Cart'
import Login from './pages/login'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <ToastContainer/>
    <Navbar/>
     <div style={{paddingTop:"4rem",margin:"auto"}}>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<Order/>}/>
      <Route path='/singup-login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
    </Routes>
   
   </div>
   <Footer/>
    </>
    
  
  )
}

export default App
