import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function QuotationForm() {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dropdownRef = useRef(null);

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

  // general input change
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
      !formData.service.trim() ||
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
      data.append("service", formData.service);
      data.append("message", formData.message);

      const res = await axios.post("/quotation.php", data);

      if (res.data.success) {
        setSuccess("✅ Quotation request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setLoading(false);
        navigate("/thank-you"); // redirect
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

  // outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto border border-gray-300 bg-white px-4 py-6 sm:px-6 md:px-8 rounded-md shadow-xl shadow-gray-300 space-y-6"
    >
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Get a Quotation Now
      </h1>

      {/* Error / Success */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      {/* Name */}
      <div className="relative w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Name"
        />
        <label
          htmlFor="name"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm"
        >
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Email"
        />
        <label
          htmlFor="email"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm"
        >
          Email Address
        </label>
      </div>

      {/* Phone */}
      <div
        className="w-full h-12 relative flex shadow-sm rounded-md"
        ref={dropdownRef}
      >
        <div className="w-16 h-12 border-2 border-gray-300 border-e-0 rounded-s-md flex justify-center items-center bg-gray-100 ">
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

        <div className="w-full">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            onClick={handleClearInput}
            placeholder="012-345 6789"
            className="h-12 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-e-md px-4"
          />
        </div>
      </div>

      {/* Service */}
      <div className="relative w-full">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="peer h-12 w-full border-2 border-gray-300 text-gray-400 focus:text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
        >
          <option value="">Select service</option>
          <option value="Aircon Service">Aircon Service</option>
          <option value="Interior Design">Interior Design</option>
          <option value="Home Renovation">Home Renovation</option>
        </select>
      </div>

      {/* Message */}
      <div className="relative w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 pt-3 resize-none"
          placeholder="Your Message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-4 top-1 bg-white px-1 text-gray-600 text-sm"
        >
          Your Message
        </label>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
