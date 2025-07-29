import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

export default function GradientCTABanner() {
    return (
        <section className="relative w-full h-[400px] md:h-[300px] bg-cover bg-top overflow-hidden"
            style={{
                backgroundImage: `url('https://kit2.wirastudio.co/horen/wp-content/uploads/sites/2/2024/02/handyman-working-at-home-repairing-assembling-and-renovation-or-new-hobby-man-measuring-new-table.jpg')`
            }}
        >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000aa] to-[#00000000] z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center p md:px-20">
                <div className="max-w-full text-white space-y-5 ">
                    <h2 className="text-2xl md:text-5xl font-bold leading-tight text-center md:text-left">
                        Take The First Step Toward <br /> Transforming Your Home.
                    </h2>
                    <p className="text-base md:text-lg text-gray-200 text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className='w-full flex lg:flex-row flex-col space-y-2.5 justify-center md:justify-start items-center space-x-7'>
                        <a
                            href="/quote-form"
                            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition shadow"
                        >
                            → Speak to a Specialist
                        </a>
                        <a
                            href="/quote-form"
                            className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition"
                        >
                            <FaWhatsapp className='text-xl'/> Let’s Talk on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
