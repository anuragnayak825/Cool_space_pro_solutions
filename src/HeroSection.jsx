import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IoMdArrowDropdown } from "react-icons/io";
import heroImage from './assets/hero.webp';
import heroImage2 from './assets/hero_img_2.webp';
import heroImage3 from './assets/hero_img_3.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import HeroForm from "./page/HeroForm";

const images = [heroImage, heroImage2, heroImage3];

export default function HeroSection() {
  const [isShow, setIsShow] = useState(false);
  const [phone, setPhone] = useState('');
  const dropdownRef = useRef(null);


  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10); // max 10 digits
    const match = digits.match(/^(\d{3})(\d{3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}-${match[2]} ${match[3]}`.trim();
    } else if (digits.length <= 6) {
      return digits.replace(/^(\d{3})(\d{0,3})$/, '$1-$2').trim();
    }
    return digits;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setPhone(formatted);
  };

  const handleClearInput = () => {
    setPhone(''); // Clear the state completely
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Background Slider */}

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          loop
          speed={800}
          slidesPerView={1}

          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#004e92c5] to-[#000000d4]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 xl:px-20 py-10 gap-8 min-h-screen">
        {/* Animated Left Text */}
        <motion.div
          className="text-white text-center lg:text-left max-w-3xl space-y-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Transforming Living Spaces with Style, Innovation, and Ultimate Cooling Comfort
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium drop-shadow-md">
            We provide complete end-to-end solutions for modern living — from reliable air conditioning services to elegant interior design and flawless home renovations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[{ N: "Aircon Service", P: '/aircon-service' }, { N: "Interior Design", P: "/interior" }, { N: "Home Renovation", P: '/home-renovation' }].map((item, i) => (
              <NavLink to={item?.P} key={i}
                className="bg-[#1574C0] px-4 py-2 rounded-full font-semibold italic tracking-wider">
                {item?.N}
              </NavLink>
            ))}
          </div>
          <button onClick={() => { window.location.href = '#servic' }} className="mt-6 px-6 py-3 mx-auto lg:mx-0 text-white border border-white rounded hover:bg-[#004A7F] transition flex justify-center items-center">
            Explore Our Services <FaArrowRightLong className="text-xl ml-2.5" />
          </button>
        </motion.div>

        {/* Animated Contact Form */}
       <HeroForm/>
      </div>

      {/* Custom Swiper Arrows */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(21, 116, 192, 0.8);
          width: 48px;
          height: 48px;
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
          font-size: 18px;
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
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
