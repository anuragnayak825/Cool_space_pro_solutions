import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import { FaRightLong } from 'react-icons/fa6'
import AirconInstallationProcedureCard from './AirconInstallationProcedureCard'
import { FaPhone, FaVoicemail } from 'react-icons/fa'
import QuotationForm from '../QuotationForm2'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion';
import InstallationPricingCards from '../page/InstallationPricingCards'
import InstallationPricingCards2 from '../page/InstallationPricingCards2'

const img = 'https://img.freepik.com/premium-photo/smiling-young-male-electrician-repair-conditioner-client-home-man-mechanic-repairman-fix-filters-air-condition-device-customer-house_255667-47942.jpg'

export default function Aircon_Installation() {
  const [isActive, setisActive] = useState('R wall mounth')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div
        className="w-full h-[40vh] bg-no-repeat bg-top bg-cover relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full h-full bg-[#152042c5] flex flex-col space-y-4 justify-center px-6 md:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Aircon Aircon Installation
          </h1>
          <div className="flex items-center gap-3 text-white text-sm sm:text-lg">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Aircon Installation
          </div>
          <h1 className='text-lg md:text-xl font-semibold text-white tracking-wider italic'>
            Efficient Solutions for Your Cooling Needs
          </h1>
          <p className='max-w-3xl border-s-4 border-s-sky-400 px-4 sm:px-6 text-sm sm:text-base md:text-lg text-white tracking-wider'>
            We provide professional air conditioning services that ensure your unit runs smoothly throughout the year. Whether it’s installation, regular maintenance, or emergency repairs, we’ve got you covered.
          </p>
        </div>
      </div>

      <section className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col lg:flex-row items-start gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%]">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">
            Cool Space Pro Solutions Provides Professional Aircon Installation Services
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3.5 tracking-wide">
            Cool Space Pro Solutions offers expert air conditioning installation for both residential and
            commercial properties. Our certified technicians handle everything from site inspection,
            load assessment, unit selection, to safe installation with precision. We ensure optimal unit
            positioning for maximum cooling efficiency, energy savings, and aesthetic appeal — all
            while following strict safety standards and manufacturer guidelines.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-6">
            Why Professional Aircon Installation is Important
          </h3>
          <ul className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 space-y-4 list-disc ps-4">
            <li>
              <strong className='text-black'> <br /> Ensures Peak Performance:</strong> When your air conditioner is installed by a certified technician, every component—from the refrigerant level to the airflow direction—is set up precisely according to manufacturer standards. This allows your unit to cool your space evenly, without hot spots or inconsistent airflow. Professional setup means maximum comfort, especially during high-temperature seasons.
            </li>
            <li>
              <strong className='text-black'> <br /> Maximizes Energy Efficiency:</strong> A poorly installed AC system can overwork itself to cool your space, consuming more power than necessary. With a professional installation, every detail—like duct sealing, thermostat calibration, and unit placement—is optimized to reduce energy usage. The result? Lower electricity bills and a greener footprint without compromising performance.
            </li>
            <li>
              <strong className='text-black'> <br /> Prevents Future Issues:</strong> Most leading aircon manufacturers include a clause in their warranty that requires professional installation. If your unit is installed by an unqualified individual, you risk voiding the warranty altogether. With certified installation, you get peace of mind knowing your warranty is fully protected in case of future issues.
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row justify-start gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-sm">
                <FaPhone className="text-blue-700 text-lg md:text-xl" />
              </div>
              <p className="font-semibold text-sm md:text-base lg:text-xl">+60 11-2441 9414</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-sm">
                <FaVoicemail className="text-blue-700 text-lg md:text-xl" />
              </div>
              <p className="font-semibold text-sm md:text-base lg:text-xl">example@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%]"
        >
          <QuotationForm />
        </motion.div>
      </section>

      <section className='w-full h-auto'>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Aircon Installation Packages
        </h2>

        <div className="flex justify-center items-center gap-6 sm:gap-10 my-8 flex-wrap">
          <button
            onClick={() => setisActive('R wall mounth')}
            className={`text-base sm:text-lg md:text-xl font-semibold px-6 py-3 rounded-full border-2 transition-all duration-300 shadow-md
        ${isActive === 'R wall mounth'
                ? 'bg-blue-700 text-white border-blue-700 scale-105'
                : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white'}
      `}
          >
            Residential Wall Mounted
          </button>

          <button
            onClick={() => setisActive('C wall mounth')}
            className={`text-base sm:text-lg md:text-xl font-semibold px-6 py-3 rounded-full border-2 transition-all duration-300 shadow-md
        ${isActive === 'C wall mounth'
                ? 'bg-blue-700 text-white border-blue-700 scale-105'
                : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white'}
      `}
          >
            Commercial Wall Mounted
          </button>
        </div>

        <div className="w-full flex justify-center">
          <AnimatePresence mode="wait">
            {isActive === 'R wall mounth' ? (
              <motion.div
                key="residential"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <InstallationPricingCards />
              </motion.div>
            ) : (
              <motion.div
                key="commercial"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <InstallationPricingCards2 />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <GradientCTABanner />
    </Layout>
  )
}
