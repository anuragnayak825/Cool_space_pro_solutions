import React, { useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrServices } from "react-icons/gr";
import { motion, useInView } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom';

export default function AboutSection() {
    const nav = useNavigate();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div
            ref={sectionRef}
            className='w-full min-h-[100vh] flex flex-col lg:flex-row justify-center items-center p-5 sm:p-10 space-y-10 lg:space-y-0 lg:space-x-8 overflow-hidden'
        >

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='w-full max-w-3xl flex justify-center items-center '
            >
                <div className='w-full relative max-w-[460px] h-[75vh] sm:h-[70vh] md:h-[60vh] lg:h-[75vh]'>
                    <img
                        src="https://invernawp.themesflat.co/wp-content/uploads/2025/02/about_img_2-min.jpg"
                        alt=""
                        className='w-full h-full object-cover rounded-2xl'
                    />

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
                            <h1 className='font-bold text-gray-800 text-sm sm:text-base md:text-xl'>23,710+</h1>
                            <span className='text-[10px] sm:text-xs font-semibold text-gray-300'>Satisfied Clients</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className='w-full max-w-3xl flex justify-start items-center '
            >
                <div className='w-full space-y-6 relative px-2 sm:px-6 md:px-10'>
                    <div className='hidden max-w-[250px] relative border-[3px] lg:flex justify-center items-center border-[#00C4CC] px-3.5 py-3'>
                        <span className='font-semibold text-sm sm:text-base md:text-lg tracking-wider absolute -top-4 bg-white px-2.5'> About our community</span>
                    </div>
                    <div className='lg:hidden max-w-[250px] relative border-[3px] mx-auto flex justify-center items-center border-[#00C4CC] px-4 py-3 mb-4'>
                        <span className='font-bold text-base sm:text-lg md:text-xl tracking-wide absolute -top-4 bg-white px-4 italic'>
                            About our community
                        </span>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center md:text-left'>
                        We Provide Smart Aircon Solutions & Modern Interior Styling
                    </h1>
                    <p className='text-sm sm:text-base font-normal text-gray-500 tracking-wide text-center md:text-left'>
                        Transform your space with energy-efficient cooling and stylish interiors. Our expert team blends advanced air conditioning with modern design, tailored to your home, office, or commercial needs. Breathe easier, live better.
                    </p>

                    <div className='px-3 sm:px-4 border-s-[4px] border-s-[#00C4CC] space-y-1'>
                        <div className='font-semibold text-sm sm:text-base'>
                            One-stop service for comfort, functionality, and beauty
                        </div>
                        <div className='font-semibold text-sm sm:text-base'>
                            Upgrade your environment — both in feel and look
                        </div>
                    </div>

                    <div className='group hidden w-auto lg:flex justify-start items-center relative overflow-hidden'>
                        <motion.div
                            whileHover={{ x: 100 }}
                            onClick={() => nav('/about')}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center w-auto space-x-2 text-[#00C4CC] py-2.5 px-3.5 font-semibold -translate-x-25 rounded-md cursor-pointer"
                        >
                            <NavLink className="transition-all duration-300 group-hover:opacity-100">Learn More</NavLink>
                            <FaArrowRightLong className="text-lg" />
                        </motion.div>
                    </div>

                    <div className='group lg:hidden w-auto flex justify-center items-center relative overflow-hidden'>
                        <motion.div
                            onClick={() => nav('/about')}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center w-auto space-x-2 text-[#00C4CC] py-2.5 px-3.5 border group-hover:border font-semibold rounded-md cursor-pointer"
                        >
                            <span className="transition-all duration-300 group-hover:opacity-100">Learn More</span>
                            <FaArrowRightLong className="text-lg" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
