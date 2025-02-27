import React from 'react';
import { Button, Footer, Header } from '../../components';
import bgImage from "../../assets/images/bg.png";
import { layoutContainer } from '../../utils/constant';

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

          <div className='w-full sm:w-1/2 flex flex-col gap-5'>
            <h4 className='text-xl font-semibold text-[#ff7900]'>Discover Your Destiny with Astrology!</h4>
            <h1 className='text-4xl font-bold text-[#fff]'>Unravel Life’s Mysteries with Expert Astrological Guidance</h1>
            <p className='text-base font-medium text-[#fff]'>Get insights into your life, career, relationships, and future with our expert astrologers. Explore personalized Kundali analysis, Vastu consultation, and more!</p>
            <Button to="/appointment">Book Your Consultation Now</Button>
          </div>

          <div className='w-full sm:w-1/2 flex flex-col justify-center gap-5 p-0 sm:p-5'>

            <img src='https://placehold.co/406x203' alt='image'/>
            <img src='https://placehold.co/406x50' alt='image' />

          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default Home;