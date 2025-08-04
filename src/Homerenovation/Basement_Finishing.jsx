import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import { FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHammer, FaCheckCircle } from "react-icons/fa";
import video from '../assets/0_Industry_Room_1920x1080.mp4';
import GradientCTABanner from '../CTADiscountSection';

const img = 'https://img.freepik.com/free-photo/full-shot-woman-painting-wall_52683-100073.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80';

const steps = [
  {
    title: "Site Assessment & Consultation",
    icon: <FaClipboardList size={30} className="text-blue-600" />,
    description: "We assess your home’s exterior and understand your goals to create a tailored renovation plan that complements your architectural style, climate needs, and lifestyle preferences."
  },
  {
    title: "Design Planning",
    icon: <FaDraftingCompass size={30} className="text-blue-600" />,
    description: "Receive detailed drawings and 3D visualizations from our design team, ensuring every choice—from siding patterns to porch additions—is exactly how you envision it."
  },
  {
    title: "Material Selection",
    icon: <FaCogs size={30} className="text-blue-600" />,
    description: "Choose from a curated collection of premium materials including eco-friendly paints, weatherproof claddings, energy-efficient windows, and more."
  },
  {
    title: "Exterior Remodeling Execution",
    icon: <FaHammer size={30} className="text-blue-600" />,
    description: "We execute all tasks—plastering, painting, roofing, fencing, outdoor flooring, and lighting—with precision, safety, and cleanliness as our top priorities."
  },
  {
    title: "Final Inspection & Cleanup",
    icon: <FaCheckCircle size={30} className="text-blue-600" />,
    description: "We conduct a thorough walk-through with you, ensuring every detail exceeds expectations and your exterior is left spotless and ready to impress."
  }
];

export default function Basement_Finishing() {
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
            Exterior Renovations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl font-medium">
            Breathe new life into your home’s exterior with stunning upgrades, durable materials, and skilled craftsmanship from our expert team.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="w-full px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 italic tracking-wide">
          Elevate Your Curb Appeal with Confidence
        </h2>
        <div className="max-w-6xl mt-4 space-y-6 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
          <p>
            Your home’s exterior is the first impression it makes. At Cool Space Pro Solutions, we specialize in transforming outdated or damaged exteriors into beautiful, functional, and modern masterpieces. Whether you want to add value, improve energy efficiency, or simply love your home again — we’ve got you covered.
          </p>
          <p>
            We focus on quality execution, minimal disruption, and end-to-end project management so you can relax and enjoy the transformation. Our renovation packages are fully customizable based on your needs, materials, and budget.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4">Our Exterior Renovation Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base font-semibold uppercase italic">
          <li>Facade Modernization & Wall Cladding</li>
          <li>Roofing, Waterproofing & Drainage Solutions</li>
          <li>Weatherproof Exterior Painting & Textures</li>
          <li>Smart Outdoor Lighting & Landscape Features</li>
          <li>Balcony & Terrace Upgrades with Railing Design</li>
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

      {/* Basement Finishing Section */}
      <section className="w-full px-4 sm:px-8 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Consider Basement Finishing?
        </h2>
        <p className="text-gray-700 max-w-4xl mb-8 text-base sm:text-lg leading-relaxed font-medium">
          Transform your dark, unused basement into a bright, welcoming, and fully functional living space. Whether you're looking to build a home theater, gym, guest suite, office, or game room—our team helps you unlock the hidden potential of your home.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Advantages of Basement Finishing:</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm sm:text-base font-semibold italic">
          <li>Additional Living Space Without Expanding Footprint</li>
          <li>Increased Property Value & Buyer Appeal</li>
          <li>Energy-Efficient Insulation & Moisture Protection</li>
          <li>Custom Layouts for Your Lifestyle Needs</li>
          <li>Quick Turnaround With Professional Execution</li>
        </ul>

        <p className="mt-8 text-gray-600 max-w-4xl text-sm sm:text-base font-medium">
          Our basement remodeling services combine functional design, code-compliant construction, and aesthetic finishes to create a space that feels like a natural extension of your home.
        </p>
      </section>
    </Layout>
  );
}
