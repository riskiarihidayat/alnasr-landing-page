import React from 'react'

const PackageCard = ({ img, type, typeDes, title, price, service1, service2, service3, service4, service5 }) => {
  return (
    <div className='py-5 pl-4 md:py-7 md:pl-7 rounded-md bg-white-bg shadow-3xl'>
      <img src={img} alt="Umrah" className='mb-4 pr-7 w-[311px]' />
      <div className='text-start'>
        <div className='flex justify-between items-center mb-5'>
          <p className='font-nunito text-yellow text-sm md:text-xl'>{type}</p>
          <p className='font-nunito font-bold text-base text-light-grey-text py-[10px] px-[30px] rounded-l-full bg-light-grey'>{typeDes}</p>
        </div>
        <h3 className='section-title text-base mb-2'>{title}</h3>
        <p className='section-title text-xl mb-5'>{price}</p>
        <ul className='flex items-center gap-5 mb-10'>
          <li className='about-icon text-xl'>{service1}</li>
          <li className='about-icon text-xl'>{service2}</li>
          <li className='about-icon text-xl'>{service3}</li>
          <li className='about-icon text-xl'>{service4}</li>
          <li className='about-icon text-xl'>{service5}</li>
        </ul>
        <a href="#" className='py-2 px-8 md:py-4 md:px-10 border-yellow border-[1px] rounded-md font-nunito font-semibold text-yellow text-sm md:text-xl'>View Detail</a>
      </div>
    </div>
  )
}

export default PackageCard