import React from 'react'
import Layout from '../Layout/Layout';
import HeroSection from '../HeroSection';
import OurServices from '../OurServices';
import AboutSection from '../AboutSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceToggleSection from '../ServiceToggleSection';

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <AboutSection/>
            <ServiceToggleSection/>
            {/* <OurServices/> */}
        </Layout>
    );
}
