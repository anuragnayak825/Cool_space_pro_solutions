import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHammer, FaCheckCircle } from "react-icons/fa";
import video from '../assets/5121951-studio-indoor-3840x2160_4S7xGZk2.mp4';
import GradientCTABanner from '../CTADiscountSection';

const img = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';

const steps = [
  {
    title: "Initial Consultation & Site Evaluation",
    icon: <FaClipboardList size={30} className="text-blue-600" />,
    description: "Our experts visit your home, understand your needs, assess the existing structure, and outline the vision and scope of your renovation project."
  },
  {
    title: "Conceptual Design & Planning",
    icon: <FaDraftingCompass size={30} className="text-blue-600" />,
    description: "From spatial planning to interior and exterior styles, our designers provide concept sketches and detailed layouts for your whole-home transformation."
  },
  {
    title: "Material Selection & Budget Alignment",
    icon: <FaCogs size={30} className="text-blue-600" />,
    description: "Choose premium finishes, fixtures, flooring, paints, and smart home options tailored to your budget and aesthetic preferences."
  },
  {
    title: "Renovation & Build Phase",
    icon: <FaHammer size={30} className="text-blue-600" />,
    description: "Our skilled team executes every aspect of the remodel—kitchen, bathrooms, flooring, lighting, painting, and structural work—on time and to perfection."
  },
  {
    title: "Walkthrough & Project Handover",
    icon: <FaCheckCircle size={30} className="text-blue-600" />,
    description: "A final walkthrough ensures everything meets your expectations. We clean up thoroughly and officially hand over your beautifully renovated home."
  }
];

export default function Whole_Home_Renovations() {
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
            Whole Home Renovations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl font-medium">
            Reimagine your entire living space with end-to-end renovation services that bring beauty, function, and modern luxury to every corner of your home.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="w-full px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 italic tracking-wide">
          Transform Your Home Into a Personalized Sanctuary
        </h2>
        <div className="max-w-6xl mt-4 space-y-6 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
          <p>
            At Cool Space Pro Solutions, we specialize in whole home renovations that reflect your lifestyle, elevate functionality, and redefine modern comfort. From tearing down walls to redesigning interiors, we manage every detail with precision and care.
          </p>
          <p>
            Whether you're upgrading a single floor or giving your entire house a complete makeover, our team ensures a seamless, efficient, and stress-free renovation journey from start to finish.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4">Our Comprehensive Renovation Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base font-semibold uppercase italic">
          <li>Full Interior Redesign & Structural Alterations</li>
          <li>Modular Kitchen & Smart Storage Solutions</li>
          <li>Bathroom Remodeling with Luxury Fixtures</li>
          <li>Electrical, Plumbing & HVAC Upgrades</li>
          <li>Flooring, Ceiling & Painting Enhancements</li>
        </ul>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Renovation Process
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
