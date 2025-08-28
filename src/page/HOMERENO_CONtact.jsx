import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HOMERENO_Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // typing karte hi error reset
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);

      const res = await axios.post("/quotation.php", data);

      if (res.data.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoading(false);
        navigate("/thank-you"); // ✅ Redirect
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 🔴 Error msg */}
      {error && <p className="text-red-500 font-medium">{error}</p>}
      {/* 🟢 Success msg */}
      {success && <p className="text-green-600 font-medium">{success}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name*"
          className={`w-full p-3 border ${
            error && !formData.firstName ? "border-red-500" : "border-gray-300"
          } shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700`}
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name*"
          className={`w-full p-3 border ${
            error && !formData.lastName ? "border-red-500" : "border-gray-300"
          } shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700`}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address*"
          className={`w-full p-3 border ${
            error && !formData.email ? "border-red-500" : "border-gray-300"
          } shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700`}
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number*"
          className={`w-full p-3 border ${
            error && !formData.phone ? "border-red-500" : "border-gray-300"
          } shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700`}
          required
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message..."
        rows="5"
        className={`w-full p-3 border ${
          error && !formData.message ? "border-red-500" : "border-gray-300"
        } shadow-inner rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700`}
        required
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition-all disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Us"}
      </button>
    </form>
  );
}
