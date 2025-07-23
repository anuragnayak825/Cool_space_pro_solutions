import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './Loader'

const Home = lazy(() => import("./page/Home"))
const About = lazy(() => import("./page/About"))
const ContactUs = lazy(() => import("./page/contact-us"))
const AirconService = lazy(() => import('./AirconService'))
  

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/aircon-service' element={<AirconService />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
