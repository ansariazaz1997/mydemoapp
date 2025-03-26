import React from 'react'
import hero from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} alt="" className='hero-image' />
    </div>
  )
}

export default Hero