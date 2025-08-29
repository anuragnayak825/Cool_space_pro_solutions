// ContactFormPopup.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "./Auth/Authprovider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContactFormPopup() {
  const { show, setShow } = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // states
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // phone formatting
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const match = digits.match(/^(\d{3})(\d{3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}-${match[2]} ${match[3]}`.trim();
    } else if (digits.length <= 6) {
      return digits.replace(/^(\d{3})(\d{0,3})$/, "$1-$2").trim();
    }
    return digits;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setFormData({ ...formData, phone: formatted });
    setError("");
  };

  const handleClearInput = () => {
    setFormData({ ...formData, phone: "" });
  };

  // input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.message.trim()
    ) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("message", formData.message);

      const res = await axios.post("/quotation.php", data);

      if (res.data.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        setLoading(false);
        setShow(false); // modal close
        navigate("/thank-you"); // redirect page
      } else {
        setError("❌ Error sending request. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("❌ Something went wrong. Try again!");
      setLoading(false);
    }
  };

  // outside click close (dropdown)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    exit: { opacity: 0, y: -100, scale: 0.9, transition: { duration: 0.3 } },
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

          {/* Wrapper */}
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setShow(false)}
          >
            {/* Modal */}
            <motion.div
              className="w-[90%] max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#00C4CC]">
                  Get in Touch
                </h2>
                <button
                  onClick={() => setShow(false)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Error / Success */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />

                {/* Phone with flag */}
                <div
                  className="relative w-full flex shadow-sm rounded-md"
                  ref={dropdownRef}
                >
                  <div className="w-16 h-12 border border-gray-300 border-r-0 rounded-s-md flex justify-center items-center bg-gray-100">
                    <img
                      src="https://flagcdn.com/w40/my.png"
                      alt="Malaysia Flag"
                      className="w-6 h-4"
                    />
                    <IoMdArrowDropdown
                      onClick={() => setIsShow(!isShow)}
                      className={`cursor-pointer transition-transform ${
                        isShow ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onClick={handleClearInput}
                    placeholder="012-345 6789"
                    className="h-12 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00C4CC] rounded-e-md px-4"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00C4CC] hover:bg-[#009da3] text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
