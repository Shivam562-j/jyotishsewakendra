import React from 'react'
import { ImageContent, SectionContent, ServiceForm } from '../../components';
import { layoutContainer } from '../../utils/constant';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import futureAstrologyImg from "../../assets/images/future-astrology1.webp"

const FutureAstrology = () => {

  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={futureAstrologyImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Future Astrology ━━"
              heading='Future Astrology – Unlock the Secrets of Your Destiny'
              description='Future Astrology is a powerful Vedic science that helps you gain deep insights into your future based on planetary movements, birth charts, and cosmic influences. Through this, you can prepare for upcoming opportunities, overcome challenges, and make well-informed decisions for a successful life.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full mt-10'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Future Astrology Important?</h4>
              <div>
                <b className='text-[#0a122b]'>✔ Career & Finance:</b>  Get guidance on career growth, job changes, and financial stability.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Health Predictions:</b>  Understand potential health risks and remedies for a healthier life.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Marriage & Relationships:  </b>Know the ideal time for marriage and compatibility analysis.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Business Success: </b> Plan investments and business ventures with astrological insights.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Life Challenges:</b> Identify and overcome obstacles with effective astrological solutions.
              </div>
            </div>

            <ServiceForm />

          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>Our Future Astrology Services</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Personalized Horoscope Analysis –</b>  Detailed study of your Kundali for future predictions.
            </div>
            <div>
              <b className='text-[#0a122b]'> 🔹 Dasha & Transit Reports –  </b> Insights into planetary movements affecting your life.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Remedial Solutions – </b>  Gemstone recommendations, mantra chanting, and rituals for positive outcomes.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Yearly Forecasts –  </b> Predictions for the coming months and years.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Vastu & Muhurat Consultation –  </b>Find auspicious timings and directions for important life events.


            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Your Future Predictions?</h4>
            <b> ✔ Share your birth details (Date, Time, and Place of Birth). </b>
            <b> ✔ Our expert astrologer will analyze your planetary positions. </b>
            <b> ✔ Receive a detailed future prediction report and personalized remedies. </b>

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

export default FutureAstrology;