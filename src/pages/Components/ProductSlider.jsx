import React, { useMemo, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from '../../components/LazyLoadImage/Img';

const ProductSlider = ({ img1 = "", img2 = "", img1Alt = "image1", img2Alt = "imgage2", img3 = "", img3Alt = "", img4 = "", img4Alt = "", img5 = "", img5Alt = "", img6 = "", img6Alt = "", imgStyle = "w-[320px] h-auto sm:h-[450px] sm:w-auto", sliderBtn = true }) => {

    const uniqueId = useMemo(() => `swiper-${Math.random().toString(36).substr(2, 9)}`, []);
    const prevImgRef = useRef(null);
    const nextImgRef = useRef(null);

    React.useEffect(() => {
        // Swiper instance ko navigation buttons assign karne ke liye
        const timer = setTimeout(() => {
            // const swiper = document.querySelector(".swiper")?.swiper;
            const swiper = document.querySelector(`.swiper-${uniqueId}`)?.swiper;
            if (swiper) {
                swiper.params.navigation.prevEl = prevImgRef.current;
                swiper.params.navigation.nextEl = nextImgRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [uniqueId]);

    return (
        <div className="relative w-full overflow-y-hidden">
            <button
                ref={prevImgRef}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ff7900] text-white p-3 text-base rounded-full shadow-md hover:bg-[#e66b00] z-10"
            >
                <FaArrowLeft />
            </button>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                // spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                pagination={{
                    clickable: true,
                    el: `.custom-pagination-${uniqueId}`,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                loop={true}
                className={`swiper-${uniqueId} w-full max-w-[90%] flex flex-row overflow-x-hidden`}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (swiper?.params?.navigation) {
                            swiper.params.navigation.prevEl = prevImgRef.current;
                            swiper.params.navigation.nextEl = nextImgRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }, 100);
                }}
            >
                <SwiperSlide key={img1Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                    <Img src={img1} alt={img1Alt} className={imgStyle} />
                </SwiperSlide>
                <SwiperSlide key={img2Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                    <Img src={img2} alt={img2Alt} className={imgStyle} />
                </SwiperSlide>
                {sliderBtn == false && <>
                    <SwiperSlide key={img3Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                        <Img src={img3} alt={img3Alt} className={imgStyle} />
                    </SwiperSlide>
                    <SwiperSlide key={img4Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                        <Img src={img4} alt={img4Alt} className={imgStyle} />
                    </SwiperSlide>
                    <SwiperSlide key={img5Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                        <Img src={img5} alt={img5Alt} className={imgStyle} />
                    </SwiperSlide>
                    <SwiperSlide key={img6Alt} className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                        <Img src={img6} alt={img6Alt} className={imgStyle} />
                    </SwiperSlide>
                </>}
                <div className={`custom-pagination custom-pagination-${uniqueId} flex justify-center mt-5 space-x-2`}></div>
            </Swiper>
            <button
                ref={nextImgRef}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ff7900] text-white p-3 text-base rounded-full shadow-md hover:bg-[#e66b00] z-10"
            >
                <FaArrowRight />
            </button>
        </div>
    )
}

export default ProductSlider