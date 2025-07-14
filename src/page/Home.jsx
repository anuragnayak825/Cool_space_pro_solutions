import React from 'react'
import Layout from '../Layout/Layout';
import HeroSection from '../HeroSection';
import OurServices from '../OurServices';

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <OurServices/>
        </Layout>
    );
}
