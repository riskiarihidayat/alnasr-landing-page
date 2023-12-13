import React from 'react'

import image1 from './../assets/gallery-1.jpg'
import image2 from './../assets/gallery-2.jpg'
import image3 from './../assets/gallery-3.jpg'
import image4 from './../assets/gallery-4.jpg'
import image5 from './../assets/gallery-5.jpg'

const Gallery = () => {
  return (
    <section id='gallery' className='section-padding mb-[100px]'>
      <div className='text-center mb-[70px]'>
        <h1 className='section-title'>Gallery Footage In Saudi Arabia</h1>
        <p className='section-description'>We provide comfort for our customers, with the various facilities we provide that we provide</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-3 md:gap-6'>
        <img src={image1} alt="Footage from Saudi Arabia" className='gallery-image' />
        <img src={image2} alt="Footage from Saudi Arabia" className='gallery-image' />
        <img src={image3} alt="Footage from Saudi Arabia" className='gallery-image' />
        <img src={image4} alt="Footage from Saudi Arabia" className='gallery-image' />
        <img src={image5} alt="Footage from Saudi Arabia" className='gallery-image' />
        <img src={image1} alt="Footage from Saudi Arabia" className='gallery-image' />
      </div>
    </section>
  )
}

export default Gallery