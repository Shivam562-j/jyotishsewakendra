import React from 'react';
import { SectionContent } from '../../components';
import { layoutContainer } from '../../utils/constant';
import { LuGoal } from "react-icons/lu";

const WhyChooseUs = () => {
    return (
        < section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]' >

            <div className={`${layoutContainer} py-14 flex flex-col-reverse sm:flex-row gap-5 justify-between items-center w-full border-[#182036] pt-24`}>

                <SectionContent
                    subHeadingColor="text-[#ff7900]"
                    headingColor="text-[#182036]"
                    descriptionColor="text-[#0a122b]"
                    subHeading="Why Choose Us? ━━"
                    heading='Trusted Astrology, Proven Guidance'
                    description="With 40+ years of expertise, we provide accurate astrological insights to guide your life decisions. Our personalized solutions, deep Vedic knowledge, and proven predictions ensure clarity, success, and peace of mind. Trusted by clients worldwide, we help you navigate challenges with confidence and unlock your true potential."
                    ctaText='About Medinikant Jha'
                />

                <div className='flex w-full lg:w-1/2 flex-col sm:flex-row md:flex-row flex-wrap'>

                    <div className="flex flex-col items-center gap-1 bg-white px-3 py-5 text-center duration-300 cursor-pointer w-full md:w-1/2 hover:shadow-md">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#ff7900] bg-[#ff7900] transition-all duration-300">
                            <LuGoal className="text-white text-4xl transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-2xl text-[#182036]">Accurate Predictions</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Our deep expertise ensures highly accurate astrological predictions to guide your decisions with clarity.
                        </p>

                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white shadow-md px-3 py-5 text-center duration-300 cursor-pointer w-full md:w-1/2 hover:shadow-xl">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#ff7900] bg-[#ff7900] transition-all duration-300">
                            <LuGoal className="text-white text-4xl transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-2xl text-[#182036]">Personalized Solutions</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We provide customized astrological remedies and insights based on your unique birth chart and life path.
                        </p>

                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white shadow-md px-3 py-5 text-center duration-300 cursor-pointer w-full hover:shadow-xl md:w-1/2">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#ff7900] bg-[#ff7900] transition-all duration-300">
                            <LuGoal className="text-white text-4xl transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-2xl text-[#182036]">40+ Years of Expertise
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            With over 40 years in Vedic astrology, we bring wisdom and reliability to every consultation.
                        </p>

                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white px-3 py-5 text-center duration-300 cursor-pointer w-full md:w-1/2 hover:shadow-md">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#ff7900] bg-[#ff7900] transition-all duration-300">
                            <LuGoal className="text-white text-4xl transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-2xl text-[#182036]">Satisfied Clients Worldwide
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Our astrological services have positively impacted clients across multiple countries, earning their trust and satisfaction.
                        </p>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default WhyChooseUs