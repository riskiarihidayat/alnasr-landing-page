import React, { useState } from 'react'

import logo from './../assets/logo.svg'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  let [isOpen, setisOpen] = useState(false)

  return (
    <nav className='section-padding fixed top-0 right-0 left-0 z-50 py-6 md:pt-8 bg-white'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt="AlNasr Logo" className='w-16 md:w-[143px]' />
        <ul className='hidden md:flex justify-center items-center gap-8'>
          <li><a href="#" className='nav-links text-yellow'>Home</a></li>
          <li><a href="#" className='nav-links'>About Us</a></li>
          <li><a href="#" className='nav-links'>Package</a></li>
          <li><a href="#" className='nav-links'>Facilities</a></li>
          <li><a href="#" className='nav-links'>Gallery</a></li>
        </ul>
        <div className='hidden md:flex'>
          <a href="#" className='py-4 px-9 bg-yellow rounded-md text-dark-grey-text md:text-xls'>Contact us</a>
        </div>
        <div onClick={() => setisOpen(!isOpen)} className='md:hidden'>
        {
          isOpen ? <FaXmark className='nav-icon' /> : <FaBars className='nav-icon' />
        }
        </div>
      </div> 
      <div className={`absolute right-0 left-0 bottom-0 ${isOpen ? 'top-16' : 'top-[-1110%]'} w-full h-screen bg-white duration-700 -z-10 md:hidden`}>
        <ul className='flex flex-col justify-center items-center gap-4 md:flex-row pb-40'>
          <li><a href="#" className='nav-links text-yellow'>Home</a></li>
          <li><a href="#" className='nav-links'>About Us</a></li>
          <li><a href="#" className='nav-links'>Package</a></li>
          <li><a href="#" className='nav-links'>Facilities</a></li>
          <li><a href="#" className='nav-links'>Gallery</a></li>
        </ul>
        <div className='text-center'>
          <a href="#" className='py-3 px-6 bg-yellow rounded-md text-dark-grey-text text-base md:text-xls'>Contact us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

//  <div className={`absolute left-0 right-0 bottom-0 bg-white w-full h-screen ease-in-out duration-700 -z-10 md:flex md:items-center md:w-0 md:relative md:top-0`}>
//           {/* selesaikan responive navbar untuk desktop */}
//           
//           <div className='text-center'>
//             <a href="#" >Contact us</a>
//           </div>
//         </div> 