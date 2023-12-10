import React from 'react'

import PackageCard from '../components/PackageCard'
import package1 from './../assets/package-1.png'
import package2 from './../assets/package-2.png'
import package3 from './../assets/package-3.png'
import { FaPlaneDeparture } from 'react-icons/fa'
import { HiTicket } from 'react-icons/hi2'
import { RiHotelFill } from 'react-icons/ri'
import { GrVisa } from 'react-icons/gr'
import { MdFastfood } from 'react-icons/md'

const Package = () => {
  return (
    <section id='package' className='section-padding mb-24'>
      <div className='mb-10 md:mb-[72px] md:px-40 text-center'>
        <h1 className='section-title leading-[140%]'>Al Nasr Special Umrah and Hajj Packages</h1>
        <p className='section-description md:px-20'>Choose your package according to your needs, guaranteed cheap and complete</p>
      </div>
      <div className='flex justify-center items-center gap-[78px] flex-wrap'>
        <PackageCard
          img={package1}
          type='Bronze'
          typeDes='Best Seller'
          title='Al Nasr Special Umrah 9 Days'
          price='$ 1,950/ person'
          service1={<FaPlaneDeparture />}
          service2={<HiTicket />}
          service3={<RiHotelFill />}
          service4={<GrVisa />}
        />
        <PackageCard
          img={package2}
          type='Silver'
          typeDes='Special Seller'
          title='Al Nasr Special Umrah 17 Days'
          price='$ 2,750/ person'
          service1={<FaPlaneDeparture />}
          service2={<HiTicket />}
          service3={<RiHotelFill />}
          service4={<GrVisa />}
        />
        <PackageCard
          img={package3}
          type='Gold'
          typeDes='Long Trip'
          title='Al Nasr Special Umrah 25 Days'
          price='$ 4,250/ person'
          service1={<FaPlaneDeparture />}
          service2={<HiTicket />}
          service3={<RiHotelFill />}
          service4={<GrVisa />}
          service5={<MdFastfood />}
        />
        <PackageCard
          img={package1}
          type='Diamond'
          typeDes='Best Seller'
          title='Al Nasr Special Hajj 30 Days'
          price='$ 20,000/ person'
          service1={<FaPlaneDeparture />}
          service2={<HiTicket />}
          service3={<RiHotelFill />}
          service4={<GrVisa />}
          service5={<MdFastfood />}
        />
        <PackageCard
          img={package2}
          type='Platinum'
          typeDes='Special Offering'
          title='Al Nasr Special Hajj 30 Days'
          price='$ 25,000/ person'
          service1={<FaPlaneDeparture />}
          service2={<HiTicket />}
          service3={<RiHotelFill />}
          service4={<GrVisa />}
          service5={<MdFastfood />}
        />
      </div>
    </section>
  )
}

export default Package