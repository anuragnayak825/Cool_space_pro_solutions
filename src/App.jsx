import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import CursorBubble from './CursorBubble'; // adjust path if needed
import Gallery from './Gallery';
import StickyCallWhatsappButton from './StickyCallWhatsappButton';
import ContactFormPopup from './ContactFormPopup';
// import HomeRenovation from './HomeRenovation';

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const ContactUs = lazy(() => import("./page/ContactUs"));
const AirconserviceResidential = lazy(() => import('./AirconserviceResidential'));
const AirconServiceCommercial = lazy(() => import('./AirconServiceCommercial'));
const InteriorResidential = lazy(() => import('./InteriorResidential'));
const InteriorCommercial = lazy(() => import('./InteriorCommercial'));
const HomeRenovation = lazy(() => import('./HomeRenovation'));

function App() {
  
  return (
    <BrowserRouter>
      {/* ✅ Cursor Bubble Global */}
      <CursorBubble />
      <StickyCallWhatsappButton />
      {/* <div className="min-h-screen flex items-center justify-center fixed z-40 bg-gray-100"> */}
      <ContactFormPopup />
      {/* </div> */}

      {/* All Lazy Routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/about' element={<About />} />
          <Route path='aircon-service' element={<AirconserviceResidential />} />
          {/* <Route path='/aircon-service/commercial' element={<AirconServiceCommercial />} /> */}
          <Route path='/interior' element={<InteriorResidential />} />
          {/* <Route path='/interior/commercial' element={<InteriorCommercial />} /> */}
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/home-renovation' element={<HomeRenovation />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
