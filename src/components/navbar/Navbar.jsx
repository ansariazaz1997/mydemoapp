import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-items'>
        <div className='logo'>
          <p>LOGO</p>
        </div>
        <div className='links'>
          <ul className='link-items'>
            <Link to='/' className='link-item'><li>Home</li></Link>
            <Link to='products'className='link-item'> <li>Products</li></Link>
            <Link to='about'className='link-item'> <li>About</li></Link>
            <Link to='contact' className='link-item'> <li>Contact Us</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar