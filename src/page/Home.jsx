import React, { useEffect } from 'react'
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
import FAQSection from '../FAQSection';
import CounterSection from '../Counter';
import KualaLumpurAreas from '../KualaLumpurAreas';
import CTADiscountSection from '../CTADiscountSection';
import SelangorAreas from './SelangorAreas';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout >
            <HeroSection />
            <AboutSection />
            <ServiceToggleSection />
            <OfferSection />
            <WhyChooes />
            <CounterSection />
            <FAQSection />
            {/* <ClientReviewSlider /> */}
            <SelangorAreas/>
            <KualaLumpurAreas />
            <CTADiscountSection />
            {/* <ContactFrom2/> */}
        </Layout>
    );
}
