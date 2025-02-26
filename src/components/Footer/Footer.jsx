import React from 'react';
import { layoutContainer } from '../../utils/constant';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

            <div className={`${layoutContainer} flex flex-row justify-between w-full flex-wrap border-b-2 border-[#182036] pt-24`}>

                <div className='w-full sm:w-full md:w-1/4 flex flex-col gap-2 pb-[30px]'>
                    <img src={`https://placehold.co/275x85`} alt='logo' />
                    <p className='text-[#0a122b] text-base font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quod harum nobis, nulla magni obcaecati? Dignissimos quas sed ad quod reiciendis facilis optio eaque.
                    </p>
                    <div className='flex flex-row gap-1 flex-wrap'>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <IoLogoYoutube fontSize={25} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <FaFacebookF fontSize={25} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <RiInstagramFill fontSize={25} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-3 bg-[#f2f3f9] rounded-full transition text-[#182036] hover:bg-[#ff7900] hover:text-[#fff]">
                            <FaXTwitter fontSize={25} />
                        </a>
                    </div>
                </div>

                <div className='w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-2 pb-[30px]'>2 Quick Links</div>
                <div className='w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-2 pb-[30px]'>3 Our Services</div>
                <div className='w-full sm:w-full md:w-1/4 flex flex-col gap-2 pb-[30px]'>4 Map</div>

            </div>

        </footer>
    )
}

export default Footer;