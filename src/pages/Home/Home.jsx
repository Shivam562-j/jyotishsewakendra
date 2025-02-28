import React from 'react';
import { Button, Footer, Header, SectionContent, ImageContent } from '../../components';
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
          />

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home;