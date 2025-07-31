import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import { FaRightLong } from 'react-icons/fa6'
import img from '../assets/duct.webp'
import DuctCleaningProcedureCard from './DuctCleaningProcedureCard'
import DuctCleaningPricing from './DuctCleaningPricing'

export default function Duct_Cleaning() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <Layout>
      <div
        className="w-full h-[50vh] sm:h-[60vh] bg-no-repeat bg-center bg-cover relative"
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

      <section className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
          Expert Engineer for
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mt-4 max-w-5xl">
          Cool Space Pro Solutions Provides Efficient Duct Cleaning
        </h1>
        <p className="text-base sm:text-lg font-normal tracking-wide max-w-6xl mt-4 text-gray-700">
          Cool Space Pro Solutions offers professional duct cleaning services designed to improve indoor air quality and enhance HVAC system efficiency. Over time, dust, allergens, mold, and debris can accumulate inside air ducts, reducing airflow and compromising your health. Our skilled technicians use advanced tools and safe methods to thoroughly clean and sanitize your ducts, ensuring cleaner, fresher air throughout your home or workspace. Whether it's a residential setup or a commercial building, we provide reliable, mess-free service that helps your system breathe better—and so can you.


        </p>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mt-6">
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

      </section>

      <DuctCleaningProcedureCard/>

      <DuctCleaningPricing/>


      <GradientCTABanner />
    </Layout>
  )
}
