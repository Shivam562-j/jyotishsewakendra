import React from 'react';
import { layoutContainer } from '../../utils/constant';
import { Form } from '../../components';

const Appointment = () => {

  return (
    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

      <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

        <div className=' flex flex-col gap-2 justify-center items-center w-full mb-6'>

          <h4 className='text-[#182036] font-bold text-4xl text-center'>Schedule Your Appointment</h4>
          <p className='text-base text-[#0a122b] text-center'>Please fill out the form below to book your appointment. Provide accurate details to help us serve you better. Our expert astrologer will connect with you at your chosen time to offer personalized guidance.
          </p>
        </div>

        <Form />


      </div>
    </section>
  )
}

export default Appointment;