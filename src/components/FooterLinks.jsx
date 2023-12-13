import React from 'react'

const FooterLinks = ({ title, page1, page2, page3, page4, link1, link2, link3, link4 }) => {
  return (
    <div>
      <h5 className='section-title text-lg md:text-2xl text-white mb-5'>{title}</h5>
      <ul className='flex flex-col gap-[10px]'>
        <li><a href={page1} className='section-desription text-sm md:text-xl text-white font-medium hover:underline'>{link1}</a></li>
        <li><a href={page2} className='section-desription text-sm md:text-xl text-white font-medium hover:underline'>{link2}</a></li>
        <li><a href={page3} className='section-desription text-sm md:text-xl text-white font-medium hover:underline'>{link3}</a></li>
        <li><a href={page4} className='section-desription text-sm md:text-xl text-white font-medium hover:underline'>{link4}</a></li>
      </ul>
    </div>
  )
}

export default FooterLinks