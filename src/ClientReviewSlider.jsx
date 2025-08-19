import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const reviews = [
    {
        name: "Anjali Mehta",
        title: "Homeowner",
        feedback:
            "Absolutely fantastic service! The renovation exceeded my expectations and the team was professional throughout.",
        rating: 5,
    },
    {
        name: "Rohan Verma",
        title: "Interior Client",
        feedback:
            "The interior design completely transformed my apartment. Very satisfied with the creativity and execution.",
        rating: 4,
    },
    {
        name: "Priya Das",
        title: "Commercial Client",
        feedback:
            "Timely delivery, great communication, and stunning results. Highly recommended for commercial interiors!",
        rating: 5,
    },
];

export default function ClientReviewSlider() {
    return (
        <section className="w-full py- bg-gradient-to-b from-white via-sky-50 to-white px-4 md:px-20">
            <div className='max-w-[250px] relative border-[3px] mx-auto flex justify-center items-center border-[#00C4CC] px-4 py-3 mb-16'>
                <span className='font-bold text-base sm:text-lg md:text-xl tracking-wide absolute -top-4 bg-white px-4 italic'>
                    Client Reviews
                </span>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                className="pb-12" // Add padding to push dots downward
            >
                {reviews.map((review, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white shadow-lg rounded-md p-8 m-4 h-full flex flex-col justify-between">
                            <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
                            <p className="text-gray-700 text-lg mb-6 italic">"{review.feedback}"</p>
                            <div className="mt-auto">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                                <p className="text-sm text-gray-500">{review.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}
