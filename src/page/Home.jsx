import React from 'react'
import Layout from '../Layout/Layout';
import HeroSection from '../HeroSection';
import OurServices from '../OurServices';
import AboutSection from '../AboutSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceToggleSection from '../ServiceToggleSection';
import OfferSection from '../OfferSection';
import ClientReviewSlider from '../ClientReviewSlider';
import WhyChooes from '../WhyChooes';
import ContactFrom2 from '../ContactFrom2';

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <ServiceToggleSection />
            <OfferSection />
            <WhyChooes />
            <ClientReviewSlider />
            <ContactFrom2/>
        </Layout>
    );
}
