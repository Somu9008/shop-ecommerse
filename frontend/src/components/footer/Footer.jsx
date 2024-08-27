import React from 'react'
import footer from '../../frontend_assets/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <div className='footer'> 
      <div className='footer-left'>
        <img src={footer} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci.</p>
      </div>
      <div className='footer-center'>
        <h2>Company</h2>
        <ul>
            <li><Link className='footer-link'>Home</Link></li>
            <li><Link className='footer-link'>About Us</Link></li>
            <li><Link className='footer-link'>delivery</Link></li>
            <li><Link className='footer-link'>Privacy Policy</Link></li>
        </ul>
      </div>
      <div className='footer-right'>
        <h2>GET IN TOICH</h2>
        <ul>
            <li>+121-212-332</li>
            <li>contact@forever.com</li>
        </ul>
      </div>
      
    </div>
    <hr />
    <p style={{textAlign:"center"}}>Copyright2024@gmail.com - All Right Reserved.</p>
    </>
  )
}
