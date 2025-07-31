import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import GradientCTABanner from '../CTADiscountSection'
import { FaRightLong } from 'react-icons/fa6'
import AirconInstallationProcedureCard from './AirconInstallationProcedureCard'

const img = 'https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?t=st=1753962132~exp=1753965732~hmac=2ca2942d70d769cb696bc5558c36e0bb2b87be02a764a5bd003f2df280c47838&w=826'
export default function Aircon_Installation() {
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
            Aircon Aircon Installation
          </h1>
          <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Aircon Installation
          </div>
        </div>
      </div>

      <section className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-base sm:text-lg tracking-wide text-[#1574C0] font-bold italic">
          Expert Engineer for
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mt-4 max-w-5xl">
          Cool Space Pro Solutions Provides Professional Aircon Installation Services
        </h1>
        <p className="text-base sm:text-lg font-normal tracking-wide max-w-6xl mt-4 text-gray-700">
          Cool Space Pro Solutions offers expert air conditioning installation for both residential and
          commercial properties. Our certified technicians handle everything from site inspection,
          load assessment, unit selection, to safe installation with precision. We ensure optimal unit
          positioning for maximum cooling efficiency, energy savings, and aesthetic appeal — all
          while following strict safety standards and manufacturer guidelines.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mt-6">
          Why Professional Aircon Installation is Important
        </h3>
        <ul className="mt-4 space-y-3 pl-5 text-base sm:text-lg text-gray-700">
          <li>
            <strong>Ensures Peak Performance:</strong> Proper setup allows your unit to cool effectively and evenly.
          </li>
          <li>
            <strong>Maximizes Energy Efficiency:</strong> Correct installation reduces energy usage and bills.
          </li>
          <li>
            <strong>Prevents Future Issues:</strong> Avoids common problems like water leakage, vibration, or noise.
          </li>
          <li>
            <strong>Maintains Manufacturer Warranty:</strong> Professional installation ensures warranty validity.
          </li>
          <li>
            <strong>Boosts System Lifespan:</strong> Accurate installation reduces long-term wear and tear.
          </li>
        </ul>
      </section>
      <AirconInstallationProcedureCard />

      <GradientCTABanner />
    </Layout>
  )
}
