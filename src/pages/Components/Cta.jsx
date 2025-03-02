import React from 'react'
import { Button } from '../../components'
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
                    <Button isWhatsApp={true}>Chat with Us on WhatsApp</Button>
                </div>


            </div>
        </section>)
}

export default Cta