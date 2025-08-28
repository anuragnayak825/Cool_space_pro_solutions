import { lazy, Suspense, useState ,useEffect } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import CursorBubble from './CursorBubble'; // adjust path if needed
import Gallery from './Gallery';
import StickyCallWhatsappButton from './StickyCallWhatsappButton';
import ContactFormPopup from './ContactFormPopup';
import Residential from './Residential';
import Commercial from './Commercial';
import Kitchen_Remodeling from './Homerenovation/Kitchen_Remodeling';
import Bathroom_Renovations from './Homerenovation/Bathroom_Renovations';
import Exterior_Renovations from './Homerenovation/Exterior_Renovations';
import Basement_Finishing from './Homerenovation/Basement_Finishing';
import Whole_Home_Renovations from './Homerenovation/Whole_ome_Renovations';
import Interior_Remodeling from './Homerenovation/Interior_Remodeling';
import PrivacyPolicy from './PrivacyPolicy';
import AOS from "aos";
import "aos/dist/aos.css";
import ThankYoupage from './page/ThankYoupage';


const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const ContactUs = lazy(() => import("./page/ContactUs"));
// const Service_Cleaning = lazy(() => import('./components/Service_Cleaning'));
const AirconService = lazy(() => import('./AirconService'));
const AirconRepair = lazy(() => import('./page/AirconRepair'));
const AirconMaintenance = lazy(() => import('./page/AirconMaintenance'));
const Aircon_Installation = lazy(() => import('./components/Aircon_Installation'));
const Cassette_Service = lazy(() => import('./components/Cassette_Service'));
// const Wall_Mounted_Service = lazy(() => import('./components/Wall_Mounted_Service'));
const Duct_Cleaning = lazy(() => import('./components/Duct_Cleaning'));
const Water_Leaking_Service = lazy(() => import('./components/Water_Leaking_Service'));
const AirconserviceResidential = lazy(() => import('./AirconserviceResidential'));
// const AirconServiceCommercial = lazy(() => import('./AirconServiceCommercial'));
const InteriorResidential = lazy(() => import('./InteriorResidential'));
// const InteriorCommercial = lazy(() => import('./InteriorCommercial'));
const HomeRenovation = lazy(() => import('./HomeRenovation'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      offset: 100,    // kitna scroll hone ke baad trigger hoga
      once: true,     // sirf ek baar chale
    });
  }, []);

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
          <Route path='/cassette-service' element={<Cassette_Service />} />
          <Route path='/duct-cleaning' element={<Duct_Cleaning />} />
          <Route path='/air-installation' element={<Aircon_Installation />} />
          <Route path='/water-leaking-service' element={<Water_Leaking_Service />} />
          <Route path='/residental-service' element={<Residential />} />
          <Route path='/commercial-service' element={<Commercial />} />
          <Route path='/service' element={<AirconService />} />
          <Route path='/repair' element={<AirconRepair />} />
          <Route path='/maintenace' element={<AirconMaintenance />} />

          <Route path='/interior' element={<InteriorResidential />} />
          {/* HOme Renobvation  */}
          <Route path='/home-renovation' element={<HomeRenovation />} />
          <Route path='/kitchen-remodeling' element={<Kitchen_Remodeling />} />
          <Route path='/bathroom-renovations' element={<Bathroom_Renovations />} />
          <Route path='/exterior-renovations' element={<Exterior_Renovations />} />
          <Route path='/basement-finishing' element={<Basement_Finishing />} />
          <Route path='/wholehome-renovations' element={<Whole_Home_Renovations />} />
          <Route path='/interior-remodeling' element={<Interior_Remodeling />} />


          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/thank-you' element={<ThankYoupage />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
