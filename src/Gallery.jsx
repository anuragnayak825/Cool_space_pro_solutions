import React, { useEffect, useState } from 'react'
import ServicenameAndDesign from './ServicenameAndDesign'
import { FaRightLong } from 'react-icons/fa6'
import Layout from './Layout/Layout'
import GradientCTABanner from './CTADiscountSection'
import ServicenameInteriordesign from './ServicenameInteriordesign'
import Servicenamehomerenovation from './Servicenamehomerenovation'

const categories = ['Aircon Service', 'Interior Design', 'Home Renovation']



export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [activeCategory, setActiveCategory] = useState('Aircon Service')

    return (
        <Layout>
            {/* Banner */}
            <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover relative bg-[url('https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/page-banner.jpg')]">
                <div className="absolute inset-0 w-full h-full bg-[#152042e6] flex flex-col justify-center items-center space-y-4 text-center px-4">
                    <h1 className="text-4xl font-bold text-white">Gallery</h1>
                    <div className="flex items-center gap-3 text-white text-lg">
                        Home <FaRightLong /> Gallery
                    </div>
                </div>
            </div>

            {/* Toggle Buttons */}
            <section className="py-5 px-5 md:px-20">
                <div className="flex justify-start flex-wrap gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full border font-medium transition duration-300 ${activeCategory === category
                                ? 'bg-[#00C4CC] text-white'
                                : 'bg-white text-[#152042] border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Extra Decorative Section */}
            {
                activeCategory == 'Aircon Service' ? <ServicenameAndDesign />
                    : activeCategory == 'Interior Design' ? <ServicenameInteriordesign /> : <Servicenamehomerenovation />
            }

            {/* CTA */}
            <GradientCTABanner />
        </Layout>
    )
}
