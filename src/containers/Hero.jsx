import React from 'react'

import hero from './../assets/hero.png'

const Hero = () => {
  return (
    <section className='section-padding pt-20 md:pt-32 w-full md:flex md:items-center md:gap-11 mb-36 md:mb-52'>
      <div className='md:flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-start mb-10'>
        <div className='px-10 py-2 bg-light-grey rounded-full mb-6 md:mb-9'>
          <p className='font-nunito font-medium text-light-grey-text text-xs md:text-2xl'>No. 1 in Indonesia</p>
        </div>
        <h1 className='section-title mb-2 md:mb-4 md:leading-[140%]'>Make it easy for your Umrah worship with Al Nasr Travel</h1>
        <p className='section-description mb-6 md:mb-6'>Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina</p>
        <a href="#" className='py-2 px-8 md:py-4 md:px-10 bg-yellow rounded-md text-dark-grey-text text-sm md:text-xl'>Contact us</a>
      </div>
      <div className='md:flex-1 md:flex md:justify-end text-center'>
        <img src={hero} alt="Abraj Al Bait Tower" className='w-[548px]' />
      </div>
    </section>
  )
}

export default Hero