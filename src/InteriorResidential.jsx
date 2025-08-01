import React, { useEffect } from 'react'
import Layout from './Layout/Layout'
import { FaRightLong } from 'react-icons/fa6'
import { motion, useScroll, useTransform } from 'framer-motion'

const Service = [
    {
        id: 1,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-6.jpg',
        title: 'Residential Interior Design',
        des: 'Tailored design services for private homes, including room makeovers and complete home transformations.',
    },
    {
        id: 2,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-2.jpg',
        title: 'Commercial Interior Design',
        des: 'Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.',
    },
    {
        id: 3,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-1.jpg',
        title: 'Interior Design Consultation',
        des: 'Providing professional advice on concepts, color schemes, and material selection.',
    },
    {
        id: 4,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-5.jpg',
        title: 'Outdoor & Landscape Design',
        des: 'Extending design services to outdoor spaces such as gardens, patios, and decks.',
    },
    {
        id: 5,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-4.jpg',
        title: 'Renovation and Remodeling',
        des: 'Overhauling existing spaces to modernize and improve functionality and aesthetics.',
    },
    {
        id: 6,
        img: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-3.jpg',
        title: 'Interior 2D/3D Layouts',
        des: 'Realistic 3D visualizations to help you envision your space before it’s built in real life.',
    },
];

export default function InteriorResidential() {
    const { scrollYProgress } = useScroll();
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['100%', '5%']);
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['100%', '.5%']);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Banner */}
            <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover bg-fixed relative bg-[url('https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/breadcrumb-df.jpg')]">
                <div className="absolute inset-0 w-full h-full bg-[#100801a8] flex flex-col justify-center items-center space-y-4 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                        Interior Design
                    </h1>
                    <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl">
                        Home <FaRightLong className="text-sm sm:text-base" /> Interior Design
                    </div>
                </div>
            </div>

            {/* Services Intro Section */}
            <div className="w-full bg-white relative py-10 px-4 sm:px-6 lg:px-20 overflow-hidden">
                {/* Decorative Lines */}
                <div className="absolute top-10 right-0 md:left-0 w-[40%] h-[50%] lg:block z-0">
                    <motion.div
                        style={{ width: lineWidth }}
                        className="absolute top-1/4 left-0 h-[1px] bg-gray-300"
                    />
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute bottom-0 left-[60%] w-[1px] bg-gray-200"
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start mt-9 gap-8 relative z-10">
                    <div className="w-full lg:w-1/4 flex md:justify-center lg:justify-start mt-4">
                        <button className="text-sm font-semibold text-black border rounded-full border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition">
                            <span className="text-[#00C4CC] mr-2">•</span> OUR SERVICES
                        </button>
                    </div>

                    <div className="w-full lg:w-3/4">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-black">
                            Explore Our <span className="text-[#00C4CC]">Comprehensive</span><br />
                            <span className="text-[#00C4CC]">Interior Design</span> <span className="text-black">Services</span>
                        </h2>
                        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl">
                            We specialize in transforming visions into reality. Explore our portfolio of innovative architectural
                            and interior design projects crafted with precision.
                        </p>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="w-full h-auto px-4 sm:px-6 lg:px-12 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {
                        Service.map((item, i) => (
                            <div
                                key={i}
                                className="relative group bg-white rounded-3xl overflow-hidden shadow-md min-h-[450px] sm:min-h-[500px] lg:min-h-[600px]"
                            >
                                <img
                                    src={item?.img}
                                    alt={item?.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-[#00000001]" />
                                <div className="absolute bottom-0 left-0 w-full px-6 sm:px-8 py-6 sm:py-8 space-y-3.5">
                                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">{item?.title}</h1>
                                    <p className="text-white text-sm sm:text-base md:text-lg font-medium">{item?.des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative px-4 sm:px-8 md:px-12 lg:px-20 py-20">
                {/* Form Side */}
                <div className="w-full lg:w-1/2 space-y-6 z-10">
                    <div className="flex space-x-2 items-center text-base md:text-lg font-semibold text-[#00C4CC] italic">
                        <h1 className="uppercase">Get in Touch</h1>
                        <hr className="w-8 border border-[#00C4CC]" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
                        Have any question or free consultancy?
                    </h1>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="px-5 py-4 border italic tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="px-5 py-4 border italic tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base"
                        />
                        <textarea
                            placeholder="Enter Your Message"
                            className="px-5 py-4 h-32 md:h-40 border italic tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-3xl text-base resize-none"
                        ></textarea>
                        <button className="px-8 py-4 md:px-10 md:py-5 font-medium hover:bg-[#00C4CC] hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base">
                            Get Estimated
                        </button>
                    </form>
                </div>

                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/ser-img-3.png"
                        alt="oscillate"
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10"
                        style={{ animation: 'oscillateX 3s ease-in-out infinite' }}
                    />
                    <style>
                        {`
              @keyframes oscillateX {
                0% { transform: translateX(0); }
                50% { transform: translateX(-25px); }
                100% { transform: translateX(0); }
              }
            `}
                    </style>
                </div>

                {/* Background Footer Images */}
                <img
                    src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/footer-demo2.png"
                    alt=""
                    className="hidden sm:block absolute bottom-0 right-0 "
                />
                <img
                    src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/footer-demo2.png"
                    alt=""
                    className="hidden sm:block absolute bottom-0 left-0 transform -scale-x-100 "
                />
            </div>
        </Layout>
    );
}
