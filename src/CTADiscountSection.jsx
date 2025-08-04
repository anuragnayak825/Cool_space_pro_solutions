import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function GradientCTABanner() {
    return (
        <section
            className="relative w-full h-[400px] md:h-[300px] bg-cover bg-top overflow-hidden"
            style={{
                backgroundImage: `url('https://kit2.wirastudio.co/horen/wp-content/uploads/sites/2/2024/02/handyman-working-at-home-repairing-assembling-and-renovation-or-new-hobby-man-measuring-new-table.jpg')`
            }}
        >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#000000bb] z-10"></div>

            {/* Centered Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-10 text-white text-center space-y-4">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                    Take The First Step Toward Transforming Your Home.
                </h2>
                <p className="text-base md:text-xl text-gray-200 max-w-3xl">
                    Stay cool and comfortable all year round. Our expert aircon services ensure your system runs efficiently with top-quality maintenance, repair, and installation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button
                        onClick={() => window.open('tel:+601124419414')}
                        className="group inline-flex items-center justify-center gap-2 bg-blue-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition shadow"
                    >
                        <span className="wave-text">→ Speak to a Specialist</span>
                    </button>

                    <button
                        onClick={() => window.open('https://wa.me/+601124419414', '_blank')}
                        className="group inline-flex items-center justify-center gap-2 bg-green-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition"
                    >
                        <FaWhatsapp className="text-xl" />
                        <span className="wave-text">Let’s Talk on WhatsApp</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
