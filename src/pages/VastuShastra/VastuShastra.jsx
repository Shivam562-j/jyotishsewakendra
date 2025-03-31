import React from 'react'
import { ImageContent, SectionContent, ServiceForm } from '../../components';
import { layoutContainer } from '../../utils/constant';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import vastuShastraImg from "../../assets/images/vastu-shastra.webp"

const VastuShastra = () => {

  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={vastuShastraImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Vastu Shastra ━━"
              heading='Vastu Shastra – Align Your Space for Prosperity and Harmony'
              description='Vastu Shastra is an ancient Indian architectural science that harmonizes your home, office, and surroundings with natural energies. By following Vastu principles, you can attract positivity, prosperity, and success into your life.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Vastu Shastra Important?</h4>
              <div>
                <b className='text-[#0a122b]'>✔ Balances Natural Energies – </b>  Aligns your space with cosmic forces for a peaceful environment.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Enhances Health & Well-Being – </b>   Promotes physical and mental wellness.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Attracts Wealth & Prosperity – </b>   Ensures financial growth and stability.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Improves Relationships – </b>   Strengthens family bonds and harmony.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Boosts Career & Success – </b>   Creates opportunities for professional growth.
              </div>
            </div>

            <ServiceForm />

          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>Our Vastu Shastra Services:</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Home Vastu Consultation –</b>  Optimize your living space for happiness and prosperity.
            </div>
            <div>
              <b className='text-[#0a122b]'> 🔹 Office & Business Vastu –   </b> Align your workplace for growth and productivity.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Industrial Vastu –  </b> Ensure stability and success in your business ventures.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Vastu for Plots & Constructions –  </b> Choose the right location and layout for long-term benefits.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹Vastu Remedies –  </b>  Effective solutions without structural changes.
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Your Vastu Consultation?</h4>
            <b> ✔ Share your property details and layout. </b>
            <b> ✔ Our Vastu expert will analyze the directions and energy flow. </b>
            <b> ✔ Receive a detailed report with suggestions and remedies. </b>

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

export default VastuShastra;