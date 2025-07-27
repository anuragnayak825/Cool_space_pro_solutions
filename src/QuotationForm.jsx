import React from 'react';

export default function QuotationForm() {
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
      <div className="relative w-full">
        <input
          type="tel"
          id="phone"
          required
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Phone"
        />
        <label
          htmlFor="phone"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Phone Number
        </label>
      </div>

      {/* Address */}
      <div className="relative w-full">
        <input
          type="text"
          id="address"
          required
          className="peer h-12 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Address"
        />
        <label
          htmlFor="address"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-sm transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Address
        </label>
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
