import React from 'react'
import Banner from '../Components/Banner';
import { layoutContainer, shortDetails } from '../../utils/constant';
import { AnimatedCount, ImageContent, SectionContent } from '../../components';
import bgImage from "../../assets/images/bg.png";
import WhyChooseUs from '../Components/WhyChooseUs';
import aboutUsImg from "../../assets/images/about-us.png"


const AboutUs = () => {
  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1={aboutUsImg}
              imgUrl2={false}
              className='flex-row p-0 h-full'
              isAboutImg={true}
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="About Us ━━"
              heading='Medinikant Jha – 40+ Years of Astrological Expertise'
              description='Greetings! I am Medinikant Jha, a dedicated and experienced astrologer with over 35 years of deep knowledge and practice in the ancient science of astrology. My journey has helped me understand the profound influence of celestial forces on human life, enabling me to guide individuals towards positive transformations.'
              ctaText={false}
            />
          </div>
          <p className='text-base font-medium text-[#0a122b]'>

            <b className='text-[#ff7900]'>Specialization:</b> I specialize in Vedic astrology, horoscope analysis, relationship guidance, career counseling, and personal development. I have developed a keen ability to identify the internal forces influencing your life and provide personalized guidance. I also recommend astrological remedies based on planetary positions and alignments, helping you achieve success and balance in various areas of life.
            <br />
            <br />
            <b className='text-[#ff7900]'>Vision and Belief:</b> I believe that astrology is not just about predicting the future, but about offering deeper insights into the universal truths of life. “Astrology provides a new perspective on life, and with wisdom and effort, we can shape our destiny.” This belief shapes the way I approach my practice. I aim to help every individual become aware of their strengths and challenges, leading them towards a path of clarity, balance, and fulfillment.
            <br />
            <br />
            <b className='text-[#ff7900]'>Vision:</b> My approach is holistic and personalized, ensuring that I understand the unique needs and goals of each individual. I believe that astrology is a tool not only for predicting the future but for enhancing the present and creating a more meaningful and successful life. Through astrological guidance, I empower you to make informed decisions and live a life that reflects your true potential.
            <br />
            <br />
            Your life is a unique journey, and my goal is to help you understand it fully and navigate it with confidence. I am committed to guiding you towards a life filled with peace, success, and balance, so that you can realize your fullest potential and make your life truly meaningful.
          </p>

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

      <WhyChooseUs />

    </div>
  )
}

export default AboutUs;