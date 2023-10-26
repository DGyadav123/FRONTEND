import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand-hand_icon.png'
import arrow_icon from '../Assets/arrow_icon'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">

         </div>
         <div>Latest Collection</div>
         <img src={arrow_icon} alt="" />
         
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
