import React from 'react';
import { layoutContainer, navItems, ourServicesFooterItem } from '../../utils/constant';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[0_0] sm:bg-[-800px_-800px]'>

            <div className={`${layoutContainer} flex flex-row justify-between w-full flex-wrap border-b-2 border-[#182036] pt-24`}>

                <div className='w-full sm:w-full md:w-1/4 flex flex-col gap-2 pb-[30px] justify-center sm:justify-start'>
                    <img src={`https://placehold.co/275x85`} alt='logo' className='block w-[245px] h-[85px] object-cover text-center sm:text-left' />
                    <p className='text-[#0a122b] text-base font-medium text-center sm:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quod harum nobis, nulla magni obcaecati? Dignissimos quas sed ad quod reiciendis facilis optio eaque.
                    </p>
                    <div className='flex flex-row gap-1 flex-wrap justify-center sm:justify-start'>
                        <a  href="https://www.youtube.com/@PtMediniKantJha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <IoLogoYoutube fontSize={25} />
                        </a>
                        <a href="https://www.facebook.com/ptmedinikantjha.jha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <FaFacebookF fontSize={25} />
                        </a>
                        <a href="https://www.instagram.com/pt.medinikant_jha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <RiInstagramFill fontSize={25} />
                        </a>
                        <a href="https://x.com/medini_jha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <FaXTwitter fontSize={25} />
                        </a>
                    </div>
                </div>

                <div className='w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-2 pb-[30px]'>

                    <p className='text-2xl font-bold text-[#182036]'>Quick Links</p>

                    <div className='flex flex-col gap-1'>
                        {navItems.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={`p-1 text-base font-medium px-3 transition-all rounded-sm bg-transparent text-[#182036] hover:text-[#ff7900] pl-0`}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                </div>
                <div className='w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-2 pb-[30px]'>
                    <p className='text-2xl font-bold text-[#182036]'>Our Services</p>

                    <div className='flex flex-col gap-1'>
                        {ourServicesFooterItem.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={`p-1 text-base font-medium px-3 transition-all rounded-sm bg-transparent text-[#182036] hover:text-[#ff7900] pl-0`}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className='w-full sm:w-full md:w-1/4 flex flex-col gap-2 pb-[30px]'>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1159235268674!2d85.7724392!3d25.865661799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed916bee7eb43d%3A0xb0d58386f885a3d5!2sJYOTISH%20SEWA%20KENDRA%20%2CPandit%20Medinikant%20Jha%2C%20Nyanagar-Dudhpura%20road%2C%20Samastipur%2C%20Bihar%2C848101!5e0!3m2!1sen!2sin!4v1740674219838!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

            <div className={`text-center py-2 ${layoutContainer}`}>
                Copyright &copy; 2020 - {new Date().getFullYear()} <a href="/" className='no-underline font-medium'>Jyotish Sewa Kendra</a> | All Rights Reserved.
            </div>

        </footer>
    )
}

export default Footer;