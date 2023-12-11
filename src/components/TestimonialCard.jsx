import React from 'react'

const TestimonialCard = ({ img, rating, tagline, cusName, cusRatings }) => {
  return (
    <div>
      <div>
        <img src={img} alt="Customer" />
        <p>{rating}</p>
      </div>
      <div>
        <p>{tagline}</p>
        <p>{cusName}</p>
        <p>{cusRatings}</p>
      </div>
    </div>
  )
}

export default TestimonialCard