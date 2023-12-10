import React from 'react'

import plane1 from './../assets/plane-1.svg'
import plane2 from './../assets/plane-2.svg'
import plane3 from './../assets/plane-3.svg'
import plane4 from './../assets/plane-4.svg'
import plane5 from './../assets/plane-5.svg'
import { FaStar } from 'react-icons/fa'

const Airplane = () => {
  return (
    <section className='section-padding mb-32'>
      <div className='flex flex-col justify-center items-center text-center mb-10'>
        <h2 className='section-title text-2xl md:text-[32px] mb-[10px]'>Airways Accomadation</h2>
        <p className='section-description mb-5 px-5'>We cooperate with several airlines for Umrah and Hajj </p>
        <p className='font-nunito font-bold text-base text-light-grey-text py-[10px] px-[30px] rounded-full bg-light-grey flex items-center gap-[6px]'>
          <FaStar className='text-yellow' />
          5.0 Rating
        </p>
      </div>
        <marquee direction="left">
          <div className='flex items-center gap-[50px]'>
            <img src={plane1} alt="Garuda Indonesia Airlines" className='h-[77px] object-cover' />
            <img src={plane2} alt="Garuda Indonesia Airlines" className='h-[77px] object-cover' />
            <img src={plane3} alt="Garuda Indonesia Airlines" className='h-[77px] object-cover' />
            <img src={plane4} alt="Garuda Indonesia Airlines" className='h-[77px] object-cover' />
            <img src={plane5} alt="Garuda Indonesia Airlines" className='h-[77px] object-cover' />
          </div>
        </marquee>
    </section>
  )
}

export default Airplane