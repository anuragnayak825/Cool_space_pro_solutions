import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroImage from './assets/hero.webp';
import heroImage2 from './assets/Hero_img_2.webp';
import heroImage3 from './assets/Hero_img_3.webp';

const images = [heroImage, heroImage2, heroImage3];

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full custom-swiper-nav"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 w-full h-full z-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text Content */}
            <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                  Cooling Comfort Meets Elegant Design
                </h1>
                <p className="mt-4 text-lg md:text-xl font-medium drop-shadow-md">
                  Premium air conditioning and creative interiors for Malaysian homes and businesses.
                </p>
                <button className="mt-6 px-8 py-3 bg-[#1574C0] text-white rounded-full text-lg font-semibold hover:bg-[#004A7F] transition shadow-lg">
                  Get a Free Consultation
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Arrow Styling */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(21, 116, 192, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #004A7F;
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
