import React from 'react'

import FacilitiesCard from '../components/FacilitiesCard'
import { MdSafetyCheck, MdHotel, MdFastfood, MdCardMembership } from "react-icons/md"
import { IoLogoBuffer } from "react-icons/io5"
import { FaBusAlt } from "react-icons/fa"
import { GiHeartPlus } from "react-icons/gi"
import { BiSolidInjection } from "react-icons/bi"

const Facilities = () => {
  return (
    <section id='facilities' className='section-padding mb-36 md:mb-[180px]'>
      <div className='text-center mb-[50px]'>
        <h1 className='section-title'>Facilities We Provide For You </h1>
        <p className='section-description'>We provide comfort for our customers, with the various facilities we provide that we provide</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-9'>
        <FacilitiesCard
          icon={<MdSafetyCheck />}
          title='Safety & Security'
          description='We take care of your security in 24 hours'
        />
        <FacilitiesCard
          icon={<IoLogoBuffer />}
          title='Conseling'
          description='Provide counseling to stay fit spiritually and religius'
        />
        <FacilitiesCard
          icon={<FaBusAlt />}
          title='Vehicle In Saudi'
          description='Bus and Car Vehicles While in Saudi'
        />
        <FacilitiesCard
          icon={<GiHeartPlus />}
          title='Health In Saudi'
          description='Free Health Facilities for every customer'
        />
        <FacilitiesCard
          icon={<MdHotel />}
          title='Hostel Rate 5'
          description='5 star hotel accommodation every customer'
        />
        <FacilitiesCard
          icon={<MdFastfood />}
          title='Food & Drink'
          description='Provide food and drinks while in Saudi'
        />
        <FacilitiesCard
          icon={<MdCardMembership />}
          title='Membership'
          description='Obtain a membership card for each customer'
        />
        <FacilitiesCard
          icon={<BiSolidInjection />}
          title='Vaccine'
          description='Free meningitis vaccine for all customers'
        />
        {/* terusin isi facilities card */}
      </div>
    </section>
  )
}

export default Facilities