import React from 'react'
import { ImageContent, SectionContent, ServiceForm } from '../../components';
import { layoutContainer } from '../../utils/constant';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import janamKundaliImg from "../../assets/images/janam-kundali.webp"


const JanamKundali = () => {
  
  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={janamKundaliImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Janam Kundali ━━"
              heading='Janam Kundali – Unlock the Secrets of Your Destiny'
              description='Your Janam Kundali (Birth Chart) is a cosmic blueprint of your life, created based on the date, time, and place of your birth. It reveals the influence of celestial bodies on your personality, career, relationships, health, and overall destiny.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full mt-10'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Janam Kundali Important?</h4>
              A properly analyzed Kundali helps in:
              <div>
                <b className='text-[#0a122b]'>✔ Understanding Personality & Strengths –</b> Gain insights into your nature, strengths, and weaknesses.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Career & Financial Growth –</b> Identify the right career path and financial opportunities.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Relationship Compatibility –</b> Assess compatibility for marriage and relationships.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Health & Well-being –</b> Predict potential health concerns and remedies.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Future Predictions & Remedies –</b> Navigate life’s challenges with the help of astrological guidance and Vedic remedies.
              </div>
            </div>

            <ServiceForm />

          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>Our Janam Kundali Services</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Detailed Kundali Analysis –</b>  Personalized interpretation of planetary positions and their impact.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Dasha & Transit Reports – </b> Analysis of planetary periods affecting different phases of life.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Career & Financial Guidance – </b> Choose the right career and financial decisions based on planetary influences.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Marriage & Relationship Compatibility – </b>Kundali matching for a happy and prosperous married life.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Astrological Remedies – </b>Gemstone recommendations, mantra chanting, yantras, and Vedic rituals for positivity and success.


            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Your Janam Kundali?</h4>
            <b> ✔ Provide your birth details (Date, Time, Place). </b>
            <b> ✔ Our expert astrologer will create your personalized Kundali based on Vedic astrology. </b>
            <b> ✔ Get a detailed report covering planetary positions, strengths, doshas, and remedies. </b>

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

export default JanamKundali;