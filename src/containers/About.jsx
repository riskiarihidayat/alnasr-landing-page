import React from 'react'

import 'react-lazy-load-image-component/src/effects/blur.css';
import about from './../assets/about.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaPlaneDeparture } from 'react-icons/fa'
import { HiTicket } from 'react-icons/hi2'
import { RiHotelFill } from 'react-icons/ri'
import { GrVisa } from 'react-icons/gr'

const About = () => {
  return (
    <section id='about' className='section-padding pt-20 md:pt-32 w-full md:flex md:items-center md:gap-11 mb-40 md:mb-52'>
      <div className='md:flex-1 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-start mb-10'>
        <h1 className='section-title mb-2 md:mb-4 md:leading-[140%]'>A Wonderful Agency To Fulfill your Dreams</h1>
        <p className='section-description mb-10 md:mb-6'>The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2006 and have obtained a license from SAUDI ARABIA to become this travel agency.</p>
        <ul className='flex flex-col gap-5 items-start mb-10'>
          {/* nambahin list di about */}
          <li className='flex items-center gap-6'>
            <FaPlaneDeparture className='icon' />
            <p className='section-description'>Flight Jakarta Saudi - Saudi Jakarta</p>
          </li>
          <li className='flex items-center gap-6'>
            <HiTicket className='icon' />
            <p className='section-description'>Tickets are included in the cost</p>
          </li>
          <li className='flex items-center gap-6'>
            <RiHotelFill className='icon' />
            <p className='section-description'>Comfortable hotel with a rating of 4</p>
          </li>
          <li className='flex items-center gap-6'>
            <GrVisa className='icon' />
            <p className='section-description'>We cover the Visa Fee and it's Included</p>
          </li>
        </ul>
        <div className='flex items-center gap-6 md:gap-10'>
          <a href="#" className='py-2 px-8 md:py-4 md:px-10 bg-yellow rounded-md font-nunito font-bold text-dark-grey-text text-sm md:text-xl'>Learn more</a>
          <a href="#" className='py-2 px-8 md:py-4 md:px-10 border-yellow border-[1px] rounded-md font-nunito font-bold text-yellow text-sm md:text-xl'>Contact us</a>
        </div>
      </div>
      <div className='md:flex-1 md:order-1 md:flex md:justify-end text-center'>
        <LazyLoadImage src={about} alt="Alnsar" className='w-[548px]' effect='blur' />
      </div>
    </section>
  )
}

export default About