import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHammer, FaCheckCircle } from "react-icons/fa";
import video from '../assets/0-bathroom-sink-1920x1080_l1oDAhuM.mp4';
import GradientCTABanner from '../CTADiscountSection';

const img = 'https://img.freepik.com/free-photo/medium-shot-senior-man-cleaning-shower_23-2149535084.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80';

const steps = [
  {
    title: "Initial Consultation & Site Visit",
    icon: <FaClipboardList size={30} className="text-blue-600" />,
    description: "We understand your needs and assess your current bathroom layout to begin planning."
  },
  {
    title: "Design & Proposal",
    icon: <FaDraftingCompass size={30} className="text-blue-600" />,
    description: "Visualize your new bathroom with modern 3D designs and receive a transparent estimate."
  },
  {
    title: "Material & Fixture Selection",
    icon: <FaCogs size={30} className="text-blue-600" />,
    description: "Select premium tiles, vanities, fittings, and finishes with expert guidance."
  },
  {
    title: "Renovation & Installation",
    icon: <FaHammer size={30} className="text-blue-600" />,
    description: "Our skilled team handles plumbing, tiling, electricals, and fixture installation with precision."
  },
  {
    title: "Final Touches & Quality Check",
    icon: <FaCheckCircle size={30} className="text-blue-600" />,
    description: "We ensure everything is spotless and functional with a detailed walkthrough."
  }
];

export default function Bathroom_Renovations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
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
      {/* Hero Section */}
      <div className="w-full h-[40vh] md:h-[60vh] bg-center bg-cover relative" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-[#152042c5] flex flex-col justify-center space-y-4 px-4 sm:px-8 lg:px-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Bathroom Renovations</h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 max-w-3xl">
            Premium Bathroom Renovation Services – Beautiful Designs, Functional Spaces, Expert Craftsmanship
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 italic mb-4">
          Transform Your Bathroom into a Luxurious Retreat
        </h2>
        <p className="text-base sm:text-lg text-gray-600 font-medium mb-4 max-w-5xl">
          Your bathroom should be more than just a functional space — it should be a personal retreat that reflects your style and meets your everyday needs. At Cool Space Pro Solutions, we offer complete bathroom renovation services that blend high-quality materials, expert craftsmanship, and modern design to elevate your home’s comfort and value.
        </p>
        <p className="text-base sm:text-lg text-gray-600 font-medium mb-6 max-w-5xl">
          Whether you're dreaming of a spa-like oasis or a compact, efficient space, our tailored renovation process ensures the perfect balance of beauty, comfort, and utility. We manage every detail — from layout planning and plumbing to tilework, lighting, and fixture installation — all executed to the highest standards.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Our Complete Bathroom Renovation Services</h3>
        <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-2 font-semibold italic">
          <li>Custom Bathroom Design & 3D Planning</li>
          <li>Shower Enclosures & Bathtub Installations</li>
          <li>Vanity & Storage Solutions</li>
          <li>Wall & Floor Tiling with Waterproofing</li>
          <li>Plumbing, Lighting & Smart Fixtures</li>
        </ul>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Renovation Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">{step.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={ref} className="w-full px-4 sm:px-6 lg:px-20 py-12">
        <div className="relative overflow-hidden shadow-xl h-[40vh] md:h-[60vh]">
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
                <FaPlay size={30} />
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
