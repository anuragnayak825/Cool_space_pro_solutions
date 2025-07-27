import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhyChooes() {
    const points = [
        "Unmatched performance, satisfaction service guarantees",
        "Home protection through our shoe covers and mats",
        "Upfront, flat rate pricing—no overtime charges",
        "24 / 7 availability for all emergency services",
        "Fixed right promise—done right or it’s free",
        "Clear communication and updates on service arrival"
    ];

    return (
        <>
    
            <div className=' w-auto mx-auto flex flex-col justify-center items-center  px-4 py-3 mb-2'>
                <span className='font-bold text-xl sm:text-lg md:text-xl tracking-wide  bg-white px-4 italic'>
                    Why Clients Trust Us
                </span>
                <hr className=' border-[2px] max-w-40 w-full mt-2 border-[#00C4CC]' />
            </div>

            <div className="w-full py-10 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-8 items-center">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://pixydrops.com/loazzne/assets/images/why_choose_us.jpg"
                        alt="Why Choose Us"
                        className="w-full h-full max-h-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                    {/* Headings */}
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide text-gray-900">
                            We are trusted source of ac and<br />
                            heating maintenance repairs company
                        </h2>
                    </div>

                    {/* Points List */}
                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-sm sm:text-base md:text-lg leading-relaxed bg-blue-700 px-4 py-3 rounded-xl text-white font-medium italic hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                            >
                                <FaCheckCircle className="text-white mt-1" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
