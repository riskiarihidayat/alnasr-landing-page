import React from 'react'

import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({ img, rating, cusPackage, cusName, cusRatings }) => {
  return (
    <div className='flex justify-center items-start gap-6 p-5 rounded-2xl bg-white-bg shadow-facilities max-w-[476px]'>
      <div>
        <img src={img} alt="Customer" className='w-[100px] mb-4' />
        <p className='flex items-center gap-[6px] font-nunito font-semibold text-sm text-light-grey-text py-[5px] px-[10px] rounded-full bg-light-grey'>
          <FaStar className='text-yellow' />
          {rating}
        </p>
      </div>
      <div className='flex flex-col items-start flex-wrap'>
        <p className='font-nunito font-semibold text-sm text-light-grey-text py-[8px] px-[20px] rounded-full bg-light-grey mb-4'>{cusPackage}</p>
        <p className='section-title font-semibold text-2xl'>{cusName}</p>
        <p className='section-description font-medium text-sm'>{cusRatings}</p>
      </div>
    </div>
  )
}

export default TestimonialCard