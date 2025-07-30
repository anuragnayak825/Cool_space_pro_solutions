import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function OfferSection() {
    return (
        <section className="w-full bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 lg:px-24 py-12 gap-10">

            {/* Left Text Section */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center">
                    Bringing Luxury & Functionality Into Every Corner
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mt-6 text-gray-700 leading-relaxed tracking-wide">
                    From top-tier air conditioning to luxurious renovations — we bring expertise, elegance, and efficiency to every project. No hidden costs, just real transformation.
                </p>

                <button className="mt-8 w-max px-6 py-3 mx-auto bg-green-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-green-700 transition-all duration-300">
                    <FaWhatsapp /> Chat on WhatsApp
                </button>
            </div>

            {/* Right Image Grid Section */}
            <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Top Full Image */}
                <div className="col-span-1 md:col-span-2 relative group h-[300px] md:h-[400px] lg:h-[60vh] overflow-hidden rounded-md shadow-lg">
                    <img
                        src="https://img.freepik.com/free-photo/full-shot-man-working-with-equipment_23-2148921407.jpg"
                        alt="Aircon Service"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Reliable Aircon Services</h2>
                        <p className="text-base md:text-lg mt-2">For Residential & Commercial Spaces</p>
                    </div>
                </div>

                {/* Bottom Left Image */}
                <div className="relative group h-[300px] md:h-[350px] overflow-hidden rounded-md shadow-lg">
                    <img
                        src="https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278565.jpg"
                        alt="Renovation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-xl md:text-2xl font-bold">Smart Renovations</h2>
                        <p className="text-sm md:text-base mt-1">Transform Your Property with Ease</p>
                    </div>
                </div>

                {/* Bottom Right Image */}
                <div className="relative group h-[300px] md:h-[350px] overflow-hidden rounded-md shadow-lg">
                    <img
                        src="https://img.freepik.com/free-photo/colorful-pastel-minimal-interior-design_23-2151883504.jpg"
                        alt="Interior Design"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-xl md:text-2xl font-bold">Elegant Interiors</h2>
                        <p className="text-sm md:text-base mt-1">Modern Designs with a Personal Touch</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
