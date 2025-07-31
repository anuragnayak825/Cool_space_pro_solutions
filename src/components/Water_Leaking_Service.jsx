import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import { FaRightLong } from 'react-icons/fa6'
import WaterLeakingProcedureCard from './WaterLeakingProcedureCard'

import img from "../assets/water-leaking.webp"
export default function Water_Leaking_Service() {
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
            Aircon Water Leaking Service
          </h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Water Leaking Service
          </div>
        </div>
      </div>

      <section className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
          Expert Engineer for
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mt-4 max-w-5xl">
          Cool Space Pro Solutions Provides Reliable Aircon Water Leaking Detection & Repair
        </h1>
        <p className="text-base sm:text-lg font-normal tracking-wide max-w-6xl mt-4 text-gray-700">
          Cool Space Pro Solutions offers specialized aircon water leaking repair services for both
          residential and commercial setups. Our trained technicians quickly diagnose and fix the root
          cause of leakage issues—be it clogged drain pipes, faulty pumps, or improper installation.
          Using advanced equipment and non-invasive methods, we ensure long-lasting solutions that prevent
          water damage to walls, ceilings, or electrical components.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mt-6">
          Why Timely Water Leaking Repair is Essential
        </h3>
        <ul className="mt-4 space-y-3 pl-5 text-base sm:text-lg text-gray-700">
          <li>
            <strong>Prevents Property Damage:</strong> Continuous leaking can damage walls, ceilings, and floors.
          </li>
          <li>
            <strong>Protects Electrical Safety:</strong> Leaks near wiring or switches pose electrical hazards.
          </li>
          <li>
            <strong>Improves Aircon Efficiency:</strong> Addressing leaks ensures the system performs at its best.
          </li>
          <li>
            <strong>Prevents Mold & Mildew:</strong> Standing water or damp conditions promote unhealthy mold growth.
          </li>
          <li>
            <strong>Enhances Indoor Hygiene:</strong> Leak-free systems maintain a cleaner, healthier environment.
          </li>
        </ul>
      </section>

      <WaterLeakingProcedureCard />

      <GradientCTABanner />
    </Layout>
  )
}
