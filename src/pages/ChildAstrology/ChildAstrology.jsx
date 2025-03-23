import React, { useState } from 'react'
import { Button, ImageContent, SectionContent, ServiceForm } from '../../components';
import { layoutContainer } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";
import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import childAstrologyImg from "../../assets/images/child-astrology.webp"

const ChildAstrology = () => {

  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={childAstrologyImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Child Astrology ━━"
              heading='Child Astrology – Unveiling Your Child’s Future'
              description="Child astrology (Bal Jyotish) helps parents understand their child’s personality, strengths, weaknesses, and future possibilities. By analyzing the child’s birth chart (Janam Kundali), astrologers can provide deep insights into their education, career, health, and overall well-being."
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full mt-10'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Child Astrology Important?</h4>
              Every child is unique, and their planetary positions influence their behavior, intelligence, and success. Child astrology helps parents:
              <div> ✔  Identify their child's natural talents and abilities. </div>
              <div> ✔  Understand their emotional and intellectual development. </div>
              <div> ✔  Get guidance on education and career choices. </div>
              <div> ✔  Prevent potential challenges related to health or relationships. </div>
              <div> ✔  Strengthen their child’s future with astrological remedies. </div>

            </div>

            <ServiceForm />

          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>Key Aspects of Child Astrology</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Janam Kundali Analysis –</b>  A detailed examination of planetary positions at birth.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Education & Intelligence –   </b> Predictions about academic performance and learning abilities.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Career Guidance – </b>  Identifying the best career paths based on planetary influences.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Health & Well-being –  </b>Insights into health concerns and suitable remedies.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Behavioral Traits –  </b> Understanding temperament, strengths, and weaknesses.
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Child Astrology Guidance?</h4>
            <b> ✔ Provide the child’s birth details for accurate analysis. </b>
            <b> ✔ Get insights on health, education, personality, and future success. </b>
            <b> ✔ Receive astrological remedies for a bright and prosperous future. </b>

            <div className='flex flex-row gap-3 flex-wrap-reverse mt-5'>


              <a href="tel:+919939967984" target='_blank' className='cursor-pointer bg-[#ff7900] text-[#fff] px-[30px] py-[15px] text-base font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit flex gap-2 flex-row items-center'> <FaPhoneAlt fontSize={14} /> Call Us</a>

              <a target='_blank' href={'https://api.whatsapp.com/send?phone=+919431425134&text=Hi%20Jyotish%20Sewa%20Kendra%20from%20Website'}
                className='bg-[#02c100] text-[#fff] px-[30px] py-[15px] text-base rounded flex flex-row gap-2 items-center cursor-pointer font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit'
              > <RiWhatsappFill fontSize={24} /> Chat with Us on WhatsApp</a>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default ChildAstrology;