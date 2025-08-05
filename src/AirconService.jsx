import React, { useEffect } from 'react';
import Layout from './Layout/Layout';
import { FaRightLong, FaVoicemail, FaPhone } from 'react-icons/fa6';
import QuotationForm from './QuotationForm2';
import GradientCTABanner from './CTADiscountSection';
import PricingTable from './components/PricingTable';
import { motion } from 'framer-motion';

const img =
  'https://img.freepik.com/premium-photo/smiling-young-male-electrician-repair-conditioner-client-home-man-mechanic-repairman-fix-filters-air-condition-device-customer-house_255667-47942.jpg';

export default function AirconService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Banner Section */}
      <div
        className="w-full  h-[40vh] bg-no-repeat bg-top bg-cover relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full h-full bg-[#152042c5] flex flex-col justify-center px-4 sm:px-6 md:px-20 py-6 text-wrap">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white break-words max-w-full leading-snug"
          >
            Aircon Services
          </motion.h1>

          <div className="flex flex-wrap items-center gap-3 text-white text-sm sm:text-lg md:text-xl mt-2">
            Home <FaRightLong className="text-sm sm:text-base" /> Aircon Service
          </div>

         
        </div>
      </div>

      {/* Content + Quotation Form Section */}
      <section className="w-full flex flex-col lg:flex-row justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 py-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%]"
        >
          <h1 className="text-2xl font-bold tracking-wider">
            Cool Spac Pro Solutions: Expert Aircon Service
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 tracking-wide">
            Living in regions with high humidity, such as Kuala Lumpur, makes air conditioning an essential part of daily
            life. To ensure comfort and efficiency, regular care and cleaning of HVAC systems are vital. At Cool Spac Pro
            Solutions, we specialize in providing top-notch air conditioning cleaning, maintenance, repair, and installation
            services.
          </p>

          <ul className="mt-4 text-base sm:text-lg text-gray-600 space-y-4">
            <li>
              <strong className="text-black">Airflow Efficiency:</strong><br />
              Over time, as your air conditioning unit operates daily, the internal filters begin to collect dust, dirt, and other airborne particles. These filters are designed to trap contaminants and ensure that only clean, cool air is circulated throughout your space. However, when these filters are not cleaned or replaced regularly, they become clogged, which significantly restricts airflow.
            </li>
            <li>
              <strong className="text-black">Energy Efficiency & Cost Savings:</strong><br />
              Regular maintenance and proper installation ensure your air conditioning unit operates at peak performance. A clean and well-installed system cools more efficiently, consumes less power, and significantly reduces your monthly electricity bills.
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row justify-start gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full shadow">
                <FaPhone className="text-blue-700 text-xl" />
              </div>
              <p className="font-semibold text-lg">+60 11-2441 9414</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full shadow">
                <FaVoicemail className="text-blue-700 text-xl" />
              </div>
              <p className="font-semibold text-lg">coolspaceprosolution@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Quotation Form */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%]"
        >
          <QuotationForm />
        </motion.div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* CTA Banner */}
      <GradientCTABanner />
    </Layout>
  );
}
