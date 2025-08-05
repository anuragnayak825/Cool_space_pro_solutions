import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function QuotationForm() {
  const [isShow, setIsShow] = useState(false);
  const [phone, setPhone] = useState('');
  const dropdownRef = useRef(null);


  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10); // max 10 digits
    const match = digits.match(/^(\d{3})(\d{3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}-${match[2]} ${match[3]}`.trim();
    } else if (digits.length <= 6) {
      return digits.replace(/^(\d{3})(\d{0,3})$/, '$1-$2').trim();
    }
    return digits;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setPhone(formatted);
  };

  const handleClearInput = () => {
    setPhone(''); // Clear the state completely
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <form className="w-full max-w-2xl mx-auto border border-gray-300 bg-white px-4 py-6 sm:px-6 md:px-8 rounded-md shadow-xl space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800">Get a Quotation Now</h1>

      {/* Name */}
      <div className="relative w-full">
        <input
          type="text"
          id="name"
          required
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Name"
        />
        <label
          htmlFor="name"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative w-full">
        <input
          type="email"
          id="email"
          required
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Email"
        />
        <label
          htmlFor="email"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Email Address
        </label>
      </div>

      {/* Phone */}
      <div
        className="w-full h-12 relative flex shadow-sm rounded-md"
        ref={dropdownRef}
      >
        {/* Flag + Dropdown toggle */}
        <div className="w-16 h-12 border-2 border-gray-300 border-e-0 rounded-s-md flex justify-center items-center bg-gray-100 ">
          <img
            src="https://flagcdn.com/w40/my.png"
            alt="Malaysia Flag"
            className="w-6 h-4"
          />
          <IoMdArrowDropdown
            onClick={() => setIsShow(!isShow)}
            className={`cursor-pointer transition-transform ${isShow ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Dropdown */}
        {isShow && (
          <div className="w-60 absolute top-14 z-10 left-0 border border-gray-300 bg-white shadow rounded-md">
            <div className="bg-gray-100  w-full h-12 flex justify-between items-center rounded-md">
              <div className="flex items-center px-2 space-x-3 ">
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

        {/* Phone input */}
        <div className="w-full">
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            onClick={handleClearInput}
            placeholder="012-345 6789"
            className=" h-12 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-e-md px-4"
          />
        </div>
      </div>

      {/* Address */}
      <div className="relative w-full">
        <select
          type="text"
          id="address"
          required
          className="peer h-12 w-full border-2 border-gray-300 text-gray-400 focus:text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Address"
        >
          <option value="">Select service</option>
          <option value="">Aircon Service</option>
          <option value="">Interior Design</option>
          <option value="">Home Renovation</option>
        </select>
      </div>

      {/* Message */}
      <div className="relative w-full">
        <textarea
          id="message"
          required
          rows="4"
          className="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 pt-3 resize-none"
          placeholder="Your Message"
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

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
