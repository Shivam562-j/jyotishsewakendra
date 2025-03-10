import React, { useState } from 'react'
import { AnimatedCount, Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, shortDetails } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";

const FutureAstrology = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: ""
  })

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

export default FutureAstrology;