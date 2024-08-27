import React from 'react'
import './Contact.css'
import image from '../frontend_assets/contact_img.png'

export default function Contact() {
  return (
    <div  className='contact-container'>
      <h1>Contact Us</h1><hr />
      <div className='contact'>
        <div className='contact-image'>
          <img src={image} alt="" />
        </div>
        <div className='contact-details'>
            <h1>Our Store</h1>
            <div>
            <p>584128 sindhanoor</p>
            <p>dist.raichur state karntake,india</p>
            </div>
            <div>
            <p>tel:(241)555-010</p>
            <p>Email : sharathg9008@gmail.com</p>
            </div>

            <h2>Careers at Forever</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, temporibus?</p>
           
               <button>Explore Job</button>

        </div>

      </div>
      
    </div>
  )
}
