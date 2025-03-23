import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const Form = ({ isContactForm = false }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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
    const navigate = useNavigate();

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
        navigate('/thank-you');
    };
    return (
        <div className={`flex flex-col gap-4 w-full ${isContactForm ? 'sm:w-1/2' : ""}`}>

            {isContactForm == true && <div className='flex flex-col sm:flex-row gap-2'>

                <input type='text' placeholder='First Name' name='firstName' value={formData?.firstName} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

                <input type='text' placeholder='Last Name' name='lastName' value={formData?.lastName} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            </div>}

            <div className='flex flex-col sm:flex-row gap-2'>

                {isContactForm === false && <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />}

                <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className={`${isContactForm == false ? "sm:w-1/2 " : ""} w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none`} />

            </div>

            <div className='flex flex-col sm:flex-row gap-2'>

                <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className={`${isContactForm == false ? "sm:w-1/2 " : ""} w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none`} />

                {isContactForm == false &&
                    <select name='gender' value={formData?.gender || ""} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none'>
                        <option value={""} disabled> Select a Gender </option>
                        {["Male", "Female"]?.map((ser, index) => <option value={ser} key={index}
                        >{ser}</option>)}
                    </select>
                }

            </div>

            {isContactForm == false &&
                <>
                    <div className='flex flex-col sm:flex-row gap-2'>

                        <input type='text' placeholder='Address' name='address' value={formData?.address} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

                        <input type="text" name="dob" value={formData.dob} onChange={handleFormChange} placeholder="Date of Birth" className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />

                    </div>

                    <div className='flex flex-col sm:flex-row gap-2'>

                        <input type="text" name="dop" value={formData.dop} onChange={handleFormChange} placeholder="Place of Birth " className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />

                        <input type='text' placeholder='Birth Time' name='birthTime' value={formData?.birthTime} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

                    </div>
                </>
            }

            <div className='flex flex-col sm:flex-row gap-2'>

                {isContactForm == false && <input type="text" name="date" value={formData.date} onChange={handleFormChange} placeholder="Date of Service" className="w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none" />}

                <select name='service' value={formData?.service || ""} onChange={handleFormChange} className={`${isContactForm == false ? "sm:w-1/2 " : ""} w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none`}>
                    <option value={""} disabled> Select a Service </option>
                    {["Janam Kundali", "Kundali Vishleshan", "Child Astrology", "Future Astrology", "Marriage Astrology", "Vastu Shastra", "Others"]?.map((ser, index) => <option value={ser} key={index}
                    >{ser}</option>)}
                </select>
            </div>



            <textarea name='message' value={formData?.message} placeholder='Message' onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <Button onClick={handleFormSubmit}> Submit </Button>


        </div>
    )
}

export default Form