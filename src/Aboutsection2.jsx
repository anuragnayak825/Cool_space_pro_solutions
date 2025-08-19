import React from 'react';
import { FaArrowRightLong, FaPhone } from 'react-icons/fa6';
import { GrServices } from "react-icons/gr";
import { HiMiniArrowTurnLeftDown, HiMiniArrowTurnRightDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
export default function Aboutsection2() {
    return (
        <div className='w-full min-h-[100vh] flex flex-col lg:flex-row justify-center items-center p-5 sm:p-10 space-y-10 lg:space-y-0 lg:space-x-8'>

            {/* Image Section */}
            <div className='w-full max-w-3xl flex justify-center items-center'>
                <div className='w-full relative max-w-[460px] h-[75vh] sm:h-[70vh] md:h-[60vh] lg:h-[75vh]'>
                    <img src="https://invernawp.themesflat.co/wp-content/uploads/2025/02/about_img_2-min.jpg" alt=""
                        className='w-full h-full object-cover rounded-2xl' />

                    {/* Floating Image Card */}
                    <div className='w-40 sm:w-48 md:w-56 bg-white absolute h-[130px] sm:h-[160px] md:h-[200px] border-[6px] md:rounded-xl border-white bottom-6 right-0 sm:-right-12 md:-right-16 transition-transform duration-300 hover:-translate-y-2.5'>
                        <img
                            src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_incoming&w=740&q=80"
                            alt=""
                            className='w-full h-full object-cover rounded-xl'
                        />
                        <div className='absolute w-full h-full bg-white/30 inset-0'></div>
                    </div>

                    {/* Colored Pill */}
                    <div className='w-3 sm:w-4 md:w-5 h-[20vh] sm:h-[25vh] md:h-[30vh] bg-[#00C4CC] rounded-full absolute bottom-0 -left-5 sm:-left-8 md:-left-10' />

                    {/* Service Info Box */}
                    <div className='w-32 sm:w-36 md:w-40 flex justify-center items-center space-x-4 bg-white absolute shadow-md top-4 sm:top-6 md:top-8 left-6 sm:-left-8 md:-left-10 border-s-[3px] border-s-[#00C4CC] border-white z-10 h-[8vh] sm:h-[9vh] md:h-[10vh] rounded-md'>
                        <GrServices className='text-2xl sm:text-3xl md:text-4xl text-[#00C4CC]' />
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold text-gray-800 text-sm sm:text-base md:text-xl'>5544 +</h1>
                            <span className='text-[10px] sm:text-xs font-semibold text-gray-300'>Satisfied Clients</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Content Section */}
            <div className='w-full max-w-3xl flex justify-start items-center'>
                <div className='w-full space-y-6 relative px-2 sm:px-6 md:px-10'>
                    <div className=' hidden  max-w-[250px] relative border-[3px] lg:flex justify-center items-center border-[#00C4CC] px-3.5 py-3'>
                        <span className='font-semibold text-sm sm:text-base md:text-lg tracking-wider absolute -top-4 bg-white px-2.5 '> About our community</span>
                    </div>
                    <div className='lg:hidden max-w-[250px] relative border-[3px] mx-auto flex justify-center items-center border-[#00C4CC] px-4 py-3 mb-4'>
                        <span className='font-bold text-base sm:text-lg md:text-xl tracking-wide absolute -top-4 bg-white px-4 italic'>
                            About our community
                        </span>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold tracking-wide text-center md:text-left'>
                        We Provide Smart Aircon Solutions & Modern Interior Styling
                    </h1>
                    <p className='text-sm sm:text-base font-normal text-gray-500 tracking-wide text-center md:text-left'>
                        Transform your space into a haven of comfort and elegance with our expert solutions.
                        We specialize in integrating energy-efficient air conditioning systems with stylish, modern interior designs that are tailored to suit your unique lifestyle and space—whether it’s your home, office, or commercial property.

                        Our skilled team combines cutting-edge cooling technology with aesthetic finesse, ensuring every corner of your environment looks great and feels even better. From sleek installations to custom design enhancements, we create spaces that reflect your taste and elevate your everyday living.

                        Experience the perfect balance of function and beauty—breathe easier, live better.
                    </p>


                    <div className='w-full h-auto flex sm:justify-start justify-center items-center gap-5 '>
                        <NavLink to={'/contact-us'} className='px-3 py-2 text-[#00C4CC] font-semibold flex justify-center items-center border hover:text-white hover:bg-[#00C4CC] cursor-pointer transition-colors ease-in-out rounded-md'>Book Now <FaArrowRightLong className='ml-1.5' /></NavLink>
                        <button  onClick={() => window.open('tel:+601124419414')} className='px-3 py-2 hover:text-[#00C4CC] hover:bg-white font-semibold flex justify-center items-center border text-white bg-[#00C4CC] cursor-pointer transition-colors ease-in-out rounded-md'><FaPhone className='mr-1.5' /> Get in Touch</button>
                    </div>


                </div>
            </div>

        </div>
    );
}
