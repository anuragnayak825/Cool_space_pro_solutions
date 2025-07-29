import React from 'react';
import { FaRegSnowflake, FaPaintRoller, FaCouch, FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Mission & Vision
        </h2>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Mission */}
          <div className="bg-[#F0FBFB] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4 text-[#00C4CC]">
              <FaBullseye size={28} className="mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To elevate living and working spaces through expert air conditioning services,
              innovative interior design, and seamless home renovation. We strive for
              customer satisfaction through quality craftsmanship, modern technology,
              and sustainable practices.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F0FBFB] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4 text-[#00C4CC]">
              <FaEye size={28} className="mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a leading brand in smart living solutions by setting new benchmarks
              in air conditioning, interior aesthetics, and home transformation. We envision
              creating spaces that inspire and improve quality of life.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaCheckCircle className="text-[#00C4CC] mr-2" /> What Drives Us
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
            <li>Customer-Centric Approach: Your comfort and satisfaction are our priorities.</li>
            <li>Innovation & Quality: We blend design, technology, and functionality.</li>
            <li>Sustainability: We promote energy-efficient and eco-friendly solutions.</li>
            <li>Trust & Transparency: Long-term relationships with honesty.</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Core Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Aircon Service */}
            <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-[#00C4CC] mb-4">
                <FaRegSnowflake size={30} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Aircon Services</h4>
              <p className="text-gray-600 text-sm">
                Installation, chemical cleaning, repair, and maintenance for homes and businesses.
              </p>
            </div>

            {/* Interior Design */}
            <div className="bg-white border border-gray-300  rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-[#00C4CC] mb-4">
                <FaCouch size={30} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Interior Design</h4>
              <p className="text-gray-600 text-sm">
                Bespoke residential and commercial interiors with smart space planning and modular elements.
              </p>
            </div>

            {/* Home Renovation */}
            <div className="bg-white border border-gray-300  rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-[#00C4CC] mb-4">
                <FaPaintRoller size={30} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Home Renovation</h4>
              <p className="text-gray-600 text-sm">
                Complete renovation solutions from flooring to ceilings, painting, plumbing, and structural redesign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
