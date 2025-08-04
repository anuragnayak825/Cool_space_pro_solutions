import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import { FaRightLong } from 'react-icons/fa6'
import img from '../assets/duct.webp'
import DuctCleaningProcedureCard from './DuctCleaningProcedureCard'
import DuctCleaningPricing from './DuctCleaningPricing'
import { motion } from 'framer-motion'
import QuotationForm from '../QuotationForm2'

export default function Duct_Cleaning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div
        className="w-full h-[50vh] sm:h-[40vh] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-[#152042c5] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Aircon Duct Cleaning
          </h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Duct Cleaning
          </div>
        </div>
      </div>

      <section className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col lg:flex-row items-start gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%]">
          <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
            Expert Engineer for
          </h2>
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">
            Cool Space Pro Solutions Provides Efficient Duct Cleaning
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3.5 tracking-wide">
            Cool Space Pro Solutions offers professional duct cleaning services designed to improve indoor air quality and enhance HVAC system efficiency. Over time, dust, allergens, mold, and debris can accumulate inside air ducts, reducing airflow and compromising your health. Our skilled technicians use advanced tools and safe methods to thoroughly clean and sanitize your ducts, ensuring cleaner, fresher air throughout your home or workspace. Whether it's a residential setup or a commercial building, we provide reliable, mess-free service that helps your system breathe better—and so can you.


          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-6">
            Why Regular Duct Cleaning is Essential
          </h3>
          <ul className="mt-4 space-y-3 pl-5 text-base sm:text-lg text-gray-700 list-disc">
            <li>
              <strong>Improved Air Quality:</strong> Filters out allergens, dust, and airborne particles — essential for healthy indoor air.
            </li>
            <li>
              <strong>Enhanced HVAC Efficiency:</strong> Clean ducts and filters allow better airflow and reduce strain on the system.
            </li>
            <li>
              <strong>Lower Electricity Bills:</strong> Improved airflow reduces load on the HVAC unit, helping you save on power bills.
            </li>
            <li>
              <strong>Extends Unit Lifespan:</strong> Regular servicing prevents wear and tear on motors, fans, and electrical components.
            </li>
            <li>
              <strong>Elimination of Odors:</strong> Removes stale, musty, or burnt smells trapped inside the duct or coil system.
            </li>
            <li>
              <strong>Reduced Allergy Symptoms:</strong> Ideal for allergy sufferers — removes pollen, pet dander, and other irritants.
            </li>
            <li>
              <strong>Avoids Expensive Repairs:</strong> Early detection of small issues prevents costly breakdowns later.
            </li>
            <li>
              <strong>Ensures Healthy Air Quality:</strong> Prevents the release of bacteria, mold, and pollutants into indoor air.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%]"
        >
          <QuotationForm/>
        </motion.div>
      </section>

      <DuctCleaningProcedureCard />

      <DuctCleaningPricing />


      <GradientCTABanner />
    </Layout>
  )
}
