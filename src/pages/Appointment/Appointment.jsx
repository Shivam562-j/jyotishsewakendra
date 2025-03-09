import React, { useState } from 'react';
import { layoutContainer } from '../../utils/constant';
import { Button } from '../../components';

const Appointment = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    service: "",
    message: "",
    address: "",
    date: "",
    dob: "",
    dop: "",
    gender: "",
    birthTime: "",
  });

  const handleFormChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

      <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

        <div className=' flex flex-col gap-2 justify-center items-center w-full mb-6'>

          <h4 className='text-[#182036] font-bold text-4xl'>Schedule Your Appointment</h4>
          <p className='text-base text-[#0a122b] text-center'>Please fill out the form below to book your appointment. Provide accurate details to help us serve you better. Our expert astrologer will connect with you at your chosen time to offer personalized guidance.
          </p>
        </div>

        <div className='flex flex-col gap-4 w-full'>

          <div className='flex flex-col sm:flex-row gap-2'>

            <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

          </div>

          <div className='flex flex-col sm:flex-row gap-2'>

            <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <select name='gender' value={formData?.gender || ""} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none'>
              <option value={""} disabled> Select a Gender </option>
              {["Male", "Female"]?.map((ser, index) => <option value={ser} key={index}
              >{ser}</option>)}
            </select>

          </div>

          <div className='flex flex-col sm:flex-row gap-2'>

            <input type='text' placeholder='Address' name='address' value={formData?.address} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <input type="text" name="dob" value={formData.dob} onChange={handleFormChange} placeholder="Date of Birth" className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />

          </div>

          <div className='flex flex-col sm:flex-row gap-2'>

            <input type="text" name="dop" value={formData.dop} onChange={handleFormChange} placeholder="Place of Birth " className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />

            <input type='text' placeholder='Birth Time' name='birthTime' value={formData?.birthTime} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

          </div>

          <div className='flex flex-col sm:flex-row gap-2'>

            <input type="text" name="date" value={formData.date} onChange={handleFormChange} placeholder="Date of Service" className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />

            <select name='service' value={formData?.service || ""} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none'>
              <option value={""} disabled> Select a Service </option>
              {["Janam Kundali", "Kundali Vishleshan", "Child Astrology", "Future Astrology", "Marriage Astrology", "Vastu Shastra", "Others"]?.map((ser, index) => <option value={ser} key={index}
              >{ser}</option>)}
            </select>
          </div>



          <textarea name='message' value={formData?.message} placeholder='Message' onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

          <Button onClick={handleFormSubmit}> Submit </Button>


        </div>


      </div>
    </section>
  )
}

export default Appointment;