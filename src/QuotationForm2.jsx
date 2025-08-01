import React from 'react';



export default function QuotationForm() {

   
    return (
        <div className="w-full max-w-md mx-auto p-7 lg:-translate-y-[13%] xl:-trans-y-1/6 bg-white rounded-md shadow-xl shadow-gray-500">
            <h2 className="text-2xl font-semibold text-center text-blue-500 mb-6">Get a Quotation Now</h2>

            <form className="space-y-6">
                <input
                    type="text"
                    placeholder="First name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="text"
                    placeholder="Last name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="email"
                    placeholder="Active email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="tel"
                    placeholder="Phone number*"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Address*"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="text"
                    placeholder="Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Units <span className="text-red-500">*</span>
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div> */}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded font-semibold text-xl hover:bg-blue-700 transition"
                >
                    Get Quotation Now
                </button>
            </form>
        </div>



    );
}
