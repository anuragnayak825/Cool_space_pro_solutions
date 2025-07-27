import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import about from './assets/About.png'

export default function Aboutsection2() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 py-10 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img
                    src={about}
                    alt="About"
                    className="w-full max-w-md sm:max-w-xl object-contain"
                />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
                {/* Title Box for Desktop */}
                <div className="hidden lg:flex max-w-[250px] relative border-[3px] border-[#00C4CC] px-4 py-3">
                    <span className="absolute -top-4 left-4 bg-white px-2 font-semibold text-base tracking-wide">
                        About our community
                    </span>
                </div>

                {/* Title Box for Mobile */}
                <div className="lg:hidden mx-auto max-w-[250px] relative border-[3px] border-[#00C4CC] px-4 py-3 mb-4">
                    <span className="absolute -top-4 left-4 bg-white px-4 font-semibold text-lg tracking-wide italic">
                        About our community
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center lg:text-left">
                    We Provide Smart Aircon Solutions & Modern Interior Styling
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 tracking-wide text-center lg:text-left">
                    Transform your space with energy-efficient cooling and stylish interiors. Our expert team blends advanced air conditioning with modern design, tailored to your home, office, or commercial needs. Breathe easier, live better.
                </p>

                {/* Key Points */}
                <div className="px-4 border-s-[4px] border-s-[#00C4CC] space-y-1">
                    <div className="font-semibold text-sm sm:text-base">
                        One-stop service for comfort, functionality, and beauty
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                        Upgrade your environment — both in feel and look
                    </div>
                </div>

                {/* Learn More Button - Desktop */}
                <div className="group hidden lg:flex justify-start items-center relative overflow-hidden">
                    <motion.div
                        whileHover={{ x: 100 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex items-center space-x-2 text-[#00C4CC] py-2.5 px-3.5 font-semibold rounded-md cursor-pointer"
                    >
                        <span className="transition-all duration-300 group-hover:opacity-100">
                            Learn More
                        </span>
                        <FaArrowRightLong className="text-lg" />
                    </motion.div>
                </div>

                {/* Learn More Button - Mobile */}
                <div className="group lg:hidden flex justify-center items-center relative overflow-hidden">
                    <motion.div
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex items-center space-x-2 text-[#00C4CC] py-2.5 px-3.5 border border-[#00C4CC] font-semibold rounded-md cursor-pointer"
                    >
                        <span className="transition-all duration-300 group-hover:opacity-100">
                            Learn More
                        </span>
                        <FaArrowRightLong className="text-lg" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
