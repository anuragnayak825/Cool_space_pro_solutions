import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { FaRightLong } from 'react-icons/fa6'
import img from '../assets/cassted.webp'
import GradientCTABanner from '../CTADiscountSection'
import CassetteACProcedure from './CassetteACProcedure'
import CassetteACPricing from './CassetteACPricing'

export default function Cassette_Service() {
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
            Cassette Service
          </h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Cassette Service
          </div>
        </div>
      </div>

      <section className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
          Expert Engineer for
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mt-4 max-w-5xl">
          Cool Space Pro Solutions Provides Efficient Aircon Cassette Service
        </h1>
        <p className="text-base sm:text-lg font-normal tracking-wide max-w-6xl mt-4 text-gray-700">
          Cool Space Pro Solutions delivers expert servicing for cassette-type air conditioning systems, designed to keep your commercial or residential space consistently cool and energy-efficient. Our experienced technicians perform in-depth inspections, thorough cleaning, and precise maintenance to ensure your ceiling-mounted AC units operate at peak performance. From clogged filters and coil cleaning to drain line checks and gas top-ups, we handle every detail with care and precision. With minimal disruption and maximum efficiency, our cassette AC service extends the lifespan of your units while maintaining clean, fresh airflow throughout your space.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mt-6">
          Why Regular Cassette Aircond Servicing is Essential
        </h3>
        <ul className="mt-4 space-y-3 pl-5 text-base sm:text-lg text-gray-700">
          <li>
            <strong>Faster & Balanced Cooling:</strong> All 4 vents function properly, giving 360° air coverage.
          </li>
          <li>
            <strong>Prevents Costly Ceiling Damage:</strong> Flushing drainage and checking the condensate pump prevents water leaks that stain ceilings.
          </li>
          <li>
            <strong> Energy Efficiency & Cost Savings:</strong> Reduced power consumption from optimized operation and clean parts.
          </li>
          <li>
            <strong>Professional Appearance
              :</strong> Cleaned units look better and help maintain a polished interior space — important for commercial areas.
          </li>
          <li>
            <strong>Ensures Healthy Air Quality:</strong> Dirty filters and coils release allergens
            and pollutants into the air.
          </li>
        </ul>
      </section>

      <CassetteACPricing />
      <CassetteACProcedure />

      <GradientCTABanner />
    </Layout>
  )
}
