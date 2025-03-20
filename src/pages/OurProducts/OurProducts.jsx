import React, { useRef } from 'react';
import { layoutContainer, productBoxContent } from '../../utils/constant';
import product1Img from "../../assets/images/product1.webp";
import product11Img from "../../assets/images/product11.png";
import product12Img from "../../assets/images/product12.png";
import product2Img from "../../assets/images/product2.webp";
import ProductSlider from '../Components/ProductSlider';

const OurProducts = () => {
  
  return (
    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px] overflow-x-hidden'>

      <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>
        <div className='flex w-full flex-col items-center justify-center gap-10'>

          <div
            className={`flex flex-col w-full h-full gap-10 py-10 sm:flex-row-reverse`}
          >
            <div className={`w-full sm:w-1/2 flex justify-center gap-5 h-full overflow-hidden`}>
              <ProductSlider img1={product1Img} img2={product11Img} img1Alt={productBoxContent[0].name} img2Alt={productBoxContent[0].name} />
            </div>
            <div className={`w-full sm:w-1/2' flex flex-col gap-5`}>
              <h4 className={`text-xl font-bold text-[#ff7900]`}>Product ━━ </h4>
              <h1 className={`text-4xl font-bold text-[#182036]`}>{productBoxContent[0].name}</h1>
              <p className={`text-base font-medium text-[#0a122b]`}>"Puja Pushpanjali" includes detailed procedures for <b>Shiv Pooja Vidhi, Kalash Poojan, Bhagwati Pujan Vidhi, Maha Mrityunjay Jap Vidhi, Lakshmi Poojan Vidhi, Rudrabhishek, Havan Vidhi, Parthiv Shiv Poojan Vidhi, Shree Suktam, Kumbh Vivah, Chhag Balidan, and Mash Bali</b>. This sacred text presents traditional Sanatan Dharma rituals in a simple and authentic manner, enabling devotees to perform pujas correctly and attain maximum spiritual benefits.'</p>
              <div className="p-6 bg-white shadow-lg rounded-lg w-96 mt-1">
                <p className="text-gray-700"><strong>Author:</strong> Pt.Medini Kant Jha</p>
                <p className="text-gray-700"><strong>Binding:</strong> Paperback</p>
                <p className="text-gray-700"><strong>Publishing Date:</strong> 2020</p>
                <p className="text-gray-700"><strong>Publisher:</strong> RELIGION EDUCATION</p>
                <p className="text-gray-700"><strong>Edition:</strong> 2nd Edition</p>
                <p className="text-gray-700"><strong>Number of Pages:</strong> 106</p>
                <p className="text-gray-700"><strong>Language:</strong> Sanskrit</p>
              </div>
              <a href={productBoxContent[0].link} target='_blank' className='cursor-pointer bg-[#ff7900] text-[#fff] px-[30px] py-[15px] text-base font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit'>{productBoxContent[0].buttonName}</a>
            </div>
          </div>

          <div className={`flex flex-col w-full h-full gap-10 py-10 sm:flex-row`} >
            <div className={`w-full sm:w-1/2 flex justify-center gap-5 h-full overflow-hidden`}>
              {/* <img src={product2Img} alt='image' className="w-full" /> */}
              <ProductSlider img1={product2Img} img2={product12Img} img1Alt={productBoxContent[0].name} img2Alt={productBoxContent[0].name} />
            </div>
            <div className={`w-full sm:w-1/2' flex flex-col gap-5`}>
              <h4 className={`text-xl font-bold text-[#ff7900]`}>Product ━━ </h4>
              <h1 className={`text-4xl font-bold text-[#182036]`}>{productBoxContent[1].name}</h1>
              <p className={`text-base font-medium text-[#0a122b]`}><strong>ShreeTantra Mishran</strong> is a powerful blend of
                <strong> 30 Ayurvedic herbs</strong>, energized through
                <strong> tantric rituals</strong> to eliminate
                <strong> negative energy</strong>. Sprinkling it into a
                <strong> sacred fire</strong> for 21 days purifies your home, removes evil influences,
                and attracts <strong>peace, prosperity, and positivity</strong>.
                Protect your space and restore harmony with this ancient remedy.</p>
              <div className="p-6 mt-1">
                <h3 className="text-lg font-semibold mt-4 text-gray-800">Benefits:</h3>
                <ul className="text-gray-700 list-none pl-5 mt-2 space-y-1">
                  <li>✅ Removes negative energy from your home.</li>
                  <li>✅ Attracts peace, prosperity, and harmony.</li>
                  <li>✅ Creates positive energy among family members.</li>
                  <li>✅ Protects against evil eye and external influences.</li>
                </ul>
              </div>
              <a href={productBoxContent[1].link} target='_blank' className='cursor-pointer bg-[#ff7900] text-[#fff] px-[30px] py-[15px] text-base font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit'>{productBoxContent[1].buttonName}</a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default OurProducts;