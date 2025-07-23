import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';
import { FiPhone, FiMenu } from 'react-icons/fi';
import Logo from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Aircon", path: "/aircon-service" },
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
      className="sticky top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-14 object-contain" />

        {/* Desktop Nav */}
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

        {/* Contact + Social (Desktop) */}
        <div className="hidden md:flex items-center gap-6 border-l pl-6 border-gray-300">
          <a
            href="tel:+60123456789"
            className="flex items-center space-x-2 bg-[#1574C0] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#00C4CC] transition transform hover:scale-105"
          >
            <FiPhone className="text-base" />
            <span className="md:block hidden">+60 12-345 6789</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#1574C0] hover:text-[#00C4CC] transition transform hover:scale-110 text-lg">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#1574C0] hover:text-[#00C4CC] transition transform hover:scale-110 text-lg">
            <FaInstagram />
          </a>
        </div>

        {/* Toggle Button (Mobile) */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-[#1574C0] focus:outline-none"
        >
          <FiMenu />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#00000194] bg-opacity-40 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.6 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white z-40 shadow-lg flex flex-col px-6 py-6 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <img src={Logo} alt="Logo" className="h-12" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-[#1574C0] hover:text-[#00C4CC] transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col gap-6 mt-4 text-left">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-sm font-medium uppercase italic tracking-wide ${isActive ? 'text-[#00C4CC]' : 'text-[#1574C0]'
                        } hover:text-[#00C4CC] transition`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Contact & Social */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-4 text-left"
              >
                <a
                  href="tel:+60123456789"
                  className="w-full block bg-[#1574C0] text-white py-2 rounded-full text-sm font-medium text-center hover:bg-[#00C4CC] transition"
                >
                  <FiPhone className="inline mr-2" />
                  +60 12-345 6789
                </a>
                <div className="flex gap-6 text-[#1574C0] text-xl justify-center">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#00C4CC] transition transform hover:scale-110">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#00C4CC] transition transform hover:scale-110">
                    <FaInstagram />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
