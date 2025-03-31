import React from 'react'
import { ImageContent, SectionContent, ServiceForm } from '../../components';
import { layoutContainer } from '../../utils/constant';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import kundaliVishleshanImg from "../../assets/images/kundali-vishleshan.webp"

const KundaliVishleshan = () => {

  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={kundaliVishleshanImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Kundali Vishleshan ━━"
              heading='Kundali Vishleshan – In-Depth Analysis of Your Life Path'
              description='Kundali Vishleshan (Horoscope Analysis) is a detailed examination of your Janam Kundali (Birth Chart) to understand the deeper aspects of your life. It provides clarity on your strengths, challenges, opportunities, and the influence of planetary movements on various life events.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full mt-10'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Kundali Vishleshan Important?</h4>
              A thorough Kundali analysis helps in:
              <div>
                <b className='text-[#0a122b]'>✔ Understanding Life Purpose – </b>Gain deep insights into your personality, karmic patterns, and life’s purpose.

              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Career & Success Guidance –</b>  Identify the right career path and professional opportunities.

              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Marriage & Relationship Compatibility –</b>  Analyze planetary alignments for a harmonious married life.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Health & Well-being – </b> Predict potential health issues and remedies.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Planetary Remedies –  </b>Neutralize negative influences through Vedic solutions.
              </div>
            </div>

            <ServiceForm />

          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>Our Kundali Vishleshan Services</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Planetary Position Analysis –</b>  Examining the placement of planets and their impact on life.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Dasha & Transit Reports –  </b>Understanding the influence of major planetary periods.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Career, Finance & Business Guidance –</b>  Insights into job, business, and financial stability.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Marriage & Relationship Compatibility – </b>  Kundali matching and guidance for a blissful relationship.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Astrological Remedies & Solutions –  </b>Gemstone recommendations, mantra chanting, yantras, and rituals for a balanced life.
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Your Kundali Analysis?</h4>
            <b> ✔ Share your Janam Kundali or birth details. </b>
            <b> ✔ Our astrologer will perform an in-depth analysis of planetary effects. </b>
            <b> ✔ Receive predictions and remedies for career, marriage, health, and finance. </b>

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

export default KundaliVishleshan;