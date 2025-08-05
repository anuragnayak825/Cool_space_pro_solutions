import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { FaRightLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import GradientCTABanner from '../CTADiscountSection';
import QuotationForm from '../QuotationForm2';
import { FaPhone, FaVoicemail } from 'react-icons/fa';
import ServiceCards from '../components/ServiceCard';


const img = 'https://img.freepik.com/premium-photo/smiling-young-male-electrician-repair-conditioner-client-home-man-mechanic-repairman-fix-filters-air-condition-device-customer-house_255667-47942.jpg'

export default function AirconMaintenance() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <div className="w-full h-[40vh] bg-no-repeat bg-top bg-cover relative" style={{ backgroundImage: `url(${img})` }}>
                <div className="w-full h-full bg-[#152042c5] flex flex-col space-y-4 justify-center px-6 md:px-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Aircon Maintenance</h1>
                    <div className="flex items-center gap-3 text-white text-sm sm:text-lg">
                        Home <FaRightLong className="text-sm sm:text-base" /> Aircon Maintenance
                    </div>
                </div>
            </div>

            <section className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col lg:flex-row items-start gap-10">
                {/* Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[55%]"
                >
                    <h1 className="text-xl md:text-2xl font-bold tracking-wider">
                        Cool Spac Pro Solutions Offers Efficient Aircon Maintenance Solutions
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3.5 tracking-wide">
                        Taking care of your air conditioning system isn’t just about comfort—it’s about performance,
                        energy efficiency, and long-term savings. Regular aircon maintenance ensures that your unit
                        runs smoothly, avoids breakdowns, and delivers cool air when you need it most. At AC Cool
                        N Cool Engineering, we offer expert maintenance services designed to prevent major issues,
                        improve performance, and extend the life of your AC system.
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold mt-6">
                        When Should You Schedule Aircon Maintenance?
                    </h2>
                    <ul className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 space-y-4 list-disc ps-4">
                        <li>
                            <strong className="text-black">Before the peak heat hits:</strong> <br /> It’s best to have your system checked and tuned before the intense summer heat arrives. Waiting until it's already hot outside may leave you stuck in uncomfortable temperatures while waiting for repairs.
                        </li>
                        <li>
                            <strong className="text-black">If you hear unusual noises:</strong> <br /> Older units often develop strange sounds over time. But if you start noticing sudden buzzing, humming, or squealing, it may signal a deeper issue—such as obstructed airflow or damaged internal components. Let a technician diagnose and fix the problem before it worsens.
                        </li>
                        <li>
                            <strong className="text-black">If your aircon isn’t cooling properly:</strong> <br /> If your system is blowing warm or only mildly cool air, it might be due to dirty coils, clogged filters, or even refrigerant issues. These problems can reduce efficiency and increase electricity costs if left unchecked.
                        </li>
                    </ul>

                    {/* Contact */}
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
                            <p className="font-semibold text-sm md:text-base lg:text-xl">coolspaceprosolution@gmail.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Quotation Form */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-[45%]"
                >
                    <QuotationForm/>
                </motion.div>
            </section>

            <ServiceCards/>

            <GradientCTABanner/>
        </Layout>
    )
}
