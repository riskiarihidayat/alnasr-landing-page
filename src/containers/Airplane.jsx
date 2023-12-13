import React, { useState } from 'react'

import 'react-lazy-load-image-component/src/effects/blur.css';
import plane1 from './../assets/plane-1.svg'
import plane2 from './../assets/plane-2.svg'
import plane3 from './../assets/plane-3.svg'
import plane4 from './../assets/plane-4.svg'
import plane5 from './../assets/plane-5.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaStar } from 'react-icons/fa'

const Airplane = () => {
  return (
    <section id='airplane' className='section-padding mb-32 md:mb-[187px]'>
      <div className='flex flex-col justify-center items-center text-center mb-10'>
        <h2 className='section-title text-2xl md:text-[32px] mb-[10px]'>Airways Accomadation</h2>
        <p className='section-description mb-5 px-5'>We cooperate with several airlines for Umrah and Hajj </p>
        <p className='font-nunito font-bold text-base text-light-grey-text py-[10px] px-[30px] rounded-full bg-light-grey flex items-center gap-[6px]'>
          <FaStar className='text-yellow' />
          5.0 Rating
        </p>
      </div>
        <ul className='flex flex-col flex-wrap md:flex-row justify-center items-center gap-[50px]'>
          <li><LazyLoadImage src={plane1} alt="Airlines" className='h-[45px] md:h-[77px]' effect='blur' /></li>
          <li><LazyLoadImage src={plane2} alt="Airlines" className='h-[45px] md:h-[77px]' effect='blur' /></li>
          <li><LazyLoadImage src={plane3} alt="Airlines" className='h-[45px] md:h-[77px]' effect='blur' /></li>
          <li><LazyLoadImage src={plane4} alt="Airlines" className='h-[45px] md:h-[77px]' effect='blur' /></li>
          <li><LazyLoadImage src={plane5} alt="Airlines" className='h-[45px] md:h-[77px]' effect='blur' /></li>
        </ul>
    </section>
  )
}

export default Airplane