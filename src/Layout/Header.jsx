import React, { useEffect, useState, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';
import { FiPhone, FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../assets/logo.png';
import { AuthContext } from '../Auth/Authprovider';

export default function Header() {
  const { setShow } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);
  const [showSticky, setShowSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const naviget = useNavigate()

  const handleServiceMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setServiceHover(true);
  };

  const handleServiceMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServiceHover(false);
    }, 200);
  };

  const toggleSubmenu = (name) => {
    setExpandedService((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    setLastScrollY(window.scrollY);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > lastScrollY);

      if (currentScrollY > lastScrollY + 0) {
        setShowSticky(false);
      } else if (currentScrollY < lastScrollY - 0) {
        setShowSticky(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const serviceItems = [
    {
      name: "Aircon Service",
      path: "/aircon-service",
      children: [
        { name: "Aircon Service", path: "/service" },
        { name: "Aircon Repair", path: "/repair" },
        { name: "Aircon Maintenance", path: "/maintenace" },
        { name: "Aircon Installation", path: "/air-installation" },
      ]
    },
    { name: "Interior Design", path: "/interior" },
    { name: "Home Renovation", path: "/home-renovation" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: showSticky ? 0 : -80,
        opacity: showSticky ? 1 : 0,
        backgroundColor: '#ffffff',
        boxShadow: isScrolled ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="sticky top-0 w-full z-50"
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-3 flex items-center justify-between">
        <img onClick={() => naviget('/')} src={Logo} alt="Logo" className="h-12 sm:h-14 md:h-18 object-contain" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-wrap gap-x-6 text-xs sm:text-base items-center font-semibold text-[#1574C0] uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#00C4CC] border-b-2 border-[#00C4CC] pb-1'
                  : 'hover:text-[#00C4CC] transition'
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className="flex group items-center gap-1 cursor-pointer hover:text-[#00C4CC] transition">
              Services <IoIosArrowDown className="mt-0.5 transition-transform group-hover:rotate-180" />
            </div>

            <AnimatePresence>
              {serviceHover && (
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 20, rotateX: 90 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-full left-0 bg-white border border-gray-300 shadow-2xl rounded mt-4 p-4 w-60 z-50 origin-top transform perspective-1000"
                >
                  {serviceItems.map((item) => (
                    <div key={item.name} className="group relative px-2 py-1">
                      <NavLink
                        to={item.path}
                        className="text-[#1574C0] border border-gray-300 rounded-md shadow-md p-2 py-3 flex justify-start items-center relative hover:text-[#00C4CC] font-medium transition"
                      >
                        {item.name}
                        <span className='w-full scale-x-0 left-0 bottom-0 absolute bg-[#00C4CC] h-[2px] group-hover:scale-100 transform transition-transform duration-300 origin-center'></span>
                        {item.children && <IoIosArrowDown className='ml-1.5 text-sm text-black -rotate-90' />}
                      </NavLink>
                      {item.children && (
                        <div className="absolute top-0 left-full space-y-1 bg-white border border-gray-300 shadow-xl rounded ml-4 py-2 px-4 w-60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.path}
                              className="block px-4 py-2 border border-gray-200 shadow-sm text-sm text-[#1574C0] hover:text-[#00C4CC] hover:translate-x-2 rounded transition"
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to={'/contact-us'}
            className={({ isActive }) =>
              isActive
                ? 'text-[#00C4CC] border-b-2 border-[#00C4CC] pb-1'
                : 'hover:text-[#00C4CC] transition'
            }
          >
            Contact
          </NavLink>

          <button
            onClick={() => setShow(true)}
            className="hidden sm:inline-block bg-[#1574C0] text-white px-4 py-2 rounded text-xs sm:text-lg font-medium hover:bg-[#00C4CC] transition transform hover:scale-105 ml-2"
          >
            Book a Appointment
          </button>
        </nav>

        {/* Contact & Social */}
        <div className='flex space-x-7'>
          <div className="hidden xl:flex items-center gap-3 border-l pl-4 border-gray-300">
            <a href="tel:+60123456789" className="flex items-center text-sm font-medium ">
              <FiPhone className="mr-2 xl:text-base " />
              <span className="hidden md:inline text-lg md:text-lg ">+60 11-2441 9414</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-3 border-l pl-4 border-gray-300">
            <p className='font-normal text-gray-500 text-sm underline cursor-pointer md:hidden xl:block'>Follow us</p>
            <a href="https://www.facebook.com/coolspaceprosolution" target="_blank" rel="noreferrer" className="text-[#1574C0] hover:text-[#00C4CC] transition text-lg">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#1574C0] hover:text-[#00C4CC] transition text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-3xl text-[#1574C0] animate-pulse"
        >
          <FiMenu />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#00000084] backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.6 }}
              className="fixed top-0 right-0 w-4/5 sm:w-1/2 h-full bg-white z-40 shadow-lg flex flex-col px-6 py-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <img onClick={() => naviget('/')} src={Logo} alt="Logo" className="h-12" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-[#1574C0] hover:text-[#00C4CC] transition"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-5 text-left text-sm">
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
                      className="text-[#1574C0] uppercase italic font-semibold hover:text-[#00C4CC] transition"
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                {serviceItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-1"
                  >
                    {item.children ? (
                      <div className="flex justify-between items-center">
                        <NavLink
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className="text-[#1574C0] uppercase italic font-semibold hover:text-[#00C4CC] transition"
                        >
                          {item.name}
                        </NavLink>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className="text-[#1574C0] hover:text-[#00C4CC] transition transform focus:outline-none"
                        >
                          <IoIosArrowDown
                            className={`transition-transform duration-300 ${expandedService === item.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-[#1574C0] uppercase italic font-semibold hover:text-[#00C4CC] transition"
                      >
                        {item.name}
                      </NavLink>
                    )}


                    <AnimatePresence>
                      {expandedService === item.name && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden flex flex-col gap-1"
                        >
                          {item.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.path}
                              onClick={() => setMenuOpen(false)}
                              className="text-sm text-[#1574C0] hover:text-[#00C4CC] transition"
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 * 0.08 }}
                >
                  <NavLink
                    to={'/contact-us'}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#1574C0] uppercase italic font-semibold hover:text-[#00C4CC] transition"
                  >
                    Contact
                  </NavLink>
                </motion.div>
              </div>

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
                  +60 11-2441 9414
                </a>
                <div className="flex gap-6 text-[#1574C0] text-xl justify-center">
                  <a href="https://www.facebook.com/coolspaceprosolution" target="_blank" rel="noreferrer" className="hover:text-[#00C4CC] transition transform hover:scale-110">
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