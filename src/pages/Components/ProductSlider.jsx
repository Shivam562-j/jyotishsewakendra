import React, { useMemo, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSlider = ({img1, img2, img1Alt="", img2Alt=""}) => {
   
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
                modules={[Pagination, Navigation]}
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
                <SwiperSlide className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                    <img src={img1} alt={img1Alt} className="w-[320px] h-auto sm:h-[450px] sm:w-auto" />
                </SwiperSlide>
                <SwiperSlide className="h-auto w-full object-contain text-center flex justify-items-center overflow-x-hidden">
                    <img src={img2} alt={img1Alt} className="w-[320px] h-auto sm:h-[450px] sm:w-auto" />
                </SwiperSlide>
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