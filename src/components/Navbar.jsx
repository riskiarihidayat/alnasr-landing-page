import React from 'react'

import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='section-padding fixed top-0 right-0 left-0 z-50 pt-8 md:pt-20'>
      <div>
        <img src={logo} alt="AlNasr Logo" className='w-20 md:w-[143px]' />
      </div>
    </nav>
  )
}

export default Navbar