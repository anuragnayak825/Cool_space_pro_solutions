// ContactFormPopup.jsx
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from './Auth/Authprovider';

export default function ContactFormPopup() {
  const { show, setShow } = useContext(AuthContext);

  const popupVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Wrapper that closes modal on outside click */}
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setShow(false)}
          >
            {/* Modal with stopPropagation */}
            <motion.div
              className="w-[90%] max-w-lg bg-white  rounded-2xl p-6 shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#00C4CC]">Get in Touch</h2>
                <button
                  onClick={() => setShow(false)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{ boxShadow: 'inset 3px 3px 6px #ccc, inset -3px -3px 6px #fff' }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />
                <div className="relative w-full">
                  <img
                    src="https://flagcdn.com/w20/my.png" // Malaysia flag image
                    alt="MY"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4"
                  />
                  <input
                    type="tel"
                    placeholder="012-345 6789"
                    style={{ boxShadow: 'inset 3px 3px 6px #ccc, inset -3px -3px 6px #fff' }}
                    className="pl-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  style={{ boxShadow: 'inset 3px 3px 6px #ccc, inset -3px -3px 6px #fff' }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  style={{ boxShadow: 'inset 3px 3px 6px #ccc, inset -3px -3px 6px #fff' }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />
                <textarea
                  placeholder="Message"
                  style={{ boxShadow: 'inset 3px 3px 6px #ccc, inset -3px -3px 6px #fff' }}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />
                <button
                  type="submit"

                  className="w-full bg-[#00C4CC] hover:bg-[#009da3] text-white py-3 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
