import React from 'react'
import { layoutContainer } from '../../utils/constant';
import bgImage from "../../assets/images/bg.png";
import { Button } from '../../components';
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";


const Banner = ({
    heading = "About Us",
    description = "With 40+ years of expertise, we provide accurate horoscope analysis, personalized guidance, and astrological remedies to help you achieve clarity, balance, and success in life.",
    btnText = "Back to Home",
    btnLink = "/",
    isSubBannerLink = ""
}) => {

    const navigate = useNavigate();
    return (
        <section className='relative w-full mt-[110px] h-full bg-transparent' style={{
            backgroundImage: `linear-gradient(220deg, #5846df 38%, #0a122b 0%)`,
        }}>
            <div
                className="bg-no-repeat bg-cover bg-center brightness-[200%] contrast-[100%] saturate-[100%] blur-[0px] hue-rotate-[0deg] opacity-[0.2] transition-[background,border-radius,opacity] duration-300 w-full h-full absolute inset-0 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}>
            </div>

            <div className={`${layoutContainer} py-14 flex flex-col text-center gap-3 justify-center lg:w-3/4 max-w-md pt-24 z-10`}>

                <h1 className={`text-5xl font-extrabold text-[#fff]`}>{heading}</h1>
                <p className={`text-base leading-8 font-medium text-[#fff]`}>{description}</p>
                <div className='flex flex-row justify-center gap-2 flex-wrap'>
                    <Button to={btnLink}>{btnText}</Button>
                    {isSubBannerLink?.length > 0 && <button
                        onClick={() => navigate(`${isSubBannerLink}`) }
                        className=' text-[#fff] px-[20px] py-[14px] text-base rounded flex flex-row gap-2 items-center border border-[#ff7900] transition hover:bg-[#ff7900] hover:text-[#fff] cursor-pointer z-10'
                    >
                        {/* <MdHomeFilled size={24} /> */}
                        <RxDashboard size={20} />
                    </button>}

                </div>
            </div>
        </section>
    )
}

export default Banner;