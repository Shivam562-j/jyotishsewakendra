import React, { useState } from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const ServiceForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNo: "",
        message: ""
    });
    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate();


    const handleFormChange = (e) => {

        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

    }

    const validateForm = () => {
        let newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.length < 3 || formData.name.length > 30) {
            newErrors.name = "Name must be between 3 and 30 characters";
        } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
            newErrors.name = "Only alphabets and spaces are allowed";
        }

        // Phone number validation
        if (!formData.mobileNo.trim()) {
            newErrors.mobileNo = "Phone number is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            navigate("/thank-you");
        }
    };

    return (
        <div className='w-full sm:w-1/2 flex flex-col gap-2'>

            <h4 className='text-[#182036] font-bold text-2xl'> Get Your Janam Kundali Today!</h4>
            <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />
            {errors.name && <p className="text-red-600 text-sm font-medium">{errors.name}</p>}

            <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />
            {errors.mobileNo && <p className="text-red-600 text-sm font-medium">{errors.mobileNo}</p>}

            <textarea name='message' value={formData?.message} placeholder='Message' onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

            <Button onClick={handleFormSubmit}> Submit </Button>

        </div>
    )
}

export default ServiceForm