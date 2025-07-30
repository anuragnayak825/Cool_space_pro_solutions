import React from 'react';
import Layout from './Layout/Layout';
import {
  FaRightLong,
  FaHammer,
  FaToilet,
  FaPaintRoller,
  FaBrush,
  FaHouseChimney,
} from 'react-icons/fa6';
// import baner from './assets/service_baner.webp'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import GradientCTABanner from './CTADiscountSection';
import { NavLink } from 'react-router-dom';


const baner = 'https://img.freepik.com/free-photo/full-shot-people-carrying-placard-together_23-2149328067.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'
const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Upgrade your kitchen with modern cabinetry, smart appliances, and stylish finishes tailored to your lifestyle.",
    icon: <FaHammer className="text-2xl " />,
    image:
      "https://img.freepik.com/free-photo/workers-talking-phone-doing-paperwork_23-2147668775.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Bathroom Renovations",
    description:
      "Transform your bathroom with elegant fixtures, improved layouts, and luxurious finishes for a spa-like feel.",
    icon: <FaToilet className="text-2xl " />,
    image:
      "https://img.freepik.com/free-photo/medium-shot-senior-man-cleaning-shower_23-2149535084.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Basement Finishing",
    description:
      "Turn unused basement space into a functional area like a home theater, gym, or guest suite.",
    icon: <FaPaintRoller className="text-2xl " />,
    image:
      "https://img.freepik.com/free-photo/full-shot-woman-painting-wall_52683-100073.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Interior Remodeling",
    description:
      "Refresh your living space with new layouts, lighting, paint, and custom finishes that reflect your personal style.",
    icon: <FaBrush className="text-2xl " />,
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg?t=st=1753707474~exp=1753711074~hmac=b3e13023035c22b6b887a60e5ab6be6037e347f9cc594290a34e10b2cbb6353d&w=1380",
  },
  {
    title: "Exterior Renovations",
    description:
      "Enhance curb appeal with exterior painting, siding upgrades, roofing, and patio remodeling solutions.",
    icon: <FaHouseChimney className="text-2xl " />,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Whole Home Renovations",
    description:
      "Reimagine your entire home with a full renovation — from structural changes to luxury finishes and smart features.",
    icon: <FaHammer className="text-2xl " />,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomeRenovation() {
  return (
    <Layout>
      {/* Page Banner */}
      <div className="w-full h-[60vh] bg-no-repeat bg-center bg-cover relative bg-[url('https://img.freepik.com/free-photo/young-man-making-plans-his-new-flat_329181-19464.jpg?t=st=1753861164~exp=1753864764~hmac=602ddda2cbef059e113dd434fb20c4642760d0c00adb936af98492e410900f09&w=2000')]">
        <div className="absolute inset-0 w-full h-full bg-[#152042d7] flex flex-col justify-center items-center space-y-4 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Home Renovation
          </h1>
          <div className="flex items-center gap-3 text-white text-lg md:text-xl">
            Home <FaRightLong className="text-base" /> Home Renovation
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="px-6 md:px-12 py-20 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              {/* Image with Overlay */}
              <div className="h-72 w-full rounded relative overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* 3D Overlay Line-by-Line */}
                <div className="absolute inset-0 z-10">
                  <div className="flex flex-row h-full w-full">
                    <div className="w-1/4 h-full bg-black/80 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out delay-0" />
                    <div className="w-1/4 h-full bg-black/80 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out delay-150" />
                    <div className="w-1/4 h-full bg-black/80 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out delay-300" />
                    <div className="w-1/4 h-full bg-black/80 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out delay-500" />
                  </div>
                </div>
              </div>

              {/* Card Box */}
              <div className="mt-[-60px] w-[90%] bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[#00C4CC]/40 h-[340px] flex flex-col justify-between">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mx-auto mb-5 text-[#00C4CC] text-3xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#0c1e2c] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="flex justify-center">
                  <NavLink to={'/contact-us'} className="text-[#f7c873] font-semibold text-sm hover:underline flex items-center gap-1">
                    LEARN MORE <span className="ml-1">&#8594;</span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="relative w-full h-auto">
        <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${baner})` }} />
        <div className="w-full h-auto bg-[#00000160] z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-16 text-white text-center space-y-4">
          <div className="flex justify-center items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-widest italic">
            <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
            <h2 className="uppercase">We Offer the Best Solutions</h2>
            <hr className="w-6 sm:w-8 border border-[#00C4CC]" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">For Both Residential & Commercial</h1>
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">24/7 Customer Support</p>
          <button className='mx-auto font-medium text-white bg-blue-600 text-lg tracking-wider border border-blue-600 px-3 py-2 rounded-md hover:bg-transparent hover:border-white transition-colors ease-in-out cusp shadow '>Book a Consultation </button>
        </div>
      </div>



      <section className="bg-white text-gray-800 px-4 py-12 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
              <span className="text-xl">✨</span> Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
              Feel Free To Contact<br />
              For Any Kind Of Query.
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for choosing Cool Space Pro Solutions. We believe communication is key to delivering exceptional service.
            </p>

            <div className=" text-sm flex space-x-9 items-center ">
              <div className="flex items-center gap-4 ">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <div>
                  <p className="font-bold text-gray-900">Phone Number:</p>
                  <p className="text-gray-700">+60 12-345 8899</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="font-bold text-gray-900">Mail Address:</p>
                  <p className="text-gray-700">info@goclean.com</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <div>
                  <p className="font-bold text-gray-900">Office Address:</p>
                  <p className="text-gray-700">122 Albert St, MB, AU</p>
                </div>
              </div> */}

            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-3 border border-gray-300  shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-3 border border-gray-300  shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-3 border border-gray-300  shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 border border-gray-300  shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
            </div>
            <textarea
              placeholder="Message..."
              rows="5"
              className="w-full p-3 border border-gray-300  shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition-all"
            >
              Send Us
            </button>
          </form>
        </div>
      </section>

      <GradientCTABanner />
    </Layout>
  );
}
