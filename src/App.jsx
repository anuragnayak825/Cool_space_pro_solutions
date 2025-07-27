import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import CursorBubble from './CursorBubble'; // adjust path if needed

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const ContactUs = lazy(() => import("./page/contact-us"));
const AirconserviceResidential = lazy(() => import('./AirconserviceResidential'));
const AirconServiceCommercial = lazy(() => import('./AirconServiceCommercial'));
const InteriorResidential = lazy(() => import('./InteriorResidential'));
const InteriorCommercial = lazy(() => import('./InteriorCommercial'));

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Cursor Bubble Global */}
      <CursorBubble />
      
      {/* All Lazy Routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='aircon-service' element={<AirconserviceResidential />} />
          {/* <Route path='/aircon-service/commercial' element={<AirconServiceCommercial />} /> */}
          <Route path='/interior' element={<InteriorResidential />} />
          {/* <Route path='/interior/commercial' element={<InteriorCommercial />} /> */}
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
