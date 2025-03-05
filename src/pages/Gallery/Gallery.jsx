import React from 'react';
import { Button, ImageContent, SectionContent } from '../../components';
import { layoutContainer, productBoxContent } from '../../utils/constant';

const Gallery = () => {
  return (
    <>
      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>
          <div className='flex w-full flex-col items-center justify-center gap-10'>


            <div className='flex flex-col items-center gap-2'>
              <h4 className='text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold'>Our Video</h4>
              <h1 className='text-4xl font-bold text-[#182036]'>Watch Our Insightful Videos</h1>

            </div>

            <div className='flex flow-row flex-wrap justify-center items-center gap-4'>

              <iframe width="375" height="250" src="https://www.youtube.com/embed/admgDCp-U08?si=cG8d3OS1Qqm6LW4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              <iframe width="375" height="250" src="https://www.youtube.com/embed/tHPoEYk-Ai4?si=WkX21PdrgkPR2pow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              <iframe width="375" height="250" src="https://www.youtube.com/embed/hKNWZYDWdEM?si=AX9dt8-QvVvbqhPi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='hidden lg:block'></iframe>

            </div>

            <div className='flex flex-col items-center gap-2'>
              <Button to={'/gallery/our-video'}>
                View All
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

        <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>
          <div className='flex w-full flex-col items-center justify-center gap-10'>


            <div className='flex flex-col items-center gap-2'>
              <h4 className='text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold'>Our Products</h4>
              <h1 className='text-4xl font-bold text-[#182036]'>Discover Our Range of Astrological Products</h1>

            </div>

            <div className='flex w-full flex-col items-center justify-center gap-10'>

              {productBoxContent?.map((product, index) =>
                <div key={index}
                  className={`flex flex-col sm:flex-row gap-10 py-10  ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <ImageContent
                    imgUrl1="https://placehold.co/300x208"
                    imgUrl2={false}
                    className='h-full'
                  />
                  <SectionContent
                    subHeadingColor="text-[#ff7900]"
                    headingColor="text-[#182036]"
                    descriptionColor="text-[#0a122b]"
                    subHeading="Product ━━"
                    heading={product.name}
                    description={product.description}
                    ctaText={product.buttonName}
                    ctaUrl={product.link}
                  />
                </div>
              )}
            </div>

            <div className=' hidden sm:flex flex-col items-center gap-2'>
              <Button to={'/gallery/our-products'}>
                View All
              </Button>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Gallery;