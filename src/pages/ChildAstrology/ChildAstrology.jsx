import React, { useState } from 'react'
import { AnimatedCount, Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, shortDetails } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";

const ChildAstrology = () => {
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

export default ChildAstrology;