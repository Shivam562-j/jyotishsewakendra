import React from 'react'
import { ImageContent, SectionContent } from '../../components';
import { layoutContainer, productBoxContent } from '../../utils/constant';

const OurProducts = () => {
  return (
    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

      <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>
        <div className='flex w-full flex-col items-center justify-center gap-10'>

          {productBoxContent?.map((product, index) =>
            <div key={index}
              className={`flex flex-col gap-10 py-10 ${index % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
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

      </div>

    </section>
  )
}

export default OurProducts;