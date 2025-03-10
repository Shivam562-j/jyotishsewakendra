import React, { useState } from 'react'
import { AnimatedCount, Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, shortDetails } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";

const KundaliVishleshan = () => {
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
              subHeading="Kundali Vishleshan ━━"
              heading='Kundali Vishleshan – In-Depth Analysis of Your Life Path'
              description='Kundali Vishleshan (Horoscope Analysis) is a detailed examination of your Janam Kundali (Birth Chart) to understand the deeper aspects of your life. It provides clarity on your strengths, challenges, opportunities, and the influence of planetary movements on various life events.'
              ctaText={false}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

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

            <div className='w-full sm:w-1/2 flex flex-col gap-2'>

              <h4 className='text-[#182036] font-bold text-2xl'> Get Your Personalized Kundali Vishleshan!</h4>
              <input type='text' placeholder='Name' name='name' value={formData?.name} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <input type='email' placeholder='Email' name='email' value={formData?.email} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <input type='number' placeholder='Phone No.' name='mobileNo' value={formData?.mobileNo} onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <textarea name='message' value={formData?.message} placeholder='Message' onChange={handleFormChange} className='w-full px-2 py-3 pl-3 bg-white border-black border shadow-inner rounded hover:outline-none focus:outline-none' />

              <Button onClick={handleFormSubmit}> Submit </Button>

            </div>

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

export default KundaliVishleshan;