import React, { useEffect, useRef, useState } from 'react'
import Layout from '../Layout/Layout'
import { FaPlay } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import {
  FaClipboardList, FaDraftingCompass, FaCogs, FaHammer, FaCheckCircle
} from "react-icons/fa"

import video from '../assets/0-kitchen-modern-kitchen-3840x2160_wnEyeDI9.mp4'
import GradientCTABanner from '../CTADiscountSection'

const img = 'https://img.freepik.com/free-photo/full-shot-people-carrying-placard-together_23-2149328067.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'

const steps = [
  {
    title: "Initial Consultation & Site Visit",
    icon: <FaClipboardList size={30} className="text-blue-600" />,
    description: "We understand your needs and measure your space for accurate planning."
  },
  {
    title: "3D Design & Proposal",
    icon: <FaDraftingCompass size={30} className="text-blue-600" />,
    description: "Visualize your future kitchen with 3D renders and a clear estimate."
  },
  {
    title: "Material Selection",
    icon: <FaCogs size={30} className="text-blue-600" />,
    description: "Choose finishes, fixtures, and layouts with expert guidance."
  },
  {
    title: "Professional Execution",
    icon: <FaHammer size={30} className="text-blue-600" />,
    description: "Licensed professionals handle demolition, plumbing, and carpentry."
  },
  {
    title: "Final Touches & Inspection",
    icon: <FaCheckCircle size={30} className="text-blue-600" />,
    description: "Final walkthrough with quality checks to ensure your satisfaction."
  }
];

export default function Kitchen_Remodeling() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 w-full h-full bg-[#152042c5] flex flex-col justify-center space-y-4 px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Kitchen Remodeling</h1>
          <p className='text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-3xl'>
            Premium Kitchen Remodeling Services – Beautiful Designs, Functional Spaces, Expert Craftsmanship
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className='w-full h-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 tracking-wider italic'>
          "Transform Your Kitchen Into a Modern Culinary Space"
        </h1>
        <p className='max-w-5xl font-medium text-gray-500 mt-4 text-base sm:text-lg leading-relaxed'>
          A modern kitchen isn’t just a place to cook—it’s the heart of your home. Whether you're looking to improve functionality, upgrade outdated features, or create an open-concept layout, remodeling your kitchen adds value and comfort.
        </p>
        <p className='max-w-5xl font-medium text-gray-500 mt-4 text-base sm:text-lg leading-relaxed'>
          The kitchen is no longer just a place to prepare meals—it's the heart of your home where families gather, stories are shared, and memories are made. Remodeling your kitchen offers more than a visual upgrade. It’s about improving functionality, increasing home value, and creating a space you truly enjoy spending time in.
        </p>
        <p className='max-w-5xl font-medium text-gray-500 mt-4 text-base sm:text-lg leading-relaxed'>
          Whether you’re dealing with outdated appliances, poor layout, lack of storage, or simply want a fresh new look, a kitchen remodel is an investment in both beauty and practicality. From energy-efficient upgrades to space-saving cabinetry and open layouts, the possibilities are endless.
        </p>

        <h2 className='text-lg sm:text-xl font-semibold text-gray-700 tracking-wide mt-6 mb-3'>Our Complete Kitchen Remodeling Services</h2>
        <ul className='text-gray-700 space-y-2 list-disc pl-6 text-sm sm:text-base font-semibold italic'>
          <li>Custom Kitchen Design</li>
          <li>Cabinet Replacement & Installation</li>
          <li>Countertops & Backsplashes</li>
          <li>Plumbing & Sink Upgrades</li>
          <li>Flooring Installation</li>
        </ul>
      </section>

      {/* Process Cards */}
      <section className="py-16 bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Remodeling Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section ref={ref} className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="relative overflow-hidden rounded-xl shadow-xl h-[40vh] sm:h-[50vh] md:h-[60vh]">
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

      {/* CTA Banner */}
      <GradientCTABanner />
    </Layout>
  )
}
