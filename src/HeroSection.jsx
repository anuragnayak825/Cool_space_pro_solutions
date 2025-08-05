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
          <button onClick={() => { window.location.href = '#servic' }} className="mt-6 px-6 py-3 text-white border border-white rounded hover:bg-[#004A7F] transition flex justify-center items-center">
            Explore Our Services <FaArrowRightLong className="text-xl ml-2.5" />
          </button>
        </motion.div>

        {/* Animated Contact Form */}
        <motion.form
          className="w-full max-w-md mx-auto border border-gray-300 bg-white px-4 py-6 sm:px-6 md:px-8 rounded-2xl shadow-xl space-y-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-2xl font-bold text-gray-800">Get a Quotation Now</h1>

          {[
            { id: "name", type: "text", label: "Your Name" },
            { id: "email", type: "email", label: "Email Address" },
          ].map(({ id, type, label }) => (
            <div className="relative w-full" key={id}>
              <input
                type={type}
                id={id}
                required
                placeholder={label}
                className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 shadow-sm"
              />
              <label
                htmlFor={id}
                className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                {label}
              </label>
            </div>
          ))}
          <label></label>
          <div
            className="w-full h-12 relative flex shadow-sm rounded-md"
            ref={dropdownRef}
          >
            {/* Flag + Dropdown toggle */}
            <div className="w-16 h-12 border-2 border-gray-300 border-e-0 rounded-s-md flex justify-center items-center bg-gray-100 ">
              <img
                src="https://flagcdn.com/w40/my.png"
                alt="Malaysia Flag"
                className="w-6 h-4"
              />
              <IoMdArrowDropdown
                onClick={() => setIsShow(!isShow)}
                className={`cursor-pointer transition-transform ${isShow ? 'rotate-180' : ''}`}
              />
            </div>

            {/* Dropdown */}
            {isShow && (
              <div className="w-60 absolute top-14 z-10 left-0 border border-gray-300 bg-white shadow rounded-md">
                <div className="bg-gray-100  w-full h-12 flex justify-between items-center rounded-md">
                  <div className="flex items-center px-2 space-x-3 ">
                    <img
                      src="https://flagcdn.com/w40/my.png"
                      alt="Malaysia Flag"
                      className="w-6 h-4"
                    />
                    <span className="text-gray-600 font-semibold">Malaysia</span>
                    <span className="text-gray-600 font-semibold">+60</span>
                  </div>
                  <div className="w-5 h-12 flex bg-white flex-col justify-between items-center rounded-e-md">
                    <IoMdArrowDropdown className="rotate-180" />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </div>
            )}

            {/* Phone input */}
            <div className="w-full">
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                 onClick={handleClearInput}
                placeholder="012-345 6789"
                className=" h-12 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-e-md px-4"
              />
            </div>
          </div>
          {/* Message */}
          <div className="relative w-full">
            <select
              placeholder="Your Message"
              className="peer h-12 w-full border-2 text-gray-400 focus:text-gray-950 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 shadow-sm"
            >
              <option value="">Select service</option>
              <option value="Aicon Service">Aircon service</option>
              <option value="Interior design">Interior design</option>
              <option value="Home Renovation">Home Renovation</option>
            </select>
          </div>
          <div className="relative w-full">
            <textarea
              id="message"
              required
              rows="4"
              placeholder="Your Message"
              className="peer shadow-sm w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 pt-3 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-1 bg-white px-1 text-gray-600 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Your Message
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
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
