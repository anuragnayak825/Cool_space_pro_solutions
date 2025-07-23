import React from 'react'
import Layout from './Layout/Layout'
import { FaRightLong } from 'react-icons/fa6'
import baner from './assets/service_baner.webp'
import Fow_baner from './assets/Fow_img.webp'
import img from './assets/air.png'
import img2 from './assets/ac.png'
import img3 from './assets/repair.png'
import icon1 from './assets/technical-support.png'
import icon2 from './assets/deal.png'
import icon3 from './assets/engineer.png'
import icon4 from './assets/vacuum-cleaner.png'
import icon5 from './assets/air-conditioner.png'
import icon6 from './assets/air-conditioning.png'

const services = [
    {
        title: 'Commercial Service',
        desc: 'Eleifend lacinia prasent hendrerit quisque penatibus erat. At pulvinar integer',
        icon: icon1,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-1.jpg'
    },
    {
        title: 'Residential Service',
        desc: 'Suscipit Duis arcu iaculis classes nullam socis nibh rutrum aliquam vulputa.',
        icon: icon2,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-2.jpg'
    },
    {
        title: 'Industrial Service',
        desc: 'At pulvinar integer semper ridiculus lectus condimentum obor tise verodar.',
        icon: icon3,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-3.jpg'
    },
    {
        title: 'Dust Cleaning',
        desc: 'Exercitation ullamco laboris nisi ut aliquip exe ea commodo coniseqs duis aute irure',
        icon: icon4,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-5.jpg'
    },
    {
        title: 'Quality Testing',
        desc: 'Suscipit Duis arcu iaculis classes nullam socis nibh rutrum aliquam vulputa',
        icon: icon5,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-6.jpg'
    },
    {
        title: 'Heating Service',
        desc: 'Amets consectetur adipisicing elit sed do eiusmod tempor incididunt at labore',
        icon: icon6,
        img: 'https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/service-img-7.jpg'
    },
];

const Service_Flow = [
    {
        id: 1,
        title: 'Book Your Appointment',
        dec: 'Choose a date and time that works best for you using our online form or a quick call.'
    },
    {
        id: 2,
        title: 'On- Site Inspection',
        dec: 'Technician assesses the issue or service needs, and provides transparent recommendations.'
    },
    {
        id: 3,
        title: 'Expert Service',
        dec: 'We handle repairs, installations, or maintenance using trusted tools and genuine parts.'
    },
    {
        id: 4,
        title: 'Follow-Up Support',
        dec: 'We ensure everything’s running perfectly and provide support if you need us after the service.'
    },
]

export default function AirconService() {
    return (
        <Layout>
            {/* Banner */}
            <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover relative bg-[url('https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/page-banner.jpg')]">
                {/* Overlay with content */}
                <div className="absolute inset-0 w-full h-full bg-[#152042e6] flex flex-col justify-center items-center space-y-4 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        Aircon Service
                    </h1>

                    <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl">
                        Home <FaRightLong className="text-sm sm:text-base" /> Aircon
                    </div>

                    {/* Decorative floating icons */}
                    <img
                        src={img2}
                        alt=""
                        className="w-12 sm:w-16 md:w-20 h-auto absolute top-1/2 right-4 sm:right-10 md:right-20 opacity-40 animate-zoomInOut"
                    />
                    <img
                        src={img3}
                        alt=""
                        className="w-12 sm:w-16 md:w-20 h-auto absolute top-1/2 left-6 sm:left-16 md:left-40 opacity-40 invert animate-zoomInOut"
                    />
                    <img
                        src={img}
                        alt=""
                        className="w-12 sm:w-16 md:w-20 h-auto absolute top-10 left-1/2 transform -translate-x-1/2 opacity-40 invert animate-zoomInOut"
                    />
                </div>
            </div>


            {/* Services Section */}
            <div className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-[#f8f8f8]">
                {/* Section Header */}
                <div className="flex justify-center items-center space-x-3 text-[#00C4CC] text-sm uppercase italic mb-3">
                    <hr className="border border-[#00C4CC] w-8" />
                    <h1 className="font-semibold tracking-widest">Our Services</h1>
                    <hr className="border border-[#00C4CC] w-8" />
                </div>

                <h2 className="text-center font-bold tracking-wide text-2xl sm:text-3xl lg:text-[40px] leading-tight">
                    Quality Service is Our Guarantee
                </h2>
                <p className="max-w-3xl mx-auto text-center mt-2 text-base sm:text-lg text-gray-600 tracking-wide">
                    We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.
                </p>

                {/* Services Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services?.map((item, i) => (
                        <div
                            key={i}
                            className="relative group border border-gray-200  shadow-md transition duration-300 hover:shadow-xl"
                        >
                            {/* Image with Hover Overlay */}
                            <div className="relative w-full h-60 sm:h-64 lg:h-72 overflow-hidden">
                                <img
                                    src={item?.img}
                                    alt=""
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-[#00000098] bg-opacity-50 scale-0 group-hover:scale-100 transition-all duration-700 ease-in-out origin-top-left rounded-[200px] group-hover:rounded-none" />
                            </div>

                            {/* Card Body */}
                            <div className="relative bg-white px-6 pt-12 pb-16">
                                {/* Icon Floating */}
                                <div className="absolute -top-10 left-6 w-20 h-20 bg-white shadow-md border-b-2 border-[#00C4CC] flex justify-center items-center rounded-full">
                                    <img
                                        src={item?.icon}
                                        alt=""
                                        className="w-10 h-10 object-contain filter invert-[40%] brightness-[0.7] contrast-[1.2]"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-semibold text-gray-800">{item?.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 tracking-wide leading-relaxed">
                                    {item?.desc}
                                </p>

                                {/* CTA Button */}
                                <div className="absolute -bottom-5 left-6">
                                    <button className="bg-[#1574C0] text-white font-medium italic px-5 py-2.5 rounded-2xl flex items-center hover:bg-[#105b96] transition duration-300">
                                        Read More <FaRightLong className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="relative w-full h-auto">
                {/* Background Layer */}
                <div
                    className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${baner})` }}
                />

                {/* Foreground Content */}
                <div className="w-full h-auto bg-[#00000160] z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-16 text-white text-center space-y-4">
                    {/* Top Divider and Subheading */}
                    <div className="flex justify-center items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-widest italic">
                        <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
                        <h2 className="uppercase">We Offer the Best Solutions</h2>
                        <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                        For Both Residential & Commercial
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">
                        24/7 Customer Support
                    </p>
                </div>
            </div>


            {/* <div className='bg-[#f8f8f8] w-full h-auto py-20 px-16'>
                <div className='flex space-x-2 justify-center items-center text-lg font-semibold tracking-wider text-[#00C4CC] italic'>
                    <hr className='w-8 border border-[#00C4CC]' />
                    <h1 className=' uppercase'>Pricing plans</h1>
                    <hr className='w-8 border border-[#00C4CC]' />
                </div>
                <h1 className='text-center font-semibold text-[42px]'>Cheaf And Global Standard Price Packages</h1>
            </div> */}



            <section className='w-full h-auto bg-[#f8f8f8] flex flex-col-reverse lg:flex-row-reverse py-16'>
                {/* Left Text Section */}
                <div className='w-full lg:w-1/2 h-full px-4 md:px-8'>
                    <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 md:mb-9 text-center lg:text-left'>
                        Our Smooth & Simple Service Flow
                    </h1>
                    <div className='w-full h-auto'>
                        {
                            Service_Flow?.map((item, i) => (
                                <div
                                    className='flex flex-col sm:flex-row justify-between border-b border-b-gray-400 py-5 pb-8 space-y-4 sm:space-y-0 sm:space-x-10'
                                    key={i}
                                >
                                    <div className='px-1.5 text-3xl font-bold text-[#00C4CC]'>0{item?.id}</div>
                                    <div>
                                        <h1 className='text-xl md:text-2xl font-semibold fontstyle text-gray-700'>{item?.title}</h1>
                                        <p className='text-base md:text-[17px] font-medium text-gray-500' style={{ wordSpacing: '2px' }}>{item?.dec}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Right Image Section */}
                <div className='w-full lg:w-1/2 h-auto px-4 md:px-10 py-10 lg:py-16 overflow-hidden'>
                    <div className='relative w-full max-w-full lg:max-w-[570px] mx-auto'>
                        <img
                            src={Fow_baner}
                            alt=""
                            className='w-full rounded-lg'
                        />
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                        {/* Secondary Image (Plumber) */}
                        <div className='absolute -bottom-24 sm:-bottom-36 md:-bottom-40 -right-4 sm:-right-8 md:-right-16 w-40 sm:w-52 md:w-64 border-4 md:border-8 border-[#f8f8f8]'>
                            <img
                                src="https://templatekit.tokomoo.com/plumbingkit/wp-content/uploads/sites/60/2021/12/young-male-plumber-holding-pipe-wrench-on-a-constr-2021-10-14-23-13-34-utc-1.jpg"
                                alt=""
                                className='w-full object-cover rounded-md'
                            />
                            <div className='absolute inset-0 w-full h-full bg-[#00000171] rounded-md'></div>
                        </div>

                        {/* Experience Card */}
                        <div className='absolute bottom-4 left-4 sm:left-8 bg-[#00C4CC] rounded-lg w-44 sm:w-60 h-24 sm:h-40 flex flex-col justify-center items-center osilate'>
                            <h1 className='text-4xl sm:text-6xl font-bold text-white'>24+</h1>
                            <h3 className='text-sm sm:text-lg font-semibold text-white tracking-wider text-center'>Years Experience</h3>
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-[#f8f8f8] w-full min-h-screen flex flex-col lg:flex-row items-center'>
                {/* Left Image */}
                <div className='w-full lg:w-1/2 h-64 md:h-[400px] lg:h-full'>
                    <img
                        src="https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/contact-img-2.jpg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Right Form */}
                <div className='w-full lg:w-1/2 h-full px-6 sm:px-8 md:px-10 py-12'>
                    <div className='flex space-x-2 justify-start items-center text-base md:text-lg font-semibold tracking-wider text-[#00C4CC] italic mb-4'>
                        <h1 className='uppercase'>Get in Touch</h1>
                        <hr className='w-8 border border-[#00C4CC]' />
                    </div>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight'>
                        Have any question or free consultacy?
                    </h1>

                    <form className='w-full mt-8 space-y-4'>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base'
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Email'
                            className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base'
                        />
                        <textarea
                            placeholder='Enter Your Message'
                            className='px-5 py-4 h-32 md:h-40 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-3xl text-base resize-none'
                        ></textarea>

                        <div className='w-full'>
                            <button className='px-8 py-4 md:px-10 md:py-5 font-medium cursor-pointer hover:bg-[#00C4CC] hover:font-semibold hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base'>
                                Get Estimated
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </Layout>
    )
}
