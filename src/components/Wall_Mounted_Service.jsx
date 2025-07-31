import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import img from '../assets/wall.webp';
import { FaEye, FaPowerOff, FaTools, FaFan, FaWater, FaWarehouse, FaGasPump, FaSprayCan, FaClipboardCheck } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { FaRightLong } from 'react-icons/fa6';
import WallMountedACPricing from './WallMountedACPricing';
export default function Wall_Mounted_Service() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const procedures = [
    {
      title: 'Initial Visual Inspection',
      description: 'We inspect the unit’s exterior and surrounding area for dust, blockage, or water leakage.',
      icon: <FaEye className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Power & Functionality Test',
      description: 'Before disassembly, the unit is tested for airflow, cooling, and unusual noises.',
      icon: <FaPowerOff className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Unit Disassembly',
      description: 'The indoor panel is opened and components like filters, coils, and blower are accessed.',
      icon: <FaTools className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Deep Cleaning of Filters & Blower',
      description: 'Filters are cleaned or replaced. Blower and coils are treated with chemical spray.',
      icon: <FaFan className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Drain Pipe Flushing',
      description: 'Drainage line is flushed with pressure to remove dirt and prevent leakage.',
      icon: <FaWater className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Outdoor Unit Cleaning',
      description: 'The outdoor condenser coil and fan are cleaned to restore airflow efficiency.',
      icon: <FaWarehouse className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Gas Pressure Check',
      description: 'Refrigerant levels are checked. Gas top-up is done if cooling is below normal.',
      icon: <FaGasPump className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Reassembly & Sanitization',
      description: 'All parts are reassembled. Anti-bacterial treatment is applied inside the unit.',
      icon: <FaSprayCan className="text-3xl text-[#00C4CC]" />,
    },
    {
      title: 'Final Testing & Report',
      description: 'System is powered on to verify performance and report is shared with customer.',
      icon: <FaClipboardCheck className="text-3xl text-[#00C4CC]" />,
    },
  ];
  return (
    <Layout>
      <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: `url(${img})` }} >
        <div className="absolute inset-0 w-full h-full bg-[#152042c5] flex flex-col justify-center items-center space-y-4 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Wall Mounted Service</h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl">
            Home <FaRightLong className="text-sm sm:text-base" /> Wall Mounted Service
          </div>
        </div>
      </div>

      <section className='w-full h-auto py-10 px-20 '>
        <h1 className='text-lg tracking-wider text-[#1574C0] font-bold italic '>Expert Engineer for</h1>
        <h1 className='text-5xl font-bold tracking-wide max-w-5xl mt-4'>Cool Space Pro Solutions Provides Efficient Wall Mounted Service</h1>
        <p className='text-lg font-normal tracking-wide max-w-6xl mt-4'>
          Cool Space Pro Solutions offers specialized servicing for wall-mounted air
          conditioning units, ensuring optimal performance and long-term reliability.
          Our trained technicians carefully inspect, clean, and maintain every component—from
          filters and coils to drainage systems—to restore your AC's cooling power and improve
          air quality. Whether you're facing reduced airflow, unusual noise, or just due for
          a routine service, we provide prompt and efficient solutions tailored to your unit’s
          needs. With our commitment to quality and customer satisfaction, we help you enjoy
          uninterrupted comfort in every corner of your space.
        </p>
        <h1 className='text-2xl font-semibold tracking-wide mt-4'>Why Regular Wall Mounted Aircond Servicing is Essential</h1>
        <ul className='mt-4 space-y-3.5 px-5 text-lg font-normal tracking-wide'>
          <li><strong>Healthier Indoor Air Quality:</strong>Routine servicing removes trapped dust, pollen, bacteria, and mold from filters and coils — ensuring you breathe clean, allergen-free air. Perfect for homes with children, elderly, or asthma sufferers.</li>
          <li><strong>Faster & More Consistent Cooling:</strong> A clean AC unit cools your space quickly and distributes cold air evenly across the room. No more hot spots or uneven temperatures.</li>
          <li><strong>Significant Energy Savings:</strong>Dirty units consume more electricity. Regular maintenance improves energy efficiency, helping you save on monthly utility bills without sacrificing comfort.</li>
          <li><strong>Quieter, Leak-Free Operation:</strong> Say goodbye to annoying noises and water leaks. A well-maintained AC runs smoothly and silently, creating a more peaceful indoor environment.</li>
          <li><strong>Reduced Risk of Sudden Breakdowns: </strong>Professional servicing includes full diagnostic checks that catch problems early — avoiding unexpected malfunctions during peak summer days.</li>
        </ul>
      </section>


      <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Wall Mounted AC Service Procedure
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {procedures.map((step, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] border border-gray-200 hover:border-[#00C4CC] hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00C4CC] mb-2">
                {`${index + 1}. ${step.title}`}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WallMountedACPricing/>

      <GradientCTABanner />
    </Layout>
  )
}
