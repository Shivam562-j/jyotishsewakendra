import React, { useState } from 'react'
import { AnimatedCount, Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, shortDetails } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";
import { FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const VastuShastra = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: ""
  })
  const navigate = useNavigate();


  const handleFormChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    navigate('/thank-you');
  };

  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1="https://placehold.co/40x208"
              imgUrl2="https://placehold.co/263x208"
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

            <div className='w-full sm:w-1/2 flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-2xl'> Quick Contact</h4>
              <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <textarea name='message' value={formData?.message} placeholder='Message' onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <Button onClick={handleFormSubmit}> Submit </Button>

            </div>

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


      {/* short why chhose us section  */}
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
          className={`${layoutContainer} relative z-10 py-14 flex flex-row flex-wrap gap-8 justify-between w-full border-[#182036] pt-24`}
        >

          {shortDetails.map((item) => <div key={item.name} className='flex flex-col items-center gap-2'>
            {/* <p className='text-7xl font-extrabold text-[#ff7900]'>{item?.name}</p> */}
            <AnimatedCount value={item.name} />
            <span className='text-3xl font-semibold text-[#fff]'>{item?.description}</span>
          </div>)}

        </div>

      </section>

    </div>
  )
}

export default VastuShastra;