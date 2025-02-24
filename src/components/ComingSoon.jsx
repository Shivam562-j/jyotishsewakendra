import React from 'react';
import bgImg from '../assets/images/hand-marks-service_img.png'
import bgLoader from '../assets/images/loader.png'

const ComingSoon = () => {
  return (
    <div className="relative bg-[#0f0221] h-screen font-semibold flex items-center justify-center text-[55px] text-white text-center">

      <img src={bgImg} alt="bg" className="absolute w-auto h-[550px] object-cover text-center" />

      <img
        src={bgLoader}
        alt="loader-bg"
        className="absolute animate-spin-slow w-[500px] h-[500px]"
      />

      <div className="relative animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white">
        Coming Soon...
      </div>

    </div>
  )
}

export default ComingSoon;