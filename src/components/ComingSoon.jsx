import React from 'react';
import bgImg from '../assets/images/hand-marks-service_img.png'
import bgLoader from '../assets/images/loader.png'

const ComingSoon = () => {
  return (

    <div className="bg-[#0f0221] h-screen flex flex-col items-center justify-center px-4 w-full overflow-hidden">
      <div className="relative  flex flex-col items-center justify-center px-4 w-full">

        {/* Background Image */}
        <img
          src={bgImg}
          alt="bg"
          className="absolute w-auto h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
        />

        {/* Spinning Loader */}
        <img
          src={bgLoader}
          alt="loader-bg"
          className="absolute animate-spin-slow w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain"
        />

      </div>

      <div className="relative w-fit font-semibold text-[30px] sm:text-[45px] md:text-[55px] lg:text-[65px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white text-white text-center ">
        Coming Soon...
      </div>
    </div>
  )
}

export default ComingSoon;