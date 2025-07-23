import React from 'react';

export default function ServiceOverviewSection() {
    return (
        <section className="relative bg-[#f8f9fa] py-16 px-4 md:px-12">
            {/* Top SVG Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[120px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        className="fill-[#ffffff]"
                    ></path>
                </svg>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Side - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Expert Air Conditioning & Interior Design Services
                    </h2>
                    <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                    <p className="text-gray-600 mb-4">
                        We specialize in energy-efficient air conditioning solutions and modern interior design tailored to residential, commercial, and office spaces.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Our team combines technical expertise with artistic vision to create spaces that feel as good as they look. Whether you're upgrading your cooling system or transforming your interior, we’ve got you covered.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-300">
                        READ MORE
                    </button>
                </div>

                {/* Right Side - Images */}
                <div className="grid grid-cols-3 gap-4">
                    <img
                        src="https://img.freepik.com/free-photo/technician-checking-outdoor-unit-air-conditioner_23-2149212375.jpg"
                        alt="Aircon tools"
                        className="rounded-lg w-full h-full object-cover col-span-1"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/men-wearing-helmet-working_23-2147767183.jpg"
                        alt="Technicians"
                        className="rounded-lg w-full h-full object-cover col-span-1"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/man-repairing-air-conditioner_23-2149309743.jpg"
                        alt="Aircon repair"
                        className="rounded-lg w-full h-full object-cover col-span-1"
                    />
                </div>
            </div>
        </section>
    );
}
