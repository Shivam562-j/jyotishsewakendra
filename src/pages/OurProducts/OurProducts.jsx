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
              <div className={`w-full sm:w-1/2 flex justify-center gap-5 h-full`}>
                <img src={product?.image} alt='image' className="w-full" />
              </div>
              <div className={`w-full sm:w-1/2' flex flex-col gap-5`}>
                <h4 className={`text-xl font-bold text-[#ff7900]`}>Product ━━ </h4>
                <h1 className={`text-4xl font-bold text-[#182036]`}>{product.name}</h1>
                <p className={`text-base font-medium text-[#0a122b]`}>{product.description}</p>
                <a className='cursor-pointer bg-[#ff7900] text-[#fff] px-[30px] py-[15px] text-base font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit'></a>
              </div>
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