import React from 'react';
import { layoutContainer, navItems, ourServicesFooterItem } from '../../utils/constant';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import logo from "../../assets/images/logo.png"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[0_0] sm:bg-[-800px_-800px]'>

            <div className={`${layoutContainer} flex flex-row justify-between w-full flex-wrap border-b-2 border-[#182036] pt-24`}>

                <div className='w-full sm:w-full md:w-1/4 flex flex-col gap-2 pb-[30px] justify-center sm:justify-start pr-0 sm:pr-2'>
                    <NavLink className="text-2xl font-bold text-[#ff7900]" to={'/'} onClick={scrollToTop}>
                        <img src={logo} alt='logo' className='block w-auto h-[85px] object-cover text-center sm:text-left' />
                    </NavLink>

                    {/* <NavLink className="text-2xl font-bold text-[#ff7900]" to={'/'} onClick={scrollToTop}>
                        <div className='flex flex-row gap-3 items-center justify-start select-none'>
                            <svg height="50" viewBox="0 0 40 58" ><defs id="SvgjsDefs6928"></defs><g id="SvgjsG6929" featurekey="symbolFeature-0" transform="matrix(0.6266894264227408,0,0,0.6266894264227408,-10.985833801993168,-2.754300017174794)" fill="#ff7900"><g xmlns="http://www.w3.org/2000/svg"><path fill="#ff7900" d="M27.984,42.838C45.23,25.729,47.746,11.361,41.939,4.395c0,0,43.898,18.04,18.077,59.882   c-4.42,7.105-15.459,15.498-9.688,32.793C50.327,97.07-4.908,81.605,27.984,42.838z"></path><path fill="#ff7900" d="M54.645,96.217c-0.944-3.51-5.154-11.154,7.686-26.359c6.861-8.104,11.557-25.906,9.27-30.157   c0,0,21.914,28.944-3.447,46.278C53.117,96.283,54.645,96.217,54.645,96.217z"></path></g></g>
                            </svg>

                            <div className='flex flex-col'>
                                <p className='font-extrabold text-[#0a122b] text-2xl'>Jyotish Sewa Kendra</p>
                                <span className='text-[#ff7900] font-semibold text-base'>Medini Kant Jha</span>
                            </div>

                        </div>
                    </NavLink> */}
                    <p className='text-[#0a122b] text-base font-medium text-center sm:text-left'> At <b>Jyotish Sewa Kendra</b>, we offer <b>40+ years</b> of expert Vedic astrology services, including Janam Kundali analysis, career guidance, relationship insights, and Vastu consultation. Let astrology bring clarity and balance to your life. </p>
                    <div className='flex flex-row gap-1 flex-wrap justify-center sm:justify-start'>
                        <a href="https://www.youtube.com/@PtMediniKantJha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
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
                                className={`p-1 text-base font-medium px-3 transition-all rounded-sm bg-transparent text-[#182036] hover:text-[#ff7900] pl-0  flex flex-row gap-2 items-center`}
                                onClick={scrollToTop}
                            >
                                <FaAngleRight fontSize={14} />
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
                                className={`p-1 text-base font-medium px-3 transition-all rounded-sm bg-transparent text-[#182036] hover:text-[#ff7900] pl-0 flex flex-row gap-2 items-center`}
                                onClick={scrollToTop}
                            >
                                <FaAngleRight fontSize={14} />
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