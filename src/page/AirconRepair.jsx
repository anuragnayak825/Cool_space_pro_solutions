import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import QuotationForm from '../QuotationForm2'
import { FaRightLong } from 'react-icons/fa6'
import { FaPhone, FaVoicemail } from 'react-icons/fa'
import GradientCTABanner from '../CTADiscountSection'
import AirconIssuesSection from '../components/AirconIssuessSction'
import { motion } from 'framer-motion'

const img = 'https://img.freepik.com/premium-photo/smiling-young-male-electrician-repair-conditioner-client-home-man-mechanic-repairman-fix-filters-air-condition-device-customer-house_255667-47942.jpg'

export default function AirconRepair() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <Layout>
            {/* Banner */}
            <div className="w-full h-[40vh] bg-no-repeat bg-top bg-cover relative" style={{ backgroundImage: `url(${img})` }}>
                <div className="w-full h-full bg-[#152042c5] flex flex-col space-y-4 justify-center px-6 md:px-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Aircon Repair</h1>
                    <div className="flex items-center gap-3 text-white text-sm sm:text-lg">
                        Home <FaRightLong className="text-sm sm:text-base" /> Repair
                    </div>
                    <h1 className='text-lg md:text-xl font-semibold text-white tracking-wider italic'>
                        Efficient Solutions for Your Cooling Needs
                    </h1>
                    <p className='max-w-3xl border-s-4 border-s-sky-400 px-4 sm:px-6 text-sm sm:text-base md:text-lg text-white tracking-wider'>
                        We provide professional air conditioning services that ensure your unit runs smoothly throughout the year. Whether it’s installation, regular maintenance, or emergency repairs, we’ve got you covered.
                    </p>
                </div>
            </div>

            {/* Main Content + Form */}
            <section className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col lg:flex-row items-start gap-10">
                {/* Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[55%]"
                >
                    <h1 className="text-xl md:text-2xl font-bold tracking-wider">
                        Cool Spac Pro Solutions Offers Reliable Air Conditioning Repair Services
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3.5 tracking-wide">
                        When the summer heat kicks in, your home’s comfort relies heavily on a well-functioning air conditioning system.
                        If your AC unit starts malfunctioning or breaks down, you may find yourself struggling with unbearable heat and humidity.
                        That’s why it’s crucial to act fast. At Cool Spac Pro Solutions, we provide prompt and professional aircon repair services
                        across Kuala Lumpur to restore comfort to your space as quickly as possible.
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold mt-6">
                        Call Us Immediately If You Notice Any of These Common AC Issues:
                    </h2>
                    <ul className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 space-y-4 list-disc ps-4">
                        <li>
                            <strong className="text-black">Poor Airflow:</strong> If airflow from vents is low, it might be due to a clogged filter, faulty compressor, or blocked ducts. Act fast to avoid further damage.
                        </li>
                        <li>
                            <strong className="text-black">Warm Air Blowing:</strong> Likely caused by low refrigerant, thermostat issues, or broken compressor. Fix early to save energy and cost.
                        </li>
                        <li>
                            <strong className="text-black">Odd Sounds:</strong> Clicking, grinding, or squealing noises indicate serious internal issues. Repair early to avoid breakdowns.
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
                            <p className="font-semibold text-sm md:text-base lg:text-xl">example@gmail.com</p>
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
                    <QuotationForm />
                </motion.div>
            </section>

            <AirconIssuesSection />
            <GradientCTABanner />
        </Layout>
    )
}
