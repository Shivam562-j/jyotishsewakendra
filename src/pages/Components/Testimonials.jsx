import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Amazing astrology service! Highly recommended.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Very accurate readings and great guidance!",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "I found my life path with their advice!",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Emily White",
    feedback: "A life-changing experience. Will come again!",
    image: "https://via.placeholder.com/80",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 2 }, // Medium screens
          1024: { slidesPerView: 3 }, // Large screens
        }}
        className="py-6"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-3"
              />
              <h4 className="font-semibold text-lg text-[#182036]">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
