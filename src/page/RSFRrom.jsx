import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RSFRrom() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 🔴 Error message
  const [success, setSuccess] = useState(""); // 🟢 Success message

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // typing start hote hi error remove
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // validate inputs
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

      const res = await axios.post("quotation.php", data);

      console.log("Response:", res.data);

      if (res.data.success) {
        setSuccess("✅ Message sent successfully!");
        setLoading(false);
        setFormData({ name: "", phone: "", message: "" }); // form reset
        navigate("/thank-you"); // ✅ redirect
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
    <div className="w-full lg:w-1/2 h-full px-6 sm:px-8 md:px-10 py-12">
      <div className="flex space-x-2 justify-start items-center text-base md:text-lg font-semibold tracking-wider text-[#00C4CC] italic mb-4">
        <h1 className="uppercase">Get in Touch</h1>
        <hr className="w-8 border border-[#00C4CC]" />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight">
        Have any question or free consultacy?
      </h1>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4">
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
          className={`px-5 py-4 md:py-5 border ${
            error && !formData.name ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:tracking-wider placeholder:font-bold outline-0 w-full rounded-full text-base`}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Your Number"
          className={`px-5 py-4 md:py-5 border ${
            error && !formData.phone ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:tracking-wider placeholder:font-bold outline-0 w-full rounded-full text-base`}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          className={`px-5 py-4 h-32 md:h-40 border ${
            error && !formData.message ? "border-red-500" : "border-gray-400"
          } italic tracking-wider placeholder:tracking-wider placeholder:font-bold outline-0 w-full rounded-3xl text-base resize-none`}
        ></textarea>

        <div className="w-full">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 md:px-10 md:py-5 font-medium cursor-pointer hover:bg-[#00C4CC] hover:font-semibold hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get Estimated"}
          </button>
        </div>
      </form>
    </div>
  );
}
