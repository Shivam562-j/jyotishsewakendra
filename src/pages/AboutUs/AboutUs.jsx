import React from 'react'
import Banner from '../Components/Banner';
import { layoutContainer, shortDetails } from '../../utils/constant';
import { AnimatedCount, ImageContent, SectionContent } from '../../components';
import bgImage from "../../assets/images/bg.png";
import WhyChooseUs from '../Components/WhyChooseUs';

const AboutUs = () => {
  return (
    <div>
      {/* about us section */}
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-5 justify-between w-full border-[#182036] pt-24`}>

          <div className='flex flex-col sm:flex-row gap-5 justify-between w-full'>

            <ImageContent
              imgUrl1="https://placehold.co/263x208"
              imgUrl2={false}
              className='flex-row p-0 h-full'
            />
            <SectionContent
              subHeadingColor="text-[#ff7900]"
              headingColor="text-[#182036]"
              descriptionColor="text-[#0a122b]"
              subHeading="About Us ━━"
              heading='Medinikant Jha – 40+ Years of Astrological Expertise'
              description='With expertise in Vedic astrology, horoscope analysis, and personalized guidance, Medinikant Jha helps individuals gain clarity in life, career, and relationships. His deep insights and remedies empower you to make informed decisions for a balanced and successful life.'
              ctaText={false}
            />
          </div>
          <p className='text-base font-medium text-[#0a122b]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos nemo ex quis, reprehenderit delectus assumenda, quia neque numquam labore eaque magni vel ipsum quaerat laborum repellat? Consequuntur accusamus maxime, tempora esse distinctio ipsum. Distinctio excepturi omnis vero mollitia ipsum officia dicta est iusto aperiam, rerum, quia, ad temporibus natus vitae maiores! Neque quidem similique consectetur vero unde itaque saepe eius ea accusantium voluptatum odio ex necessitatibus sequi tempora magni, facere atque. Odit enim ipsum vitae animi amet iure, porro nisi eos aperiam. Atque itaque quis culpa rem quisquam sed tempora neque. Molestias debitis adipisci autem similique facilis, perferendis sint.
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