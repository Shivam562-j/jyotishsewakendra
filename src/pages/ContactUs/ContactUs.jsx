import React from 'react';
import { layoutContainer } from '../../utils/constant';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const ContactUs = () => {
  return (
    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

      <div className={`${layoutContainer} py-14 flex flex-col-reverse sm:flex-row gap-5 justify-between w-full border-[#182036] pt-24`}>

        <div className='flex flex-col gap-4 w-full sm:w-1/2'>

          <div className=' flex flex-col gap-2'>

            <h4 className='text-[#182036] font-bold text-4xl'>Get In Touch</h4>
            <p className='text-base text-[#0a122b] '>Do not hesitate to reach out. Just fill in the contact form here and we’ll be sure to reply as fast as possible.
            </p>
          </div>

          <div className=' flex flex-col gap-2'>

            <h4 className='text-[#182036] font-bold text-2xl'>Visit Our Office</h4>
            <p className='text-base text-[#67768e] font-medium ml-2'>Jyotish Sewa Kendra ,Pandit Medinikant Jha, Nyanagar-Dudhpura road, Samastipur, Bihar,848101
            </p>
          </div>

          <div className=' flex flex-col gap-2'>

            <h4 className='text-[#182036] font-bold text-2xl'>Message Us</h4>
            <p className='text-base text-[#67768e] font-medium ml-2'> Jyotishsewakendra801@gmail.com </p>
            <p className='text-base text-[#67768e] font-medium ml-2'> +91 99399 67984 </p>
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

        <div className='flex flex-col gap-4 w-full sm:w-1/2'>

        </div>

      </div>
    </section>
  )
}

export default ContactUs;