import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-header'>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <div>
            <div className='links'>
              <ul className='link-items'>
                <Link to='/' className='link-item'><li>Home</li></Link>
                <Link to='products' className='link-item'> <li>Products</li></Link>
                <Link to='about' className='link-item'> <li>About</li></Link>
                <Link to='contact' className='link-item'> <li>Contact Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p>47 W 13th St, New York, NY 10011, USA</p>
          <p>Email: admin@gmail.com</p>
          <p>Mobile : +1667654679</p>
        </div>
      </div>
      <div className='bottom-header'>
         <p>@2025, All Rights are reserved</p>
      </div>
    </div>
  )
}

export default Footer