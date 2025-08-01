import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import CursorBubble from './CursorBubble'; // adjust path if needed
import Gallery from './Gallery';
import StickyCallWhatsappButton from './StickyCallWhatsappButton';
import ContactFormPopup from './ContactFormPopup';
import Residential from './Residential';
import Commercial from './Commercial';
// import HomeRenovation from './HomeRenovation';

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const ContactUs = lazy(() => import("./page/ContactUs"));
const Service_Cleaning = lazy(() => import('./components/Service_Cleaning'));
const Aircon_Installation = lazy(() => import('./components/Aircon_Installation'));
const Cassette_Service = lazy(() => import('./components/Cassette_Service'));
const Wall_Mounted_Service = lazy(() => import('./components/Wall_Mounted_Service'));
const Duct_Cleaning = lazy(() => import('./components/Duct_Cleaning'));
const Water_Leaking_Service = lazy(() => import('./components/Water_Leaking_Service'));
const AirconserviceResidential = lazy(() => import('./AirconserviceResidential'));
const AirconServiceCommercial = lazy(() => import('./AirconServiceCommercial'));
const InteriorResidential = lazy(() => import('./InteriorResidential'));
const InteriorCommercial = lazy(() => import('./InteriorCommercial'));
const HomeRenovation = lazy(() => import('./HomeRenovation'));

function App() {

  return (
    <BrowserRouter>
      <CursorBubble />
      <StickyCallWhatsappButton />
      <ContactFormPopup />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='aircon-service' element={<AirconserviceResidential />} />
          {/* AIRCON SERVICE  */}
          <Route path='/aircon/repair' element={<Service_Cleaning />} />
          <Route path='/aircon/wall-mounted' element={<Wall_Mounted_Service />} />
          <Route path='/aircon/cassette-service' element={<Cassette_Service />} />
          <Route path='/aircon/duct-cleaning' element={<Duct_Cleaning />} />
          <Route path='aircon/air-installation' element={<Aircon_Installation />} />
          <Route path='/aircon/water-leaking-service' element={<Water_Leaking_Service />} />
          <Route path='/aircon/residental-service' element={<Residential />} />
          <Route path='/aircon/commercial-service' element={<Commercial />} />

          <Route path='/interior' element={<InteriorResidential />} />

          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/home-renovation' element={<HomeRenovation />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
