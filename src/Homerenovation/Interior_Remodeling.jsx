import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHammer, FaCheckCircle } from "react-icons/fa";
import video from '../assets/5121951-studio-indoor-3840x2160_4S7xGZk2.mp4';
import GradientCTABanner from '../CTADiscountSection';

const img = 'https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg?t=st=1753707474~exp=1753711074~hmac=b3e13023035c22b6b887a60e5ab6be6037e347f9cc594290a34e10b2cbb6353d&w=1380';

const steps = [
  {
    title: "Design Consultation & Interior Assessment",
    icon: <FaClipboardList size={30} className="text-blue-600" />,
    description: "We start by evaluating your interior space, understanding your lifestyle needs, and defining the design vision for your ideal home interior."
  },
  {
    title: "Concept Development & Layout Planning",
    icon: <FaDraftingCompass size={30} className="text-blue-600" />,
    description: "Our interior designers present mood boards, 2D/3D layouts, and sample materials to help you visualize your redesigned space."
  },
  {
    title: "Material Selection & Cost Optimization",
    icon: <FaCogs size={30} className="text-blue-600" />,
    description: "We assist you in choosing flooring, paint, lighting, furniture, and more—balancing luxury, durability, and budget."
  },
  {
    title: "Renovation Execution",
    icon: <FaHammer size={30} className="text-blue-600" />,
    description: "From demolition to final polish, our skilled craftsmen transform your interiors efficiently and with superior quality workmanship."
  },
  {
    title: "Final Touches & Handover",
    icon: <FaCheckCircle size={30} className="text-blue-600" />,
    description: "We finalize with styling, quality checks, and a detailed walkthrough before handing over your refreshed, refined interiors."
  }
];

export default function Interior_Remodeling() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="w-full h-[45vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-[#152042d0] flex flex-col justify-center px-6 sm:px-10 md:px-20 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Interior Remodeling
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl font-medium">
            Redefine your living spaces with personalized interior remodeling that fuses functionality, elegance, and modern lifestyle design.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="w-full px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 italic tracking-wide">
          Bring New Life to Your Interiors
        </h2>
        <div className="max-w-6xl mt-4 space-y-6 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
          <p>
            Cool Space Pro Solutions specializes in creating functional and aesthetically pleasing interiors tailored to your taste and lifestyle. Whether it’s modern minimalism, rustic charm, or luxurious comfort, we bring your vision to life.
          </p>
          <p>
            From reconfiguring layouts to installing designer elements, we handle every detail of your interior remodeling with creativity, precision, and care.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4">Our Interior Remodeling Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base font-semibold uppercase italic">
          <li>Living Room & Bedroom Redesign</li>
          <li>Modular Kitchen Transformation</li>
          <li>Custom Storage & Wardrobe Solutions</li>
          <li>False Ceiling, Lighting & Paintworks</li>
          <li>Home Office & Workspace Setup</li>
        </ul>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Interior Remodeling Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section ref={ref} className="w-full px-4 sm:px-8 md:px-20 py-12 bg-white">
        <div className="relative overflow-hidden shadow-xl h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl">
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
              <button
                onClick={handlePlay}
                className="bg-white text-black p-4 rounded-full hover:scale-110 transition duration-300"
              >
                <FaPlay size={28} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <GradientCTABanner />
    </Layout>
  );
}
