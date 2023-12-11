import React from 'react'

import TestimonialCard from '../components/TestimonialCard'
import customer1 from './../assets/customer-1.png'
import customer2 from './../assets/customer-2.png'
import customer3 from './../assets/customer-3.png'
import customer4 from './../assets/customer-4.png'


const Testimonial = () => {
  return (
    <section className='section-padding mb-56'>
      <div className='mb-16 text-end'>
        <h1 className='section-title mb-3'>Testimonials from our customers </h1>
        <p className='section-description'>We have 100.000+ customers, here are our customer testimonials</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-12'>
        <TestimonialCard
          img={customer1}
          rating='4.9'
          cusPackage='Al Nasr Umrah'
          cusName='Humaira Khaira'
          cusRatings="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
        />
        <TestimonialCard
          img={customer2}
          rating='4.9'
          cusPackage='Al Nasr Umrah'
          cusName='Hubi Khairuddin'
          cusRatings="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
        />
        <TestimonialCard
          img={customer3}
          rating='4.9'
          cusPackage='Al Nasr Hajj Platinum'
          cusName='Ray Gunawan'
          cusRatings="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
        />
        <TestimonialCard
          img={customer4}
          rating='4.9'
          cusPackage='Al Nasr Hajj'
          cusName='Indra Pratama'
          cusRatings="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
        />
      </div>
    </section>
  )
}

export default Testimonial