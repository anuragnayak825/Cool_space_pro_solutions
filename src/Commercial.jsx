
import React, { useEffect, useRef, useState } from 'react'
import Layout from './Layout/Layout'
import { useLocation } from 'react-router-dom'
import QuotationForm from './QuotationForm2'
import { FaPhone } from 'react-icons/fa'
import GradientCTABanner from './CTADiscountSection'
import { motion, useInView } from 'framer-motion'
const bannerimg2 = 'https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg?t=st=1754042845~exp=1754046445~hmac=add4cf0a5498cf1567b8fb1680a6f7a33185c233357462d30c7ba4040abcd9ae&w=826'
const Heading2 = 'Commercial Aircon Services In KL';
    const offer = 'Fill in our form to receive a no obligation FREE quote today plus a 10% discount on a chemical clean.';

export default function Commercial() {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const location = useLocation();
    const [service, setservice] = useState([])
    const commercialServices = [
        {
            title: 'Commercial Aircon Installation',
            image: 'https://img.freepik.com/free-photo/smoke-pipe-industry-factory_1127-3436.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_incoming&w=740&q=80', // Replace with your preferred image
            points: [
                'Centralized HVAC system installation',
                'Ducted & VRF system setup for offices/factories',
                'Roof-top packaged unit installation',
                'Energy-efficient planning & zoning',
                'Custom climate control design for large spaces',
            ],
        },
        {
            title: 'Scheduled Maintenance Contracts',
            image: 'https://img.freepik.com/free-photo/specialist-phone-with-home-owner_482257-80143.jpg?t=st=1754044169~exp=1754047769~hmac=b17bd81ffab8726dccf4a12aaf50ed5d614cec7095e3666c601942a09d4e35a1&w=826', // Replace as needed
            points: [
                'Routine preventive servicing plans',
                '24/7 emergency maintenance support',
                'Filter & airflow optimization',
                'Component wear check & lubrication',
                'Compliance with commercial safety standards',
            ],
        },
        {
            title: 'Commercial Aircon Repair',
            image: 'https://img.freepik.com/free-photo/worker-refilling-hvac-system-refrigerant_482257-90516.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_incoming&w=740&q=80',
            points: [
                'Diagnosis of large-scale system failures',
                'Motor, fan, compressor replacements',
                'Control system and sensor repairs',
                'Refrigerant leakage & recharge handling',
                'Downtime minimization with quick response',
            ],
        },
        {
            title: 'Air Quality & Ventilation Upgrades',
            image: 'https://img.freepik.com/free-photo/mechanic-calibrating-pressure-device_482257-92757.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_incoming&w=740&q=80',
            points: [
                'HEPA filter & purifier integration',
                'Fresh air ducting for enclosed spaces',
                'Humidity control systems',
                'CO2 level monitoring',
                'Indoor air quality assessments & upgrades',
            ],
        },
    ];
    return (
        <Layout>
            {/* Hero Section */}
            <div className="w-full h-[40vh] bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: `url(${location.pathname === '/residental-service' ? bannerImg : bannerimg2})` }}>
                <div className="absolute inset-0 w-full h-full bg-[#152042c5] px-4 md:px-10 lg:px-20 py-10">
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide italic'>{location.pathname === '/residental-service' ? Heading : Heading2}</h1>
                    <p className='text-white text-base md:text-lg lg:text-xl mt-4 md:mt-6 max-w-3xl tracking-wider'>{offer}</p>
                </div>
            </div>

            {/* How We Deliver Comfort */}
            <section className='w-full h-auto px-4 md:px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl text-blue-950 italic font-bold uppercase mb-6'>How We Deliver Comfort</h1>
                    <hr className='w-20 h-1 border border-blue-800 bg-blue-800' />
                    <p className='text-gray-500 mt-6 text-base md:text-lg   font-semibold max-w-2xl'>
                        At Aircon Hero, we specialize in creating indoor environments that boost productivity and comfort. We know how essential it is to maintain the right temperature for both your team and your customers — because a comfortable space leads to better work, happier visitors, and smoother operations.
                    </p>
                    <p className='text-gray-500 mt-6 text-base md:text-lg xl:text-xl font-semibold max-w-2xl'>
                        We offer a comprehensive range of air conditioning systems tailored for all kinds of spaces — from corporate offices and local retail stores to large commercial complexes and industrial facilities.
                    </p>
                    <p className='text-gray-500 mt-6 text-base md:text-lg xl:text-xl font-semibold max-w-2xl'>
                        For residential clients, we offer everything from split and inverter Aircon installations to deep chemical cleaning services that ensure fresh, healthy air throughout your living spaces.

                        For commercial spaces, we design and install efficient HVAC systems for offices, retail stores, factories, and warehouses. Our maintenance programs are designed to reduce downtime and energy costs while improving system longevity.
                    </p>
                    <div className='w-full flex items-center mt-6 space-x-3'>
                        <div className='bg-gray-100 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-sm'>
                            <FaPhone className='text-blue-700 text-lg md:text-xl' />
                        </div>
                        <p className='font-semibold text-base md:text-xl'>+60 11-2441 9414</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <QuotationForm/>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
                    Commercial Aircon Services
                </h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                    {commercialServices.map((service, index) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: '-50px' });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-72 md:h-80 lg:h-[22rem] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
                                                d="M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 100 18 9 9 0 000-18z" /></svg>
                                        {service.title}
                                    </h3>
                                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-[16px] md:text-[17px] leading-relaxed">
                                        {service.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-blue-500 mt-1">✔️</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Banner */}
            <GradientCTABanner />
        </Layout>
    )
}
