import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='newsletters'>
       <h2>subscribe now & get 20% off</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque minima consectetur harum cumque in illum</p>
       <div className='newsletters-input'>
        <form action="">
        <input type="email" name='sub' placeholder='enter your email' />
        <button>subscribe</button>
        </form>
       </div>
    </div>
  )
}
