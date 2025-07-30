import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function OfferSection() {
    return (
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center px-6 md:px-10 lg:px-4 2xl:px-20 pb-10 gap-6'>

            {/* Left Offer Box */}
            <div className='w-full lg:w-[35%] h-auto'>
                <div className='w-full h-full bg-blue-600 flex flex-col justify-between text-white px-6 md:px-5 lg:px-5 2xl:px-14 py-10 2xl:py-16'>
                    <h1 className='text-3xl   2xl:text-5xl font-semibold text-center custom-style'>
                        Your Dream Space Starts Here — Let’s Begin!
                    </h1>
                    <p
                        style={{ wordSpacing: '3px' }}
                        className='text-base md:text-[20px] lg:text-[22px] xl:text-[30px] 2xl:text-[18px] mt-6 md:mt-10  2xl:leading-[56px] tracking-wider font-semibold text-center'
                    >
                        We help you unlock your property's full potential through smart, stress-free renovations.
                        No upfront costs, no surprises — just reliable service and real value.
                        Your dream space is within reach, and we’re here to make it happen.
                    </p>

                    <div className='w-full h-auto flex justify-center mt-5 items-center'>
                        <button className='w-auto h-auto px-4 py-3 2xl:px-6 2xl:py-4 bg-green-600 rounded-md flex justify-center items-center animate-bounce cursor-pointer font-semibold text-base 2xl:text-lg'>
                            <FaWhatsapp className='mr-2.5 text-lg 2xl:text-xl' /> Chat on WhatsApp
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Images Section */}
            <div className='w-full lg:w-[60%] h-full mx-auto flex flex-col gap-4'>

                {/* Top Image */}
                <div className='w-full relative overflow-hidden group'>
                    <img
                        src="https://img.freepik.com/free-photo/full-shot-man-working-with-equipment_23-2148921407.jpg"
                        alt=""
                        className='w-full h-[40vh] md:h-[50vh] lg:h-[45vh] bg-top object-cover transform transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 brightness-[1.15]'
                    />
                    <div className='w-full h-full bg-black/40 inset-0 absolute z-10'></div>
                    <div className='absolute inset-0 z-20 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
                        <h2 className='text-white text-2xl md:text-3xl 2xl:text-4xl font-bold'>Reliable Aircon Services</h2>
                        <p className='text-white text-sm md:text-lg 2xl:text-xl mt-2'>Installation, Repair & Maintenance — for Homes & Businesses</p>
                    </div>
                </div>

                {/* Bottom Two Images */}
                <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>

                    {/* Left Bottom Image */}
                    <div className='w-full lg:w-[49%] h-[50vh] lg:h-[60vh] relative overflow-hidden group'>
                        <img
                            src="https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278565.jpg"
                            alt=""
                            className='w-full h-full object-cover transform transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 brightness-[1.15]'
                        />
                        <div className='w-full h-full bg-black/40 inset-0 absolute z-10'></div>
                        <div className='absolute inset-0 z-20 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
                            <h2 className='text-white text-2xl md:text-3xl 2xl:text-4xl font-bold'>Transform Your Space</h2>
                            <p className='text-white text-sm md:text-lg 2xl:text-xl mt-2'>Expert Home Renovation Services</p>
                        </div>
                    </div>

                    {/* Right Bottom Image */}
                    <div className='w-full lg:w-[49%] h-[50vh] lg:h-[60vh] relative overflow-hidden group'>
                        <img
                            src="https://img.freepik.com/free-photo/colorful-pastel-minimal-interior-design_23-2151883504.jpg"
                            alt=""
                            className='w-full h-full object-cover transform transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 brightness-[1.15]'
                        />
                        <div className='w-full h-full bg-black/40 inset-0 absolute z-10'></div>
                        <div className='absolute inset-0 z-20 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
                            <h2 className='text-white text-2xl md:text-3xl 2xl:text-4xl font-bold'>Elevate Your Living</h2>
                            <p className='text-white text-sm md:text-lg 2xl:text-xl mt-2'>Elegant & Personalized Interior Design</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
