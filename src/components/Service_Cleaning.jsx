import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { FaRightLong } from 'react-icons/fa6';
import img from '../assets/cleaning.webp';
import { FaSearch, FaTools, FaThermometerHalf, FaSprayCan } from 'react-icons/fa';
import GradientCTABanner from '../CTADiscountSection';

export default function Service_Cleaning() {
  const steps = [
    {
      title: 'Inspection & Diagnosis',
      description: 'We begin by checking the unit for any visible or internal issues.',
      icon: <FaSearch className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Disassembly & Component Cleaning',
      description: 'Components are carefully dismantled and thoroughly cleaned.',
      icon: <FaTools className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Performance Testing',
      description: 'Once reassembled, the unit is tested for cooling performance.',
      icon: <FaThermometerHalf className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Final Sanitization',
      description: 'Anti-bacterial and anti-mold treatment for long-lasting hygiene.',
      icon: <FaSprayCan className="text-3xl text-[#00C4CC]" />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <div
        className="w-full h-[50vh] sm:h-[60vh] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-[#152042c5] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Aircon Service & Repair
          </h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Service & Repair
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
          Expert Engineer for
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mt-4 max-w-5xl">
          Cool Space Pro Solutions Provides Efficient Aircon Service & Reapir
        </h1>
        <p className="text-base sm:text-lg font-normal tracking-wide max-w-6xl mt-4 text-gray-700">
          Cool Space Pro Solutions specializes in delivering fast, reliable, and affordable air
          conditioning service and cleaning solutions for both residential and commercial spaces.
          Our expert technicians ensure your aircon units run at peak performance, enhancing cooling
          while reducing energy use. From filter cleaning to deep chemical washes and full system
          checks, we use modern tools and eco-friendly practices to keep your indoor air fresh.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mt-6">
          Why Regular Aircond Servicing is Essential
        </h3>
        <ul className="mt-4 space-y-3 pl-5 text-base sm:text-lg text-gray-700">
          <li>
            <strong>Improves Cooling Efficiency:</strong> Dust and dirt block airflow. Regular
            servicing restores optimal airflow.
          </li>
          <li>
            <strong>Reduces Electricity Bills:</strong> A clean system doesn’t overwork itself,
            saving energy and money.
          </li>
          <li>
            <strong>Extends Unit Lifespan:</strong> Servicing reduces wear and tear on internal
            components.
          </li>
          <li>
            <strong>Avoids Expensive Repairs:</strong> Early detection of issues helps avoid costly
            repairs.
          </li>
          <li>
            <strong>Ensures Healthy Air Quality:</strong> Dirty filters and coils release allergens
            and pollutants into the air.
          </li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white py-14 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Aircond Service Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] border border-gray-200 hover:border-[#00C4CC] hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00C4CC] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <GradientCTABanner />
    </Layout>
  );
}
