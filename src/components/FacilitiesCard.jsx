import React from 'react'

const FacilitiesCard = ({ icon, title, description }) => {
  return (
    <div className='flex items-start gap-6 bg-white-bg p-4 md:p-5 rounded-lg shadow-facilities max-w-[282px]'>
      <div className='icon'>{icon}</div>
      <div>
        <h3 className='section-title font-semibold text-base md:text-xl'>{title}</h3>
        <p className='section-description font-medium text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default FacilitiesCard