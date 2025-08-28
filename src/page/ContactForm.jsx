import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactForm({ contentVariants }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // typing start hote hi error reset
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("message", formData.message);

      const res = await axios.post("/quotation.php", data);

      if (res.data.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
        setLoading(false);
        navigate("/thank-you"); // redirect
      } else {
        setError("❌ Error sending message. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("❌ Something went wrong. Try again!");
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-1/2 space-y-6 z-10"
    >
      {/* Heading */}
      <div className="flex space-x-2 items-center text-base md:text-lg font-semibold text-[#00C4CC] italic">
        <h1 className="uppercase">Get in Touch</h1>
        <hr className="w-8 border border-[#00C4CC]" />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
        Have any question or free consultancy?
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 🔴 Error message */}
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {/* 🟢 Success message */}
        {success && <p className="text-green-600 font-medium">{success}</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className={`px-5 py-4 border ${
            error && !formData.name ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:font-bold outline-0 w-full rounded-full text-base`}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Your Number"
          className={`px-5 py-4 border ${
            error && !formData.phone ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:font-bold outline-0 w-full rounded-full text-base`}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          className={`px-5 py-4 h-32 md:h-40 border ${
            error && !formData.message ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:font-bold outline-0 w-full rounded-3xl text-base resize-none`}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 md:px-10 md:py-5 font-medium hover:bg-[#00C4CC] hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base disabled:opacity-50"
        >
          {loading ? "Sending..." : "Get Estimated"}
        </button>
      </form>
    </motion.div>
  );
}
