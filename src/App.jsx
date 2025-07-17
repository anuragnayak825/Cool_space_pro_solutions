import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import ContactUs from './page/contact-us'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
