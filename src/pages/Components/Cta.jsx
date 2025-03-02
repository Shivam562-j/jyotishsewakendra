import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import bgImage from "../../assets/images/bg.png";
import { layoutContainer } from '../../utils/constant';


const Cta = () => {
    return (
        <section
            className="relative w-full h-full bg-transparent"
            style={{
                backgroundImage: `linear-gradient(220deg, #0a122b 38%, #0a122b 0%)`,
            }}
        >
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 transition-opacity duration-300"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div
                className={`${layoutContainer} relative z-10 py-14 flex flex-row flex-wrap gap-8 justify-between w-full border-[#182036]`}
            >

                <div className='flex flex-col gap-2 w-full sm:w-full lg:w-3/5'>

                    <p className='text-3xl font-bold text-[#fff] w-full'>Get Personalized Astrological Guidance!</p>
                    <h5 className='text-base text-[#eee] w-full'>Have questions about your future? Connect with our expert astrologer for accurate insights and life-changing advice.</h5>

                </div>

                <div>
                    <a target='_blank' href={'https://api.whatsapp.com/send?phone=+919431425134&text=Hi%20Jyotish%20Sewa%20Kendra%20from%20Website'}
                    className='bg-[#02c100] text-[#fff] px-[30px] py-[15px] text-base rounded flex flex-row gap-2 items-center cursor-pointer font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit'
                    > <RiWhatsappFill fontSize={24} /> Chat with Us on WhatsApp</a>
                </div>


            </div>
        </section>)
}

export default Cta