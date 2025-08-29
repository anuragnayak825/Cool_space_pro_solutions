import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HeroForm() {
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(false);
    const [phone, setPhone] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const dropdownRef = useRef(null);

    // ✅ Phone formatting function
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
        setPhone(formatted);
    };

    // ✅ Input change handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // ✅ Clear phone input when clicked
    const handleClearInput = () => {
        setPhone("");
    };

    // ✅ Submit handler with FormData + Axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !phone || !formData.service || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", phone);
            data.append("service", formData.service);
            data.append("message", formData.message);

            const res = await axios.post("quotation.php", data,);
            console.log("Response:", res.data);

            if (res.data.success) {
                setLoading(false);
                navigate("/thank-you"); // ✅ redirect to Thank You page
            } else {
                setError("Error sending message. Please try again.");
                setLoading(false);
            }

        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong. Try again!");
            setLoading(false);
        }
    };

    // ✅ Close dropdown if clicked outside
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
        <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto border border-gray-300 bg-white px-4 py-6 sm:px-6 md:px-8 rounded-2xl shadow-xl space-y-3"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h1 className="text-center text-2xl font-bold text-gray-800">
                Get a Quotation Now
            </h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 p-2 mb-3 rounded text-sm">
                    {error}
                </div>
            )}

            {/* Name & Email */}
            {[
                { id: "name", type: "text", label: "Your Name" },
                { id: "email", type: "email", label: "Email Address" },
            ].map(({ id, type, label }) => (
                <div className="relative w-full" key={id}>
                    <input
                        type={type}
                        id={id}
                        value={formData[id]}
                        onChange={handleChange}
                        required
                        placeholder={label}
                        className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 shadow-sm"
                    />
                    <label
                        htmlFor={id}
                        className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                        {label}
                    </label>
                </div>
            ))}

            {/* Phone input with dropdown */}
            <div className="w-full h-12 relative flex shadow-sm rounded-md" ref={dropdownRef}>
                <div className="w-16 h-12 border-2 border-gray-300 border-e-0 rounded-s-md flex justify-center items-center bg-gray-100 ">
                    <img
                        src="https://flagcdn.com/w40/my.png"
                        alt="Malaysia Flag"
                        className="w-6 h-4"
                    />
                    <IoMdArrowDropdown
                        onClick={() => setIsShow(!isShow)}
                        className={`cursor-pointer transition-transform ${isShow ? "rotate-180" : ""}`}
                    />
                </div>

                {isShow && (
                    <div className="w-60 absolute top-14 z-10 left-0 border border-gray-300 bg-white shadow rounded-md">
                        <div className="bg-gray-100 w-full h-12 flex justify-between items-center rounded-md">
                            <div className="flex items-center px-2 space-x-3">
                                <img
                                    src="https://flagcdn.com/w40/my.png"
                                    alt="Malaysia Flag"
                                    className="w-6 h-4"
                                />
                                <span className="text-gray-600 font-semibold">Malaysia</span>
                                <span className="text-gray-600 font-semibold">+60</span>
                            </div>
                            <div className="w-5 h-12 flex bg-white flex-col justify-between items-center rounded-e-md">
                                <IoMdArrowDropdown className="rotate-180" />
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full">
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        onClick={handleClearInput}
                        placeholder="012-345 6789"
                        className="h-12 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-e-md px-4"
                    />
                </div>
            </div>

            {/* Service dropdown */}
            <div className="relative w-full">
                <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="peer h-12 w-full border-2 text-gray-400 focus:text-gray-950 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 shadow-sm"
                >
                    <option value="">Select service</option>
                    <option value="Aircon Service">Aircon service</option>
                    <option value="Interior design">Interior design</option>
                    <option value="Home Renovation">Home Renovation</option>
                </select>
            </div>

            {/* Message */}
            <div className="relative w-full">
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Your Message"
                    className="peer shadow-sm w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 pt-3 resize-none"
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute left-4 top-1 bg-white px-1 text-gray-600 text-sm transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Your Message
                </label>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </div>
        </motion.form>
    );
}
