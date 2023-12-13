import React from 'react'

import FooterLinks from '../components/FooterLinks';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from './../assets/footer-logo.svg'
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footer = () => {
  return (
    <footer className='section-padding pt-[60px] pb-7 bg-light-grey-text'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-6'>
        <div className='mb-14 md:mb-0'>
          <LazyLoadImage src={logo} alt="Alnasr Logo" className='w-[180px] md:w-[294px]' effect='blur' />
          <p className='section-description text-base text-white'>Comfortable and Quiet Worship, Our Service No. 1 in Indonesia</p>
        </div>
        <FooterLinks
          title='Quick Link'
          page1='#about'
          page2='#airplane'
          page3='#facilities'
          page4='#gallery'
          link1='About Us'
          link2='Flight Accommodation'
          link3='Facilities'
          link4='Gallery'
        />
        <FooterLinks
          title='Package Umrah'
          page1='#'
          page2='#'
          page3='#'
          page4='#'
          link1='Al Nasr Umrah Bronze'
          link2='Al Nasr Umrah Silver'
          link3='Al Nasr Umrah Gold'
          link4='Al Nasr Umrah Priority'
        />
        <FooterLinks
          title='Package Hajj'
          page1='#'
          page2='#'
          page3='#'
          link1='Al Nasr Hajj Diamond'
          link2='Al Nasr Hajj Platinum'
          link3='Al Nasr Hajj Priority'
        />
        <FooterLinks
          title='Office Place'
          page1='#'
          page2='#'
          page3='#'
          link1='Indonesia'
          link2='Saudi Arabia'
          link3='Uni Emirates Arab'
        />
      </div>
      <div className='relative md:flex md:justify-between md:items-center pt-8'>
        <span className='absolute top-0 right-0 left-0 w-full bg-white h-[2px] rounded-full'></span>
        <p className='section-description text-xs md:text-base text-white mb-4'>Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd</p>
        <ul className='flex items-center gap-3'>
          <li><a href="#"><AiFillInstagram className='icon text-xl md:text-2xl p-[3px] bg-white' /></a></li>
          <li><a href="#"><FaFacebook className='icon text-xl md:text-2xl p-[3px] bg-white' /></a></li>
          <li><a href="#"><FaTwitter className='icon text-xl md:text-2xl p-[3px] bg-white' /></a></li>
          <li><a href="#"><FaYoutube className='icon text-xl md:text-2xl p-[3px] bg-white' /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer