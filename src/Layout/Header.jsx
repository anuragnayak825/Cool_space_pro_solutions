import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import Logo from '../assets/logo.png'; // your uploaded logo

import '../App.css'; // 👈 required for vibration CSS

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Aircon", path: "/aircon" },
    { name: "Interior", path: "/interior" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: "#ffffff",
        boxShadow: isScrolled ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 🔵 Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Cool Space Logo" className="h-14 object-contain" />
        </div>

        {/* 🔷 Center Nav Items */}
        <nav className="hidden md:flex space-x-8 text-sm tracking-widest font-semibold text-[#1574C0] uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00C4CC] border-b-2 border-[#00C4CC] pb-1"
                  : "hover:text-[#00C4CC] transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* 📞 Contact & Social Icons with spacing + hover animation */}
        <div className="flex items-center gap-6 border-l pl-6 border-gray-300">
          {/* 📞 Call Button */}
          <a
            href="tel:+60123456789"
            className="flex items-center space-x-2 bg-[#1574C0] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#00C4CC] transition transform hover:scale-105 vibrate"
          >
            <FiPhone className="text-base" />
            <span>+60 12-345 6789</span>
          </a>

          {/* 🌐 Social Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1574C0] hover:text-[#00C4CC] transition transform hover:scale-110 text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1574C0] hover:text-[#00C4CC] transition transform hover:scale-110 text-lg"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
