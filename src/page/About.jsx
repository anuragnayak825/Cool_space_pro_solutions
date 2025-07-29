import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { FaRightLong } from 'react-icons/fa6'
import AboutSection from '../AboutSection'
import Aboutsection2 from '../Aboutsection2'
import WhyChooes from '../WhyChooes'
import ContactFrom2 from '../ContactFrom2'
import ServicenameAndDesign from '../ServicenameAndDesign'
import ClientReviewSlider from '../ClientReviewSlider'
import StatsSection from '../StatsSection'
import MissionVisionSection from '../MissionVisionSection'
import GradientCTABanner from '../CTADiscountSection'
import ServiceHighlightsSection from '../ServiceHighlightsSection'

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover relative bg-[url('https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/page-banner.jpg')]">
                {/* Overlay with content */}
                <div className="absolute inset-0 w-full h-full bg-[#152042e6] flex flex-col justify-center items-center space-y-4 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        About
                    </h1>

                    <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl">
                        Home <FaRightLong className="text-sm sm:text-base" /> About
                    </div>
                </div>
            </div>
            {/* <StatsSection /> */}
            <Aboutsection2 />
            <MissionVisionSection/>
            <ServiceHighlightsSection/>
            {/* <ServicenameAndDesign /> */}
            <GradientCTABanner/>
        </Layout>
    )
}
