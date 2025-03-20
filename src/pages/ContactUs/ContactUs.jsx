import React from 'react';
import { layoutContainer } from '../../utils/constant';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Form } from '../../components';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {

  return (
    <>
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col sm:flex-row gap-5 justify-between w-full border-[#182036] pt-24`}>

          <Form isContactForm={true} />

          <div className='flex flex-col gap-4 w-full sm:w-1/2'>

            <div className=' flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-4xl'>Get In Touch</h4>
              <p className='text-base text-[#0a122b] '>Do not hesitate to reach out. Just fill in the contact form here and we’ll be sure to reply as fast as possible.
              </p>
            </div>

            <div className=' flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-2xl'>Visit Our Office</h4>
              <a href="https://maps.app.goo.gl/CsUSweMhXXv4GdfJ8" target="_blank" className='text-base text-[#67768e] font-medium ml-2 flex flex-row gap-1 items-start'><FaMapMarkerAlt color='#182036' className='mt-1' />Jyotish Sewa Kendra, Pandit Medinikant Jha, Nyanagar-Dudhpura road, Samastipur, Bihar, 848101
              </a>
            </div>

            <div className=' flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-2xl'>Message Us</h4>
              <a href="mailto:jyotishsewakendra801@gmail.com" target="_blank" className='text-base text-[#67768e] font-medium ml-2 flex flex-row gap-1 items-center'><MdEmail color="#182036" /> Jyotishsewakendra801@gmail.com </a>
              <a href="tel:+919939967984" className='text-base text-[#67768e] font-medium ml-2 flex flex-row gap-1 items-center cursor-pointer'> <FaPhoneAlt color="#182036"/> +91 99399 67984 </a>
            </div>

            <div className=' flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-2xl'>Follow Us</h4>
              <div className='flex flex-row gap-3 flex-wrap justify-center sm:justify-start'>
                <a href="https://www.youtube.com/@PtMediniKantJha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                  <IoLogoYoutube fontSize={20} />
                </a>
                <a href="https://www.facebook.com/ptmedinikantjha.jha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                  <FaFacebookF fontSize={20} />
                </a>
                <a href="https://www.instagram.com/pt.medinikant_jha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                  <RiInstagramFill fontSize={20} />
                </a>
                <a href="https://x.com/medini_jha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                  <FaXTwitter fontSize={20} />
                </a>
              </div>
            </div>



          </div>



        </div>
      </section>
      <div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1159235268674!2d85.7724392!3d25.865661799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed916bee7eb43d%3A0xb0d58386f885a3d5!2sJYOTISH%20SEWA%20KENDRA%20%2CPandit%20Medinikant%20Jha%2C%20Nyanagar-Dudhpura%20road%2C%20Samastipur%2C%20Bihar%2C848101!5e0!3m2!1sen!2sin!4v1740674219838!5m2!1sen!2sin"
          width="100%"
          height="375"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </>

  )
}

export default ContactUs;