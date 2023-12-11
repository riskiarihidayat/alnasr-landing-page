import React from 'react'

import TestimonialCard from '../components/TestimonialCard'
import customer1 from './../assets/customer-1.png'
import customer2 from './../assets/customer-2.png'
import customer3 from './../assets/customer-3.png'
import customer4 from './../assets/customer-4.png'


const Testimonial = () => {
  return (
    <section className='section-padding'>
      <div className='mb-16 text-end'>
        <h1 className='section-title mb-3'>Testimonials from our customers </h1>
        <p className='section-description'>We have 100.000+ customers, here are our customer testimonials</p>
      </div>
      <div>
        <TestimonialCard
          img={customer1}
          rating=''
          tagline=''
          cusName=''
          cusRatings=''
        />
        <TestimonialCard
          img={customer2}
          rating=''
          tagline=''
          cusName=''
          cusRatings=''
        />
        <TestimonialCard
          img={customer3}
          rating=''
          tagline=''
          cusName=''
          cusRatings=''
        />
        <TestimonialCard
          img={customer4}
          rating=''
          tagline=''
          cusName=''
          cusRatings=''
        />
      </div>
    </section>
  )
}

export default Testimonial