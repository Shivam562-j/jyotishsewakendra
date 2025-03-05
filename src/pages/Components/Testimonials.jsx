import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { layoutContainer, testimonials } from "../../utils/constant";

const TestimonialSlider = () => {
  return (

    <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

      <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>

        <div className='flex flex-col items-center gap-2'>
          <h4 className='text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold'>What Our Clients Say
          </h4>
          <h1 className='text-4xl font-bold text-[#182036]'>Real Stories, Real Satisfaction</h1>

        </div>
        <div className="w-full max-w-5xl mx-auto h-full px-4 py-10">
          <Swiper
            // modules={[Pagination, Navigation]}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            // navigation
            pagination={{
              clickable: true,
              el: ".custom-pagination",  // Custom pagination element
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-6"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white border border-gray-200 px-4 py-7 shadow-md rounded-lg text-center">
                  <img
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-16 h-16 mx-auto rounded-full mb-3"
                  />
                  <h4 className="font-semibold text-lg text-[#182036]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination flex justify-center mt-4 space-x-2"></div>
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
