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
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleFormChange = (e) => {

        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

    };

    const validateForm = () => {
        let newErrors = {};

        if (isContactForm && !formData.firstName.trim()) newErrors.firstName = "First name is required";
        // if (isContactForm && !formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!isContactForm && !formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";

        if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required";

        // if (!formData.service) newErrors.service = "Please select a service";

        // if (!isContactForm) {
        //     if (!formData.gender) newErrors.gender = "Please select a gender";
        //     if (!formData.dob.trim()) newErrors.dob = "Date of Birth is required";
        //     if (!formData.dop.trim()) newErrors.dop = "Place of Birth is required";
        //     if (!formData.birthTime.trim()) newErrors.birthTime = "Birth time is required";
        //     if (!formData.date.trim()) newErrors.date = "Date of Service is required";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate("/thank-you");
        }
    };
    return (
        <div className={`flex flex-col gap-4 w-full ${isContactForm ? 'sm:w-1/2' : ""}`}>

            {isContactForm == true && <div className='flex flex-col sm:flex-row gap-2'>

                <div className='w-full sm:w-1/2 flex flex-col gap-1'>
                    <input type='text' placeholder='First Name' name='firstName' value={formData?.firstName} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />
                    {errors.firstName && <p className="text-red-600 text-sm font-medium">{errors.firstName}</p>}
                </div>

                <input type='text' placeholder='Last Name' name='lastName' value={formData?.lastName} onChange={handleFormChange} className='w-full sm:w-1/2 px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none self-start' />

            </div>}

            <div className='flex flex-col sm:flex-row gap-2'>

                {isContactForm === false &&
                    <div className='w-full sm:w-1/2 flex flex-col gap-1'>
                        <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />
                        {errors.name && <p className="text-red-600 text-sm font-medium">{errors.name}</p>}
                    </div>
                }

                <div className={`${isContactForm == false ? "sm:w-1/2 " : ""} w-full flex flex-col gap-1`}>
                    <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className={`w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none`} />
                    {errors.email && <p className="text-red-600 text-sm font-medium">{errors.email}</p>}
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-2'>

                <div className={`${isContactForm == false ? "sm:w-1/2 " : ""} w-full flex flex-col gap-1`}>
                    <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className={`w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none`} />
                    {errors.mobileNo && <p className="text-red-600 text-sm font-medium">{errors.mobileNo}</p>}
                </div>

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