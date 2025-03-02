import React from 'react';
import { Footer, Header, SectionContent, ImageContent, Button, ImageBox } from '../../components';
import bgImage from "../../assets/images/bg.png";
import { layoutContainer, servicesBoxContent, shortDetails } from '../../utils/constant';
import { LuGoal } from "react-icons/lu";
import TestimonialSlider from '../Components/Testimonials';

const Home = () => {
  return (
    <div>
      <Header />

      <section className='relative w-full h-full bg-transparent' style={{
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

      {/* <section
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
          className={`${layoutContainer} relative z-10 py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}
        >
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold">
              Why Choose Us?
            </h4>
            <h1 className="text-4xl font-bold text-white">
              Trusted Astrology, Proven Guidance
            </h1>
          </div>


          <div className="flex w-full flex-col sm:flex-row gap-3">

            <div className="group flex flex-col items-center gap-4 bg-white border border-[#ff7900] shadow-md rounded-xl p-6 text-center w-full max-w-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#182036] bg-[#182036] transition-all duration-300 group-hover:bg-[#ff7900]">
                <LuGoal className="text-white text-3xl transition-all duration-300 group-hover:text-[#182036]" />
              </div>

              <h4 className="font-bold text-2xl text-[#182036]">Mission</h4>

              <h4 className="font-semibold text-lg text-[#ff7900]">
                35+ Years of Trusted Astrology
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our mission is to provide accurate and life-changing astrological
                insights, guiding you toward success and happiness.
              </p>
            </div>


            <div className="group flex flex-col items-center gap-4 bg-white border border-[#182036] shadow-md rounded-xl p-6 text-center w-full max-w-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#ff7900] bg-[#ff7900] transition-all duration-300 group-hover:bg-[#182036]">
                <LuGoal className="text-white text-3xl transition-all duration-300 group-hover:text-[#ff7900]" />
              </div>

              <h4 className="font-bold text-2xl text-[#182036]">Vision</h4>

              <h4 className="font-semibold text-lg text-[#ff7900]">
                Wisdom Refined Over 35+ Years
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                With decades of experience, we help individuals gain clarity, overcome challenges, and unlock their true potential.
              </p>
            </div>


            <div className="group flex flex-col items-center gap-4 bg-white border border-[#ff7900] shadow-md rounded-xl p-6 text-center w-full max-w-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#182036] bg-[#182036] transition-all duration-300 group-hover:bg-[#ff7900]">
                <LuGoal className="text-white text-3xl transition-all duration-300 group-hover:text-[#182036]" />
              </div>

              <h4 className="font-bold text-2xl text-[#182036]">24/7 Expert Support</h4>

              <h4 className="font-semibold text-lg text-[#ff7900]">
                Guidance Anytime, Anywhere
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                With 35+ years of expertise, we ensure you get astrological advice whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      <TestimonialSlider />

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
          className={`${layoutContainer} relative z-10 py-14 flex flex-row flex-wrap gap-8 justify-between w-full border-[#182036]`}
        >

          <div className='flex flex-col gap-2'>

            <p className='text-3xl text-[#fff]'>Get Personalized Astrological Guidance!</p>
            <h5 className='text-base text-[#eee]'>Have questions about your future? Connect with our expert astrologer for accurate insights and life-changing advice.</h5>

          </div>

          <Button>Chat with Us on WhatsApp</Button>
          

        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Home;