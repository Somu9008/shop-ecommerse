import React from 'react'
import './About.css'
import image from '../frontend_assets/about_img.png'

export default function About() {
  return (
    <div className='about-container'>
      <h1>ABOUT US</h1><hr />
      <div className='about'>
        <div className='about-image'>
          <img src={image} alt="" />
        </div>
        <div className='about-desc'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio quas aut dolorem, maiores unde nesciunt officiis tempore veniam nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus pariatur est modi fugit quasi unde ex molestiae provident cupiditate!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio quas aut dolorem, maiores unde nesciunt officiis tempore veniam nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis doloribus pariatur est modi fugit quasi unde ex molestiae provident cupiditate!</p>
        </div>
      </div>


      <div>
        <h3>WHy CHOOSE US---</h3>
        <div className='about-choose'>

          <div className='box box-1'>
            <h4>Quality Assurance :</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veritatis?</p>
          </div>
          <div className='box box-2'>
            <h4>Convenience</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facere?</p>
          </div>
          <div className='box box-3'>
            <h4>Exceptional Customer Services</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel.</p>
          </div>
        </div>
      </div>


    </div>
  )
}
