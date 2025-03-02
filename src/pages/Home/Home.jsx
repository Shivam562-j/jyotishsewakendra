import React from 'react';
import { SectionContent, ImageContent, Button, ImageBox } from '../../components';
import bgImage from "../../assets/images/bg.png";
import { layoutContainer, servicesBoxContent, shortDetails } from '../../utils/constant';
import TestimonialSlider from '../Components/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs';
import Cta from '../Components/Cta';

const Home = () => {
  return (
    <div>

      {/* hero section */}
      <section className='relative w-full h-full mt-[110px] bg-transparent' style={{
        backgroundImage: `linear-gradient(220deg, #5846df 38%, #0a122b 0%)`,
      }}>
        <div
          className="bg-no-repeat bg-cover bg-center brightness-[200%] contrast-[100%] saturate-[100%] blur-[0px] hue-rotate-[0deg] opacity-[0.2] transition-[background,border-radius,opacity] duration-300 w-full h-full absolute inset-0 "
          style={{ backgroundImage: `url(${bgImage})` }}>
        </div>

        <div className={`${layoutContainer} py-14 flex flex-col-reverse sm:flex-row gap-5 justify-between w-full border-[#182036] pt-24`}>

          <SectionContent />
          <ImageContent />

        </div>

      </section>


      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col sm:flex-row gap-5 justify-between w-full border-[#182036] pt-24`}>

          <ImageContent
            imgUrl1="https://placehold.co/40x208"
            imgUrl2="https://placehold.co/263x208"
            className='flex-row p-0 h-full'
          />
          <SectionContent
            subHeadingColor="text-[#ff7900]"
            headingColor="text-[#182036]"
            descriptionColor="text-[#0a122b]"
            subHeading="About Us ━━"
            heading='Medinikant Jha – 35+ Years of Astrological Expertise'
            description='With expertise in Vedic astrology, horoscope analysis, and personalized guidance, Medinikant Jha helps individuals gain clarity in life, career, and relationships. His deep insights and remedies empower you to make informed decisions for a balanced and successful life.'
            ctaText='About Medinikant Jha'
          />

        </div>
      </section>

      {/* services section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col items-center gap-2'>
            <h4 className='text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold'>Our Services</h4>
            <h1 className='text-4xl font-bold text-[#182036]'>Guiding Your Life with Astrology</h1>

          </div>

          <div className='flex w-full flex-col sm:flex-row gap-3'>
            {servicesBoxContent?.slice(0, 3)?.map((service) =>
              <ImageBox
                key={service.id}
                image={service.image}
                name={service.name}
                description={service.description}
                buttonName={service.buttonName}
                link={service.link}
              />)}
          </div>

          <div className='flex flex-col items-center gap-2'>
            <Button to={'/services'}>
              View All
            </Button>
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

          {shortDetails.map((item) => <div key={item.name} className='flex flex-col gap-2'>
            <p className='text-6xl font-bold text-[#ff7900]'>{item?.name}</p>
            <span className='text-xl font-medium text-[#fff]'>{item?.description}</span>
          </div>)}

        </div>

      </section>

      <WhyChooseUs />

      <TestimonialSlider />

      <Cta />

    </div>
  )
}

export default Home;