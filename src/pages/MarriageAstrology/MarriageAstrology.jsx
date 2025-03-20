import React, { useState } from 'react'
import { AnimatedCount, Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, shortDetails } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";
import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import marriageAstrologyImg from "../../assets/images/marriage-astrology.webp"

const MarriageAstrology = () => {
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
              imgUrl1={marriageAstrologyImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="Marriage Astrology ━━"
              heading='Marriage Astrology – Find Your Perfect Life Partner with Astrological Guidance'
              description='Marriage Astrology is the ancient science of analyzing planetary positions to determine compatibility, the right time for marriage, and potential challenges in a relationship. It helps you make informed decisions for a happy and prosperous married life.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full mt-10'>

            <div className='text-base font-medium text-[#0a122b] w-full sm:w-1/2 flex flex-col gap-2'>
              <h4 className='text-[#ff7900] font-bold text-2xl'>Why is Marriage Astrology Important?</h4>
              <div>
                <b className='text-[#0a122b]'>✔ Ideal Marriage Timing: </b>  Discover the most auspicious time to get married.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔  Compatibility Analysis: </b>  Ensure a strong emotional and spiritual bond with your partner.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Love or Arranged Marriage: </b>  Understand the success and challenges of your marriage type.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Relationship Harmony: </b>   Resolve misunderstandings and strengthen marital life.
              </div>
              <div>
                <b className='text-[#0a122b]'>✔ Remedies for Delays: </b>  Get effective astrological solutions if your marriage is delayed.
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

            <h4 className='text-[#ff7900] font-bold text-2xl'>Our Marriage Astrology Services:</h4>
            <div>
              <b className='text-[#0a122b]'>🔹 Kundali Matching (Gun Milan) –</b> Matchmaking based on Vedic astrology principles.
            </div>
            <div>
              <b className='text-[#0a122b]'> 🔹 Manglik Dosha Analysis –   </b> Identify and resolve Manglik Dosha issues.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Love & Relationship Compatibility – </b>  Understand the strengths and weaknesses of your relationship.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Marriage Muhurat Consultation –   </b> Find the best wedding dates for lifelong happiness.
            </div>
            <div>
              <b className='text-[#0a122b]'>🔹 Post-Marriage Solutions –  </b> Remedies for marital disputes and relationship strengthening.

            </div>
          </div>

          <div className='flex flex-col gap-2 mt-5 justify-between w-full text-base font-medium text-[#0a122b]'>

            <h4 className='text-[#ff7900] font-bold text-2xl'>How to Get Your Marriage  Predictions?</h4>
            <b> ✔ Share your birth details (Date, Time, and Place of Birth). </b>
            <b> ✔ Our astrologer will analyze your Kundali and relationship aspects. </b>
            <b> ✔ Receive a detailed report with predictions and remedies. </b>

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

export default MarriageAstrology;