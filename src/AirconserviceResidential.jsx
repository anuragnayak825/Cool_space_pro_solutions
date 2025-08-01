import React, { useContext, useEffect } from 'react';
import Layout from './Layout/Layout';
import { FaArrowRightLong, FaRightLong } from 'react-icons/fa6';
import baner from './assets/service_baner.webp';
import Fow_baner from './assets/Fow_img.webp';
import img from './assets/airconbaner.webp';
import { motion } from 'framer-motion'

import icon1 from './assets/technical-support.png';
import icon2 from './assets/deal.png';
import icon3 from './assets/engineer.png';
import icon4 from './assets/vacuum-cleaner.png';
import icon5 from './assets/air-conditioner.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/Authprovider';

const services = [
    {
        title: 'Aircond Service & Cleaning',
        desc: 'Keep your air conditioners running smoothly with our expert cleaning and servicing packages. Regular maintenance extends lifespan and boosts efficiency.',
        icon: icon2,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-2.jpg',
        path: '/aircon/cleaning',
    },
    {
        title: 'Wall-Mounted Service',
        desc: 'Efficient cooling and reliable maintenance for wall-mounted AC units. Ideal for residential and small office spaces that require quiet and steady performance.',
        icon: icon5,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-6.jpg',
        path: '/aircon/wall-mounted',
    },
    {
        title: 'Cassette Service',
        desc: 'Professional cassette AC services for top-notch performance. Designed for open spaces like offices or shops, ensuring even air distribution and maximum comfort.',
        icon: icon5,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-3.jpg',
        path: '/aircon/cassette-service',
    },
    {
        title: 'Duct Cleaning',
        desc: 'Thorough duct cleaning to enhance indoor air quality. Eliminate dust, allergens, and mold from your ventilation system for a healthier living environment.',
        icon: icon4,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-4.jpg',
        path: '/aircon/duct-cleaning',
    },
    {
        title: 'Water Leaking Service',
        desc: 'Quick and effective solutions for AC water leakage problems. Prevent further damage and ensure optimal unit performance.',
        icon: icon3,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-5.jpg',
        path: '/aircon/water-leaking-service',
    },
    {
        title: 'Aircon Installation',
        desc: 'Professional AC installation services for homes and offices. Ensuring correct setup for long-term efficiency and performance.',
        icon: icon1,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-1.jpg',
        path: '/aircon/air-installation',
    },
];

const Service_Flow = [
    {
        id: 1,
        title: 'Book Your Appointment',
        dec: 'Choose a date and time that works best for you using our online form or a quick call.',
    },
    {
        id: 2,
        title: 'On- Site Inspection',
        dec: 'Technician assesses the issue or service needs, and provides transparent recommendations.',
    },
    {
        id: 3,
        title: 'Expert Service',
        dec: 'We handle repairs, installations, or maintenance using trusted tools and genuine parts.',
    },
    {
        id: 4,
        title: 'Follow-Up Support',
        dec: 'We ensure everything’s running perfectly and provide support if you need us after the service.',
    },
];

export default function AirconserviceResidential() {
    const { show, setShow } = useContext(AuthContext);
    const nav = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Banner */}
            <div className="w-full h-[40vh] bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 w-full h-full bg-[#152042c5] flex flex-col justify-center items-center space-y-4 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Aircon Service</h1>
                    <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl">
                        Home <FaRightLong className="text-sm sm:text-base" /> Aircon
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Aircon Services
                    </h2>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col justify-between border border-gray-200 shadow-md rounded-xl bg-white hover:shadow-2xl transition duration-300"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#000000ab] bg-opacity-20 scale-0 rounded-[100px] group-hover:scale-100 group-hover:rounded-none  origin-top-left transition-all duration-500 ease-in-out rounded-t-xl" />
                                </div>

                                {/* Content Section */}
                                <div className="relative p-6 pt-16 flex flex-col justify-between grow">
                                    {/* Floating Icon */}
                                    <div className="absolute -top-10 left-6 w-20 h-20 bg-white border border-[#00C4CC] shadow-md rounded-full flex justify-center items-center z-10">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-10 h-10 object-contain filter invert-[40%] brightness-[0.7] contrast-[1.2]"
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-800 mt-3">{item.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Button */}
                                    <div className="mt-6">
                                        <button
                                            onClick={() => nav(item.path)}
                                            className="bg-[#1574C0] text-white font-medium italic px-5 py-2.5 rounded-full flex items-center hover:bg-[#105b96] transition duration-300"
                                        >
                                            Explore <FaRightLong className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='w-full h-auto px-5 md:px-10 xl:px-20 py-10 bg-gray-50 flex flex-col lg:flex-row gap-10 items-center justify-center overflow-hidden'>
                {/* Residential Card */}
                <motion.div
                    className='w-full lg:w-1/2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className='w-full shadow-md bg-white border-8 border-white rounded-md'>
                        <div className='w-full group'>
                            <div className='w-full relative overflow-hidden'>
                                <img
                                    src="https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets-work_23-2149366667.jpg"
                                    alt="Residential Service"
                                    className='w-full object-cover'
                                />
                                <div className='absolute inset-0 flex'>
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className='w-1/4 h-full scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 bg-black/80'
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='p-6'>
                                <h1 className='text-2xl font-bold italic tracking-wide'>Aircon Residential Services</h1>
                                <p className='text-lg font-normal italic tracking-wider mt-6'>
                                    At CoolSpace Pro Solutions, we understand how essential it is to maintain a comfortable and healthy environment at home—especially in India’s hot and humid climate. Our Residential Air Conditioning Services are designed to offer seamless, efficient, and long-lasting cooling for your living spaces.
                                </p>
                                <NavLink to={'/aircon/residental-service'} className='w-full py-3.5 flex justify-center items-center mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold italic text-xl px-3 rounded-2xl'>
                                    Learn More <FaArrowRightLong className='ml-2.5' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Commercial Card */}
                <motion.div
                    className='w-full lg:w-1/2'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className='w-full shadow-md bg-white border-8 border-white rounded-md'>
                        <div className='w-full group'>
                            <div className='w-full relative overflow-hidden'>
                                <img
                                    src="https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg"
                                    alt="Commercial Service"
                                    className='w-full object-cover'
                                />
                                <div className='absolute inset-0 flex'>
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className='w-1/4 h-full scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 bg-black/80'
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='p-6'>
                                <h1 className='text-2xl font-bold italic tracking-wide'>Aircon Commercial Services</h1>
                                <p className='text-lg font-normal italic tracking-wider mt-6'>
                                    At CoolSpace Pro Solutions, we help businesses stay cool and productive with reliable air conditioning. Our commercial AC services are tailored for offices, showrooms, hotels, and more. We deliver efficient, scalable, and long-lasting cooling solutions for every business need.
                                </p>
                                <NavLink to={'/aircon/commercial-service'} className='w-full py-3.5 flex justify-center items-center mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold italic text-xl px-3 rounded-2xl'>
                                    Learn More <FaArrowRightLong className='ml-2.5' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* Mid Banner */}
            <div className="relative w-full h-auto">
                <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${baner})` }} />
                <div className="w-full h-auto bg-[#00000160] z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-16 text-white text-center space-y-4">
                    <div className="flex justify-center items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-widest italic">
                        <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
                        <h2 className="uppercase">We Offer the Best Solutions</h2>
                        <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">For Both Residential & Commercial</h1>
                    <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">24/7 Customer Support</p>
                    <button onClick={() => setShow(true)} className='mx-auto cursor-pointer font-medium text-white bg-blue-600 text-lg tracking-wider border border-blue-600 px-3 py-2 rounded-md hover:bg-transparent hover:border-white transition-colors ease-in-out cusp shadow '>Book a Consultation </button>
                </div>
            </div>

            {/* Service Flow Section */}
            <section className='w-full h-auto bg-[#f8f8f8] flex flex-col-reverse lg:flex-row-reverse py-12 md:py-16'>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 h-full px-4 sm:px-6 md:px-10'>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-700 mb-6 md:mb-9 text-center lg:text-left leading-snug'>
                        Our Smooth & Simple Service Flow
                    </h1>
                    <div className='w-full h-auto'>
                        {Service_Flow.map((item, i) => (
                            <div
                                key={i}
                                className='flex flex-col sm:flex-row justify-between border-b border-b-gray-300 py-4 md:py-5 pb-6 md:pb-8 gap-y-4 sm:gap-y-0 sm:gap-x-6 md:gap-x-10'
                            >
                                <div className='px-1.5 text-3xl font-bold text-[#00C4CC] min-w-[40px]'>
                                    0{item.id}
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700'>
                                        {item.title}
                                    </h2>
                                    <p className='text-sm sm:text-base md:text-[17px] text-gray-500 font-medium' style={{ wordSpacing: '2px' }}>
                                        {item.dec}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image & Overlay Content */}
                <div className='w-full lg:w-1/2 h-auto px-4 sm:px-6 md:px-10 py-10 lg:py-16 overflow-hidden'>
                    <div className='relative w-full max-w-full md:max-w-[500px] xl:max-w-[570px] mx-auto min-h-[400px] md:min-h-[500px]'>
                        <img
                            src={Fow_baner}
                            alt=""
                            className='w-full h-full object-cover rounded-lg'
                        />
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-lg"></div>

                        {/* Plumber Side Image */}
                        <div className='absolute -bottom-20 sm:-bottom-32 md:-bottom-36 -right-4 sm:-right-8 md:-right-14 w-36 sm:w-48 md:w-60 border-4 md:border-8 border-[#f8f8f8] rounded-md overflow-hidden shadow-lg'>
                            <img
                                src="https://templatekit.tokomoo.com/plumbingkit/wp-content/uploads/sites/60/2021/12/young-male-plumber-holding-pipe-wrench-on-a-constr-2021-10-14-23-13-34-utc-1.jpg"
                                alt=""
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-[#00000171]'></div>
                        </div>

                        {/* Experience Box */}
                        <div className='absolute bottom-4 left-4 sm:left-8 bg-[#00C4CC] rounded-lg w-40 sm:w-56 md:w-60 h-20 sm:h-32 md:h-36 flex flex-col justify-center items-center osilate shadow-md'>
                            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white'>
                                24+
                            </h1>
                            <h3 className='text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide text-center'>
                                Years Experience
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div className='bg-[#f8f8f8] w-full min-h-screen flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-1/2 h-64 md:h-[400px] lg:h-full'>
                    <img src="https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/contact-img-2.jpg" alt="" className='w-full h-full object-cover' />
                </div>

                <div className='w-full lg:w-1/2 h-full px-6 sm:px-8 md:px-10 py-12'>
                    <div className='flex space-x-2 justify-start items-center text-base md:text-lg font-semibold tracking-wider text-[#00C4CC] italic mb-4'>
                        <h1 className='uppercase'>Get in Touch</h1>
                        <hr className='w-8 border border-[#00C4CC]' />
                    </div>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight'>
                        Have any question or free consultacy?
                    </h1>

                    <form className='w-full mt-8 space-y-4'>
                        <input type="text" placeholder='Enter Your Name' className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base' />
                        <input type="text" placeholder='Enter Your Email' className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base' />
                        <textarea placeholder='Enter Your Message' className='px-5 py-4 h-32 md:h-40 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-3xl text-base resize-none'></textarea>
                        <div className='w-full'>
                            <button className='px-8 py-4 md:px-10 md:py-5 font-medium cursor-pointer hover:bg-[#00C4CC] hover:font-semibold hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base'>
                                Get Estimated
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
